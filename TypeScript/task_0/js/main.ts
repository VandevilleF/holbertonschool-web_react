interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 38,
	location: "Miami",
}
const student2: Student = {
	firstName: "Jeanne",
	lastName: "Folk",
	age: 25,
	location: "Las Vegas",
}

type studentsList = Array<Student>;

const studentsList = [student1, student2];

function WrapInTable(studentsList: Array<Student>): void {
	const table = document.createElement('table');

	studentsList.forEach(student => {
		const row = document.createElement('tr');
		const fNameRow = document.createElement('td');
		fNameRow.textContent = student.firstName;
		const locationRow = document.createElement('td');
		locationRow.textContent = student.location;
		row.appendChild(fNameRow);
		row.appendChild(locationRow);

		table.appendChild(row);
	});
	document.body.appendChild(table);
}

WrapInTable(studentsList);
