import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    constructor() {
        super();
        console.log('Hi Constructor');
    }
    connectedCallback() {
        console.log('Hi connectedCallback');
    }
    renderedCallback(){
        console.log('Hi renderedCallback');
    }
    disconnectedCallback() {
        console.log('Hi disconnectedCallback');
    }
    employee={
        name: 'Sagar Bora',
        Age:  22
    }

    get getEmployeeCategory(){
        const band=this.employee.Age< 18 ? 'Kid':('Adult');
        return band;

    }
        

    
}