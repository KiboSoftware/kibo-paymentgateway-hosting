/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */


export class ApiError   {
    constructor( name:string , message:string , status:number){
        this.status = status
        this.message = message
        this.name = name
    }
    name: string;
    message: string; 
    status!: number;
}