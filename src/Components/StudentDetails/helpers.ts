 export const columns = [
    {
      Header: "Student ID",
      accessor: "student_id",
    },
    {
      Header: "Student Name",
      id: "student_name",
      accessor: "student_name"
    },
    {
      Header: "No of Days Present",
      accessor: "no_of_days_present",
      Footer: (info: any) => {
        const total = info.data.reduce((a: number, b: any) => (a += b[info.column.id]), 0);
        return `Total : ${total}`;
      },
    },
    {
        Header: "No of Days Absent",
        accessor: "no_of_days_absent",
        Footer: (info: any) => {
          const total = info.data.reduce((a: number, b: any) => (a += b[info.column.id]), 0);
          return `Total : ${total}`;
        },
      },
    {
      Header: "Month",
      accessor: "month",
    },
    {
      Header: "Remarks",
      accessor: "remarks",
    },
  ];

  export const dummyTableData = [
    {
        "student_id": 1218,
        "student_name": "Chinni",
        "no_of_days_present": 20,
        "no_of_days_absent": 10,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 2345,
        "student_name": "Alex",
        "no_of_days_present": 18,
        "no_of_days_absent": 12,
        "month": "january",
        "remarks": "family event"
    },
    {
        "student_id": 3456,
        "student_name": "Maria",
        "no_of_days_present": 19,
        "no_of_days_absent": 11,
        "month": "january",
        "remarks": "doctor's appointment"
    },
    {
        "student_id": 4567,
        "student_name": "John",
        "no_of_days_present": 15,
        "no_of_days_absent": 15,
        "month": "january",
        "remarks": "vacation"
    },
    {
        "student_id": 5678,
        "student_name": "Emily",
        "no_of_days_present": 17,
        "no_of_days_absent": 13,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 6789,
        "student_name": "Ryan",
        "no_of_days_present": 16,
        "no_of_days_absent": 14,
        "month": "january",
        "remarks": "family emergency"
    },
    {
        "student_id": 7890,
        "student_name": "Sophia",
        "no_of_days_present": 18,
        "no_of_days_absent": 12,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 8901,
        "student_name": "Liam",
        "no_of_days_present": 20,
        "no_of_days_absent": 10,
        "month": "january",
        "remarks": "school event"
    },
    {
        "student_id": 9012,
        "student_name": "Olivia",
        "no_of_days_present": 19,
        "no_of_days_absent": 11,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 1023,
        "student_name": "Noah",
        "no_of_days_present": 17,
        "no_of_days_absent": 13,
        "month": "january",
        "remarks": "dentist appointment"
    },
    {
        "student_id": 1122,
        "student_name": "Ava",
        "no_of_days_present": 15,
        "no_of_days_absent": 15,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 1221,
        "student_name": "Ethan",
        "no_of_days_present": 18,
        "no_of_days_absent": 12,
        "month": "january",
        "remarks": "family event"
    },
    {
        "student_id": 1320,
        "student_name": "Isabella",
        "no_of_days_present": 20,
        "no_of_days_absent": 10,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 1429,
        "student_name": "Mason",
        "no_of_days_present": 19,
        "no_of_days_absent": 11,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 1528,
        "student_name": "Mia",
        "no_of_days_present": 16,
        "no_of_days_absent": 14,
        "month": "january",
        "remarks": "vacation"
    },
    {
        "student_id": 1627,
        "student_name": "Logan",
        "no_of_days_present": 17,
        "no_of_days_absent": 13,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 1726,
        "student_name": "Amelia",
        "no_of_days_present": 20,
        "no_of_days_absent": 10,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 1825,
        "student_name": "Lucas",
        "no_of_days_present": 18,
        "no_of_days_absent": 12,
        "month": "january",
        "remarks": "family event"
    },
    {
        "student_id": 1924,
        "student_name": "Layla",
        "no_of_days_present": 19,
        "no_of_days_absent": 11,
        "month": "january",
        "remarks": "absent due to illness"
    },
    {
        "student_id": 2023,
        "student_name": "Jackson",
        "no_of_days_present": 15,
        "no_of_days_absent": 15,
        "month": "january",
        "remarks": "doctor's appointment"
    }
];
