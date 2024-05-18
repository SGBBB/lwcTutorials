import { LightningElement,wire } from 'lwc';
import { subscribe,MessageContext, unsubscribe } from 'lightning/messageService';

import displayText from '@salesforce/messageChannel/displayText__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class SubscriberComponent extends LightningElement {
    messageReceived='';
    subscription=null;

    @wire(MessageContext) messageContext;

    connectedCallback() {
        if(this.subscription){
            return;
        }
        console.log('messageReceived IS --> in',this.messageReceived);
        this.handleSubscribe();

        console.log('messageReceived IS --> ',this.messageReceived);

        
        
    }

    disconnectedCallback() {
        this.handleUnSubscribe();

    }
    handleSubscribe(){
        this.subscription=subscribe(this.messageContext,displayText,(parameter)=>{
            console.log('inside providing subscription ',parameter.message);
            this.messageReceived=parameter.message;
        });
    }
    handleUnSubscribe(){
        unsubscribe(this.subscription);
        this.subscription=null;
    }


}