import { LightningElement, api } from 'lwc';

export default class TestChildComponent extends LightningElement {
    @api
    fullName='Child Component A'; //To make this variable public we have used @api decorator

}