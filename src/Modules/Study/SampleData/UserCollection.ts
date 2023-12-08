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
                "eIdentityDetailsId": "MzA=",
                "code": 8719997,
                "name": "MAHATMA GANDHI",
                "mobileNumber": "971569595959",
                "memberCategory": "INDIVIDUAL",
                "memberCategoryCode": "IN",
                "address": "YJTYJ RTYJR T RTYJRYU",
                "nationality": "India",
                "molID": "",
                "riskLevel": "",
                "isWPS": false,
                "isExchangeHouse": false,
                "status": "Compliance Approval Pending",
                "numberOfDoc": 1
            },
            {
                "eId": "Mjk=",
                "eIdentityDetailsId": "Mjk=",
                "code": 8719996,
                "name": "TESTPEP TWO",
                "mobileNumber": "971565656565",
                "memberCategory": "INDIVIDUAL",
                "memberCategoryCode": "IN",
                "address": "WEFWEV ERVQERW QERVQER",
                "nationality": "India",
                "molID": "",
                "riskLevel": "",
                "isWPS": false,
                "isExchangeHouse": false,
                "status": "Compliance Second Level Approval Pending",
                "numberOfDoc": 1
            },
            {
                "eId": "Mjg=",
                "eIdentityDetailsId": "Mjg=",
                "code": 8719995,
                "name": "TESTPEP ONE",
                "mobileNumber": "971587456824",
                "memberCategory": "INDIVIDUAL",
                "memberCategoryCode": "IN",
                "address": "WVWRV RGE ERF3F",
                "nationality": "India",
                "molID": "",
                "riskLevel": "",
                "isWPS": false,
                "isExchangeHouse": false,
                "status": "Compliance Approval Pending",
                "numberOfDoc": 1
            },
            {
                "eId": "Mjc=",
                "eIdentityDetailsId": "MA==",
                "code": 8719994,
                "name": "FIRST LAST",
                "mobileNumber": "971508745855",
                "memberCategory": "CORPORATE",
                "memberCategoryCode": "IN",
                "address": "FVCFCRF",
                "nationality": "Algeria",
                "molID": "",
                "riskLevel": "",
                "isWPS": false,
                "isExchangeHouse": false,
                "status": "Approval Pending",
                "numberOfDoc": 0
            }
        ],
        "showSameAsAbove": false,
        "blockDuplicateMemberFlag": false,
        "showPopupDuplicateMemberFlag": false,
        "memberConnectionCount": 0,
        "isConfirmValidation": false
    },
    "timeStamp": "2023-12-01T12:43:35.5250007+00:00",
    "version": "V.1.42.22"
}


type headerTypes = {
    name: string,
    label: string,
    isGrouping?: boolean,
    style?: any
}

export const headers: headerTypes[] = [
    {
        name: "code",
        label: "Code",
    },
    {
        name: "name",
        label: "Name",
    },
    {
        name: "mobileNumber",
        label: "Mobile Number",
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
