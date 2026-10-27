import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface defining the structure of a student record
interface Student {
  id: number;
  name: string;
  marks: number;
}

// Root component for Student Records Management
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Array containing student records
  students: Student[] = [
    { id: 1, name: 'Abdul Wasay', marks: 85 },
    { id: 2, name: 'Zain Ansari', marks: 42 },
    { id: 3, name: 'Fakhar Humayun', marks: 65 }
  ];

  // Function to determine pass/fail status based on marks
  getResult(marks: number): string {
    return marks >= 50 ? 'Passed' : 'Failed';
  }
}
