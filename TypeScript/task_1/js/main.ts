interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[name: string]: string | number | boolean;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}

interface PrintTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printT: PrintTeacherFunction = printTeacher;

console.log(printT("John", "Doe"));
