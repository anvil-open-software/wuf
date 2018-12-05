/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';


/**
 * Splitter used when getting the namespaces of the events.
 */
export const EVENT_NS_SPLITTER = ':';

/**
 * Definition of an event to subscribe to.
 */
export class Event {
    /**
     * Name of the event.
     */
    public name: String;

    /**
     * Function to call when the event is triggered.
     */
    public action: Function;

    /**
     * This arg to use when calling the function. The event object is the this arg when null.
     */
    public context: any;

    /**
     * Creates an event.
     *
     * @param name Name of the event.
     * @param action Function to call when the event is triggered.
     * @param context This arg to use when calling the function. Default is null. This event object is the this arg when context is null.
     */
    public constructor(name: String, action: Function, context: any = null) {
        this.name = name;
        this.action = action;
        this.context = context;
    }
}

/**
 * Class the keeps track of events for compoonent that might not be tied together. Allows for cross component event triggering.
 */
export class EventBus {

    private events: Map<String, Event[]> = new Map<String, Event[]>();

    private splitEventNameIntoNamespaces(eventName: String): String[] {
        return eventName.split(EVENT_NS_SPLITTER);
    }

    // Subscribe to events

    /**
     * Subscribes to an event by providing the Event object.
     *
     * @param event Event to subscribe to.
     */
    public subscribeByEvent(event: Event) {
        this.addEvent(event.name, event);
    }

    /**
     * Subscribes to an event by providing the event name, action, and context.
     * This builds an Event object which is returned. The event object is used to unsubscribe from the event.
     *
     * @param eventName Name of the event to subscribe to.
     * @param action Function to call when the event is raised.
     * @param context This arg to use when calling the action.
     *
     * @returns Returns @link(Event) object composed of the passed arguments.
     */
    public subscribe(eventName: String, action: Function, context: any = null): Event {
        const event: Event = new Event(eventName, action, context);
        this.subscribeByEvent(event);
        return event;
    }

    private addEvent(eventName: String, event: Event) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        // @ts-ignore: TS2532: Object is possibly 'undefined'.
        this.events.get(eventName).push(event);
    }

    // Unsubscribe from events

    /**
     * Unsubscribes from an event.
     *
     * @param event Event to unsubscribe to. This was passed back from the subscribe function or the object passed into subscribeByEvent.
     */
    public unSubscribe(event: Event) {
        this.removeEvent(event.name, event);
    }

    /**
     * Removes all event subscriptions.
     */
    public unSubscribeAll() {
        this.events.clear();
    }

    private removeEvent(eventName: String, event: Event) {
        const registeredEvents = this.events.get(eventName);

        if (registeredEvents !== null && registeredEvents !== undefined) {
            for (let i = 0; i < registeredEvents.length; i++) {
                if (registeredEvents[i] === event) {
                    registeredEvents.splice(i, 1);
                    break;
                }
            }
        }
    }

    // Fire Events

    /**
     * Triggers all subscriptions to an event.
     *
     * @param eventName Name of the event to trigger.
     * @param data Data to pass to the subscribers.
     */
    public publish(eventName: String, data?: any) {
        const events: String[] = [];
        const namespaces = this.splitEventNameIntoNamespaces(eventName);

        let currentnamespace = '';

        // Backbone doesn't trigger events for the global namespace, so we will trigger an event for each namespace.
        // eg: auth:loginsuccess will trigger auth and auth:loginsuccess
        // eg: auth:error:loginfail will trigger auth, auth:error, and auth:error:loginsuccess
        namespaces.forEach(namespace => {
            currentnamespace += (currentnamespace === '' ? '' : ':') + namespace;
            events.push(currentnamespace);
        });

        // Fire the events in reverse from most specific to most generic.
        // eg: auth:loginsuccess will trigger auth:loginsuccess then auth
        // eg: auth:error:loginfail will trigger auth:error:loginsuccess then auth:error then auth
        events.reverse().forEach(event => {
            this.fireEvents(event, data);
        });
    }

    private fireEvents(eventName: String, data?: any) {
        const registeredEvents = this.events.get(eventName);

        if (registeredEvents !== null && registeredEvents !== undefined) {
            registeredEvents.forEach(event => {
                const thisArg = event.context === null ? event : event.context;
                event.action.call(thisArg, data);
            }, this);
        }
    }
}

/**
 * Event bus where global message are sent across like login/logut/routing/etc...
 */
export const GLOBAL_EVENT_BUS = new EventBus();
