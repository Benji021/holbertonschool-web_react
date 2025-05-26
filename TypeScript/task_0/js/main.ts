// Interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creation of two students
const student1: Student = {
  firstName: "Lara",
  lastName: "Croft",
  age: 20,
  location: "England",
};

const student2: Student = {
  firstName: "Sacha",
  lastName: "Ketchum",
  age: 22,
  location: "Tokyo",
};

// Student board
const studentsList: Student[] = [student1, student2];

// Creating a table in Vanilla JS
const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

// Add a line for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
