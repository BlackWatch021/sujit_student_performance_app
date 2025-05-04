import { Eye, Edit, Trash, NotebookPen, Trash2 } from "lucide-react";
import { roboto } from "./fonts";

export const stressTableColumns = [
  { header: "Name", accessor: "name" },
  { header: "Department", accessor: "department" },
  { header: "Attendance", accessor: "attendance" },
  { header: "GPA", accessor: "gpa" },
  {
    header: "Stress Level",
    accessor: "stress",
    render: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.stress === "Low"
            ? "bg-green-100 text-green-700"
            : row.stress === "Medium"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {row.stress}
      </span>
    ),
  },
];

export const stressTableData = [
  {
    name: "Alice Johnson",
    department: "Computer Science",
    attendance: "92%",
    gpa: "3.8",
    stress: "Low",
  },
  {
    name: "Bob Lee",
    department: "Information Technology",
    attendance: "85%",
    gpa: "3.4",
    stress: "Medium",
  },
  {
    name: "Catherine Smith",
    department: "Electronics",
    attendance: "78%",
    gpa: "2.9",
    stress: "High",
  },
  {
    name: "Daniel Kim",
    department: "Mechanical",
    attendance: "88%",
    gpa: "3.2",
    stress: "Medium",
  },
  {
    name: "Eva Mendes",
    department: "Computer Science",
    attendance: "96%",
    gpa: "3.9",
    stress: "Low",
  },
  {
    name: "Farhan Qureshi",
    department: "Civil",
    attendance: "70%",
    gpa: "2.4",
    stress: "High",
  },
  {
    name: "Grace Lee",
    department: "Information Technology",
    attendance: "89%",
    gpa: "3.5",
    stress: "Low",
  },
  {
    name: "Henry Zhao",
    department: "Mechanical",
    attendance: "83%",
    gpa: "3.1",
    stress: "Medium",
  },
  {
    name: "Isabel Garcia",
    department: "Electronics",
    attendance: "75%",
    gpa: "2.7",
    stress: "High",
  },
  {
    name: "Jack Thompson",
    department: "Civil",
    attendance: "91%",
    gpa: "3.6",
    stress: "Low",
  },
  {
    name: "Karen Das",
    department: "Computer Science",
    attendance: "87%",
    gpa: "3.3",
    stress: "Medium",
  },
  {
    name: "Liam Patel",
    department: "Information Technology",
    attendance: "93%",
    gpa: "3.7",
    stress: "Low",
  },
  {
    name: "Maya Fernandez",
    department: "Mechanical",
    attendance: "80%",
    gpa: "2.8",
    stress: "High",
  },
  {
    name: "Noah Singh",
    department: "Civil",
    attendance: "90%",
    gpa: "3.5",
    stress: "Medium",
  },
  {
    name: "Olivia Park",
    department: "Electronics",
    attendance: "76%",
    gpa: "2.6",
    stress: "High",
  },
];

export const analyticsTableColumns = [
  { header: "Name", accessor: "name" },
  { header: "Department", accessor: "department" },
  { header: "Attendance", accessor: "attendance" },
  { header: "GPA", accessor: "gpa" },
  {
    header: "Actions",
    accessor: "actions",
    render: (row) => (
      <div className="flex gap-3">
        <div
          className="flex items-center gap-x-1 cursor-pointer group"
          onClick={() => console.log("View", row.name)}
        >
          <Eye className="w-5 h-5 text-secondary group-hover:text-blue-700 transition-colors" />
          <p
            className={`${roboto.className} text-para text-black/40 group-hover:text-blue-700 transition-colors`}
          >
            View
          </p>
        </div>
        <div
          className="flex items-center gap-x-1 cursor-pointer group"
          onClick={() => console.log("Edit", row.name)}
        >
          <NotebookPen className="w-5 h-5 text-[#edf117] group-hover:text-yellow-600 transition-colors" />
          <p
            className={`${roboto.className} text-para text-black/40 group-hover:text-yellow-600 transition-colors`}
          >
            Edit
          </p>
        </div>
        <div
          className="flex items-center gap-x-1 cursor-pointer group"
          onClick={() => console.log("Delete", row.name)}
        >
          <Trash2 className="w-5 h-5 text-[#f55050] group-hover:text-red-600 transition-colors" />
          <p
            className={`${roboto.className} text-para text-black/40 group-hover:text-red-600 transition-colors`}
          >
            Delete
          </p>
        </div>
      </div>
    ),
  },
];

export const analyticsTableData = [
  { name: "Alice Johnson", department: "CS", attendance: "94%", gpa: "3.9" },
  { name: "Bob Lee", department: "IT", attendance: "87%", gpa: "3.4" },
  { name: "Carla Mendes", department: "ECE", attendance: "91%", gpa: "3.7" },
  { name: "Daniel Kim", department: "ME", attendance: "82%", gpa: "3.1" },
  { name: "Eva Brown", department: "CS", attendance: "96%", gpa: "3.95" },
  { name: "Frank Thomas", department: "IT", attendance: "85%", gpa: "3.3" },
  { name: "Grace Liu", department: "ECE", attendance: "89%", gpa: "3.6" },
  { name: "Henry Adams", department: "ME", attendance: "77%", gpa: "2.9" },
  { name: "Isabel Green", department: "CS", attendance: "92%", gpa: "3.8" },
  { name: "Jack White", department: "IT", attendance: "88%", gpa: "3.5" },
  { name: "Kylie Evans", department: "ECE", attendance: "90%", gpa: "3.65" },
  { name: "Liam Smith", department: "ME", attendance: "81%", gpa: "3.0" },
  { name: "Maya Patel", department: "CS", attendance: "95%", gpa: "3.92" },
  { name: "Noah Clark", department: "IT", attendance: "86%", gpa: "3.35" },
  { name: "Olivia Wright", department: "ECE", attendance: "93%", gpa: "3.85" },
  { name: "Paul Martinez", department: "ME", attendance: "79%", gpa: "2.95" },
  { name: "Quinn Turner", department: "CS", attendance: "90%", gpa: "3.7" },
  { name: "Rachel Scott", department: "IT", attendance: "84%", gpa: "3.2" },
  { name: "Sam Wilson", department: "ECE", attendance: "88%", gpa: "3.55" },
  { name: "Tina Chen", department: "ME", attendance: "83%", gpa: "3.15" },
  { name: "Umar Ali", department: "CS", attendance: "97%", gpa: "4.0" },
  { name: "Vera Morris", department: "IT", attendance: "80%", gpa: "3.1" },
  { name: "Will Parker", department: "ECE", attendance: "86%", gpa: "3.4" },
  { name: "Xena Lee", department: "ME", attendance: "78%", gpa: "2.85" },
  { name: "Yasmin Rogers", department: "CS", attendance: "91%", gpa: "3.75" },
  { name: "Zane Foster", department: "IT", attendance: "89%", gpa: "3.45" },
  { name: "Aaron Gray", department: "ECE", attendance: "92%", gpa: "3.6" },
  { name: "Bianca Hall", department: "ME", attendance: "80%", gpa: "2.9" },
  { name: "Caleb Reed", department: "CS", attendance: "93%", gpa: "3.85" },
  { name: "Diana West", department: "IT", attendance: "87%", gpa: "3.3" },
];

export const studentPerformanceColumns = [
  { header: "Subject", accessor: "subject" },
  { header: "Midterm", accessor: "midterm" },
  { header: "Final", accessor: "final" },
  { header: "Assignments", accessor: "assignments" },
  { header: "Quizzes", accessor: "quizzes" },
  { header: "Participation", accessor: "participation" },
];

export const studentPerformanceData = [
  {
    subject: "Data Structures",
    midterm: 85,
    final: 90,
    assignments: 88,
    quizzes: 84,
    participation: 80,
  },
  {
    subject: "DBMS",
    midterm: 79,
    final: 85,
    assignments: 90,
    quizzes: 76,
    participation: 85,
  },
  {
    subject: "Operating Systems",
    midterm: 72,
    final: 78,
    assignments: 80,
    quizzes: 75,
    participation: 70,
  },
  {
    subject: "Computer Networks",
    midterm: 81,
    final: 84,
    assignments: 85,
    quizzes: 82,
    participation: 78,
  },
  {
    subject: "Software Engineering",
    midterm: 88,
    final: 91,
    assignments: 89,
    quizzes: 86,
    participation: 82,
  },
  {
    subject: "Machine Learning",
    midterm: 76,
    final: 83,
    assignments: 87,
    quizzes: 80,
    participation: 77,
  },
  {
    subject: "Cyber Security",
    midterm: 70,
    final: 75,
    assignments: 73,
    quizzes: 72,
    participation: 68,
  },
  {
    subject: "Cloud Computing",
    midterm: 84,
    final: 89,
    assignments: 86,
    quizzes: 81,
    participation: 79,
  },
  {
    subject: "Data Analytics",
    midterm: 78,
    final: 82,
    assignments: 84,
    quizzes: 79,
    participation: 76,
  },
  {
    subject: "Artificial Intelligence",
    midterm: 86,
    final: 90,
    assignments: 91,
    quizzes: 88,
    participation: 83,
  },
];
