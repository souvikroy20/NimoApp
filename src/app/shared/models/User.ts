export class User {
    public id:string;
    public name: string;
    public profilePic: string;
    public email: string;
    public address:string;
    public gender:Gender;
    public mobileNumber:string;
    public departmentName:string;
    public departmentId:string;
    public accountCreatedOn: Date;
    public accountCreatedBy: string;
    public accountCreatedById: string;
    public accountModifiedOn: Date;
    public accountModifiedBy: string;
    public accountModifiedById: string;
    public accountStatus:AccountStatus;
    public academicDetailsId:string;
    
}

export class AcademicDetails{
    public id:string;
    public studentId:string;
    public academicYear:string;
    public enrollmentNumber:string;
    public branch:string;
    public duesStaus: DuesStatus;
    public duesId:string;
}

export class Department{
    public id:string;
    public name:string;
    public parentDepartmentId:string;
    public createdOn:Date;
    public createdBy:string;
    public createdById:string;
    public modifiedOn:string;
    public modifiedBy:string;
    public modifiedById:string;    
}