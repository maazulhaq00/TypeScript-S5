
// Student Record Management System

// 1. Create Student Interface
interface Student {
    id: number;
    name: string;
    marks: number;
}

// 2. Create Array of Students
let student: Student[] = [
    { id: 1, name: "Ali", marks: 85 },
    { id: 2, name: "Ahmed", marks: 45 },
    { id: 3, name: "Saad", marks: 65 },
    { id: 4, name: "Usman", marks: 35 }
];

// 3. Function to Display Student Details
function displayStudent(studentList: Student[]): void {

    console.log("===== STUDENT RECORDS =====");

    studentList.forEach((student) => {

        console.log("--------------------------");
        console.log("Student ID:", student.id);
        console.log("Student Name:", student.name);
        console.log("Student Marks:", student.marks);

        // 4. Check Pass or Fail
        if (student.marks >= 50) {
            console.log("Result: Passed");
        } else {
            console.log("Result: Failed");
        }
    });

    console.log("==========================");
}

// 5. Call Function
displayStudents(students);
