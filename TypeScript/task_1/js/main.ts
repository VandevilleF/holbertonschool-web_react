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

// Interface pour le constructeur
interface StudentConstructor {
	new(firstName: string, lastName: string): StudentInterface;
}

// Interface pour la classe
interface StudentInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return 'Currently working';
	}
	displayName(): string {
		return this.firstName;
	}
}

const student1 = new StudentClass("John", "Doe");
 console.log(student1.workOnHomework());
 console.log(student1.displayName());
