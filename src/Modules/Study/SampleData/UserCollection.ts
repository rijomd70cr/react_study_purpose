export const userData: any = {
    "success": "true",
    "statusCode": 200,
    "message": "",
    "data": {
        "memberCode": 0,
        "totalRecord": 30,
        "filteredListCount": 4,
        "memberList": [
            {
                "eId": "MzA=",
                "code": 8719997,
                "name": "MAHATMA GANDHI",
                "mobileNumber": "971569595959",
                "memberCategory": "INDIVIDUAL",
                "address": "YJTYJ RTYJR T RTYJRYU",
                "nationality": "India",
                "status": "Compliance Approval Pending",
            },
            {
                "eId": "Mjk=",
                "code": 8719996,
                "name": "TESTPEP TWO",
                "mobileNumber": "971565656565",
                "memberCategory": "INDIVIDUAL",
                "address": "WEFWEV ERVQERW QERVQER",
                "nationality": "India",
                "status": "Compliance Second Level Approval Pending",
            },
            {
                "eId": "Mjg=",
                "code": 8719995,
                "name": "TESTPEP ONE",
                "mobileNumber": "971587456824",
                "memberCategory": "INDIVIDUAL",
                "nationality": "India",
                "status": "Compliance Approval Pending",
            },
            {
                "eId": "Mjjjgc=",
                "code": 74563259,
                "name": "FIRST LAST",
                "mobileNumber": "971508745855",
                "memberCategory": "CORPORATE",
                "nationality": "Algeria",
                "status": "Approval Pending",
            },
            {
                "eId": "Mjkjjc=",
                "code": 45632145,
                "name": "Sachin",
                "mobileNumber": "971508745855",
                "memberCategory": "CORPORATE",
                "nationality": "Algeria",
                "status": "Approved",
            },
            {
                "eId": "Mjhhc=",
                "code": 7456327,
                "name": "Devan LAST",
                "mobileNumber": "971508745855",
                "memberCategory": "INDIVIDUAL",
                "nationality": "Algeria",
                "status": "Approval Pending",
            },
            {
                "eId": "Mjh=",
                "code": 85522364,
                "name": "Ramya",
                "mobileNumber": "971508745855",
                "memberCategory": "INDIVIDUAL",
                "nationality": "Algeria",
                "status": "Approved",
            }
        ],
    },
}


type headerTypes = {
    name: string,
    label: string,
    isGrouping?: boolean,
    style?: any,
}

export const headers: headerTypes[] = [
    {
        name: "code",
        label: "Code",
    },
    {
        name: "name",
        label: "Name"
    },
    {
        name: "mobileNumber",
        label: "Mobile Number"
    },
    {
        name: "memberCategory",
        label: "Member Category",
        isGrouping: true
    },
    {
        name: "status",
        label: "Status",
        isGrouping: true
    }
];
