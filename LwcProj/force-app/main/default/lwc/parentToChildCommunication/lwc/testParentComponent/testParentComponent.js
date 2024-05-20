import { LightningElement } from 'lwc';

export default class TestParentComponent extends LightningElement {
    dataToPass='Simran'
    populateTheValueMethod(){
        this.dataToPass=this.refs.userName.value;
    }
}