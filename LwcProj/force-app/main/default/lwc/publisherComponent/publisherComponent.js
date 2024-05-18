import { LightningElement,wire } from 'lwc';
import { publish,MessageContext } from 'lightning/messageService'; 
import displayText from '@salesforce/messageChannel/displayText__c';
 

export default class PublisherComponent extends LightningElement {
    @wire(MessageContext) messageContext;
    name=''

    messagePayload = {
        recordId: '0012y00000L5R6jAAF' 
        //recordData: { /* Data representing the record */ }
    };
    
    payload = { name: 'valuesPassed' }
    publishMessage(event){
        console.log('inside publishMessage()',this.name);
        let payload = { message:this.name };
        publish(this.messageContext, displayText, payload);
        console.log('after publishMessage()');
    }
    onChangeMethod(event){
        this.name=event.target.value;
    }

    
    
     
}