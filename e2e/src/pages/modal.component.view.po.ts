import { browser, element, by } from 'protractor';


export class ModalComponentView {
    modalComponentBtn = element(by.id('createMaterialModalBtn'));
    modalComponentContainer = element(by.className('mat-dialog-container'));
    modalComponentWindowTitle = element(by.className('mat-dialog-title'));
    modalComponentWindowActions = element(by.className('mat-dialog-actions'));
    modalComponentInput = element(by.name('animal'));
    modalComponentSubmitBtn = element(by.name('submit'));
    modalComponentCancelBtn = element(by.name('cancel'));
    modalComponentResults = element(by.id('modal-results'));

    get_viewTitle() {
        return element(by.css('app-root h1')).getText();
    }

    get_modalComponentBtn() {
        return this.modalComponentBtn;
    }

    get_modalComponentContainer() {
        return this.modalComponentContainer;
    }

    get_modalComponentWindowTitle() {
        return this.modalComponentWindowTitle;
    }

    get_modalComponentWindowAction() {
        return this.modalComponentWindowActions;
    }

    get_modalComponentInput() {
        return this.modalComponentInput;
    }

    get_modalComponentSubmitBtn() {
        return this.modalComponentSubmitBtn;
    }

    get_modalComponentCancelBtn() {
        return element(by.name('cancel'));
    }

    get_modalResults() {
        return this.modalComponentResults;
    }

}
