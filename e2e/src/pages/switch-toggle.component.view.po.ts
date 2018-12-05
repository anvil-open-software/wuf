import { browser, element, by } from 'protractor';


export class SwitchToggleComponentView {

    get_viewTitle() {
        return element(by.css('div.component_tabs_name'));
    }

    get_viewTitle_text() {
        return this.get_viewTitle().getText();
    }

    // get_cardContainer() {
    // 	return element(by.css('mat-card.example-card'));
    // }
    // get_cardContainer_header () {
    // 	return element(by.css('mat-card.example-card mat-card-header'));
    // }
    // get_cardContainer_header_title () {
    // 	return element(by.css('mat-card.example-card mat-card-header mat-card-title h3'));
    // }
    // get_cardContainer_header_title_text () {
    // 	return this.get_cardContainer_header().getText();
    // }
    get_cardContainer_header_subtitle() {
        return element(by.css('mat-card.example-card mat-card-header mat-card-subtitle'));
    }

    // get_cardContainer_header_subtitle_text () {
    // 	return this.get_cardContainer_header_subtitle().getText();
    // }
    get_cardContainer_content() {
        return element(by.css('mat-card.example-card mat-card-content div'));
    }

    // get_cardContainer_actions () {
    // 	return element(by.css('mat-card.example-card mat-card-actions'));
    // }
    get_cardContainer_actions_slide_toggle() {
        return element(by.css('mat-card.example-card mat-card-actions mat-slide-toggle'));
    }

    get_cardContainer_actions_slide_toggle_text() {
        return this.get_cardContainer_actions_slide_toggle().getText();
    }

    get_cardContainer_actions_example() {
        return element(by.css('mat-card.example-card mat-card-actions a'));
    }

    // get_cardContainer_actions_example_link () {
    // 	return element(by.css('div.component_tabs_name')).getText();
    // }
    // get_cardContainer_actions_example_text () {
    // 	return this.get_cardContainer_actions_example().getText();
    // }

}
