export class Audit{
    public id:string;
    public type:string;
    public entity:AuditEntity;
    public oldValueId:number;
    public newValueId:number;
    public oldValue:any;
    public newValue:any;
    public modifiedOn:Date;
    public modifiedById:string;
    public modifiedByName:string;
}