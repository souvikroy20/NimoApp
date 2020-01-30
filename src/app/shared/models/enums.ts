enum SystemRoles{
    GLOBAL_ADMIN,
    OFFICE_ADMIN,
    STUDENT,
    DEPARTMENT,
    DEPARTMENT_HEAD
}

enum AccountStatus{
    REGISTERED,
    ACTIVATED,
    REMOVED,
}

enum DuesStatus{
    OPEN,
    APPLIED,
    VERIFIED,
    APPROVED,
    CLOSED
}

enum DuesType{
    SINGLE,
    TOTAL
}

enum Gender{
    MALE,
    FEMALE,
    OTHERS
}

enum AuditEntity{
    DEPARTMENT,
    DUES,
    NAME,
    EMAIL,
    ADDRESS,
    MOBILE,
    PROFILE_PIC,
    ACCOUNT_STATUS,
    USER_ROLE,
}
enum AuditType{
    ASSIGNMENT,
    UPDATION,
}

enum UserType{
    FACULTY,
    STAFF
}