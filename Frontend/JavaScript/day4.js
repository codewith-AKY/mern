//create an array of 5 student with name,address,faculty and batch.Display the names of each students using map

let studentData = [
    {
        student: 1,
        name: "Anil",
        address: "Chapur",
        faculty: "Software",
        batch: 2024
    },
    {
        student: 2,
        name: "Anil",
        address: "Hetauda",
        faculty: "BCA",
        batch: 2021
    },
    {
        student: 3,
        name: "Aniket",
        address: "Jhapa",
        faculty: "Electronic",
        batch: 2026
    },
    {
        student: 4,
        name: "Anish",
        address: "Chitwan",
        faculty: "Computer",
        batch: 2023
    },
    {
        student: 5,
        name: "Amit",
        address: "Hetauda",
        faculty: "IT",
        batch: 2025
    }
];

let result = studentData.map((student) => {
    return student.name+" "+student.faculty;
});

console.log(result);