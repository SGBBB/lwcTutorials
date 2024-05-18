import { LightningElement } from 'lwc';

export default class HelloChildComponent extends LightningElement {
    constructor() {
        super();
        console.log('Hi HelloChildComponent Constructor');
    }
    connectedCallback() {
        console.log('Hi HelloChildComponent connectedCallback');
    }
    renderedCallback(){
        console.log('Hi HelloChildComponent renderedCallback');
    }
    disconnectedCallback() {
        console.log('Hi HelloChildComponent disconnectedCallback');
    }
}