export class User {
    public id:string;
    public name: string;
    public profileImageUrl: string;
    public email: string;
    public address:string;
    public gender:Gender;
    public mobileNumber:string;
    public departmentName:string;
    public departmentId:string;
    public accountCreatedOn: Date;
    public accountCreatedBy: string;
    public accountCreatedById: string;
    public accountStatus:AccountStatus;
    public academicDetailsId:string;
    public userRole:SystemRoles;
    public workDetailsId:string;
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

export class WorkDetails{
    public id:string;
    public userId:string;
    public designation:string;
    public type:UserType;
}

export class Department{
    public id:string;
    public name:string;
    public parentDepartmentName:string;
    public createdOn:Date;
    public createdBy:string;
    public createdById:string;  
}
