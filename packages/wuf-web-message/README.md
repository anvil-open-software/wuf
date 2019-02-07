&lt;wuf-web-message&gt;
====

Description
----
A Web Component designed to be functionality equivalent to its Angular cousing, now removed from the library. Its purpose is to showcase the migration of an Angular component to be a Web component.

### Usage
Note that the examples below are derived from a web application written with Angular framework, in this case the [Living Style Guide](https://gitlab.dematic.com/cloud_visualization_services/living-style-guide).

#### Declare the components 
The software engineer updates the host application's _packages.json_ to include _kg-web-message_:

````json
    "@anviltech/wuf-web-message": "0.0.1",
````

#### Import the components
The software engineer updates the host application's _main.ts_ to import _kg-web-message_:
```typescript
// ...
import '@anviltech/wuf-web-message';
// ...
````


#### Add to the view
The software engineer declares _kg-web-message_ as a target view child, with the recommended place being at the top of the view; the code snippet below is found in the Living Style Guide _web-messages.component's_ _web-messages.component.html_ view:

```html
<wuf-content-main>
    . . .
  <!-- begin Example tab contents -->
  <div class="tab-content" [ngClass]="{ 'active': activeTab === 0}">
    <wuf-web-message #kgm></wuf-web-message>
    <!-- where #kgm is used to provide access to the web component's setter methods
    . . .
```

#### Add to the controller
The host component's controller includes logic to access _kg-web-message_ setter methods; in _Angular_ this is done using the _ViewChild_ decorator; ; the code snippet below is found in the Living Style Guide _web-messages.component's_ _web-messages.component.ts_ controller:

```typescript
export class WufWebMessagesComponent implements OnInit {
	@ViewChild('kgm') kgm : ElementRef;
````

The host component's controller also includes logic to trigger messages.

````typescript
export class WufWebMessagesComponent implements OnInit {
	
	// Button click handler to trigger an error message
	onShowErrorMessageClick() {
		this.kgm.nativeElement.errorMessage = `Danger, Will Robinson!`;
	}

    // Button click handler to trigger an information message
	onShowInfoMessageClick() {
		this.kgm.nativeElement.infoMessage = `Did you know that astronauts never snore? Sleep apnea can't happen without gravity!`
	}

    // Button click handler to trigger a success message
	onShowSuccessMessageClick() {
		this.kgm.nativeElement.successMessage = `I'm ok!`;
	}

	// Button click handler to trigger a warning message
	onShowWarningMessageClick() {
		this.kgm.nativeElement.warningMessage = `The "check engine" light is on.`;
	}
````
 
 #### Results
These calls trigger the insertion of _kg-web-message_ web components as _kg-web-messages_ children, in the order they are created. 

````html
<wuf-web-message>
  #shadow-root (open)
    <div class="message message-dismissible message-danger">
        <button class="message-close close" type="button">×</button>
        <div>Danger, Will Robinson!!</div>
    </div>
    <div class="message message-dismissible message-info">
        <button class="message-close close" type="button">×</button>
        <div>Did you know that astronauts never snore? Sleep apnea can't happen without gravity!!</div>
    </div>
    <div class="message message-dismissible message-succes">
        <button class="message-close close" type="button">×</button>
        <div>I'm ok!</div>
    </div>
    <div class="message message-dismissible message-warning">
        <button class="message-close close" type="button">×</button>
        <div>The "check engine" light is on.</div>
    </div>
</wuf-web-message>
````

The _kg-web-message_ web component includes a _multiplication_ sign element at the top right which, when clicked causes its _kg-web-message's_  parent to be deleted from the DOM.

````html
<!-- the construct message-${this.type is resoved to a class name which controls the message's background color -->
<div class="message message-dismissible message-${this.type}">
    <!-- the message is removed from the DOM when the button's multiplication is clicked  -->
    <button class="message-close close" type="button">&times;</button>
    <div>${this.text}</div>
</div>
````

### Properties
* errorMessage
* infoMessage
* successMessage
* warningMessage


#### Methods
* get errorMessage(): string
* set errorMessage(value: string)
* get infoMessage(): string
* set infoMessage(value: string)
* get successMessage(): string
* set successMessage(value: string)
* get warningMessage(): string {
* set warningMessage(value: string)

#### Events Received
none

#### Events Emitted
none
