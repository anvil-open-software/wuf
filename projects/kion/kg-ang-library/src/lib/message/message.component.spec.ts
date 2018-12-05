import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { KgMessageComponent } from './message.component';
import { KgMessageService } from './message.service';


describe('KgMessageComponent', () => {
    let component: KgMessageComponent;
    let fixture: ComponentFixture<KgMessageComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // Stub KgMessageService for test purposes
    let spy_serviceCheck: any;
    let spy_errorMessage: any;
    let spy_successMessage: any;
    let messageService: any;

    let testMessage: string = 'Hello world!';
    let errorMessage: string = 'This is an error message.';
    let successMessage: string = 'This is a success message.';

    // Configure test module. The first beforeEach handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                KgMessageComponent
            ],
            providers: [
                KgMessageService
            ],
            imports: [
                RouterTestingModule
            ]
        })
        .compileComponents();
    }));

    // Create elements for testing.
    // NOTE: This second beforeEach is a synchronous. You can count on the test runner to wait for the first asynchronous beforeEach to finish before calling the second.
    beforeEach(() => {
        fixture = TestBed.createComponent(KgMessageComponent);
        component = fixture.componentInstance;

        // Get KgMessageService from the root injector
        messageService = fixture.debugElement.injector.get(KgMessageService);

        fixture.detectChanges(); // Trigger data binding and propagation of any properties to the DOM element
    });

    describe('Sanity check', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('tracks if addSuccessLiveMessage() from message service can be called', () => {
            spy_serviceCheck = spyOn(messageService, 'addSuccessLiveMessage');

            expect(spy_serviceCheck).not.toHaveBeenCalled(); // Check if any calls have been made to mock service yet
            messageService.addSuccessLiveMessage([successMessage]); // Make a call
            expect(spy_serviceCheck).toHaveBeenCalled(); // Now check again
        });

        // Find the element.  It should not yet exist in the DOM.
        it('should not yet have any DOM elements', () => {
            fixture.detectChanges();
            expect(fixture.debugElement.query(By.css('.message-success'))).toBeFalsy();
        });
    });

    describe('Display error messaging', () => {
        beforeEach(() => {
            spy_errorMessage = spyOn(messageService, 'addErrorLiveMessage');
        });

        it('should still not yet have any DOM elements before calling message functions', () => {
            expect(fixture.debugElement.query(By.css('.message-danger'))).toBeFalsy(); // DOM elements should still not exist
            expect(spy_errorMessage).not.toHaveBeenCalled(); // Check if any calls have been made to mock service yet
        });

        it('should still not show any message after component initialized and initial call to addErrorLiveMessage()', () => {
            messageService.addErrorLiveMessage([errorMessage]); // Make a call
            expect(spy_errorMessage).toHaveBeenCalled(); // Now check again
        });

        // it('should show error message after addErrorLiveMessage() promise (fakeAsync)', fakeAsync(() => {
        // 	messageService.addErrorLiveMessage([errorMessage]); // Make a call
        // 	expect(spy_errorMessage).toHaveBeenCalled(); // Now check again
        //
        // 	fixture.detectChanges();
        // 	tick();						// wait for async addErrorLiveMessage()
        // 	fixture.detectChanges();	// update view with error message
        //
        // 	de = fixture.debugElement.query(By.css('.message-danger'));
        // 	el = de.nativeElement;
        //
        // 	expect(de).toBeTruthy();
        // 	expect(el.textContent).toBe(errorMessage);
        // }));
    });
});
