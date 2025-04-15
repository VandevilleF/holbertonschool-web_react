interface MajorCredits {
	credits: number;
	readonly brand: 'major';
}
interface MinorCredits {
	credits: number;
	readonly brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: 'major',
	}
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: 'minor',
	}
}

const math: MajorCredits = { credits: 3, brand: "major" };
const physics: MajorCredits = { credits: 4, brand: "major" };

const sience: MinorCredits = { credits: 2, brand: "minor" };
const art: MinorCredits = { credits: 1, brand: "minor" };

console.log(sumMajorCredits(math, physics));
console.log(sumMinorCredits(sience, art));
