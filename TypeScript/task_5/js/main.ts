// Interface MajorCredits
interface MajorCredits {
    credits: number;
    brand: 'major';
}

// Interface MinorCredits
interface MinorCredits {
    credits: number;
    brand: 'minor';
}

// Function sumMajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major'
  };
}

// Function sumMinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor'
  };
}