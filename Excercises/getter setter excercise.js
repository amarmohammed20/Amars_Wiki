// The getter method should return the level of a student, based on how many credits (this.credits) they have.



// If student has more than 90 credits, they are a 'Senior'.
// If the student has 90 or fewer credits, but more than 60 (>= 61), they are a 'Junior'.
// If the student has 60 or fewer credits, but more than 30 (>= 31), they are a 'Sophomore'.
// If the student has 30 or fewer credits, they are a 'Freshman'.

// Think about how you craft your conditional statement, keeping in mind that simplicity is a good objective. 


class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

get level () {
    let output = "";
    if (this.credits > 90) output += "Senior";
    if (this.credits <= 90 && this.credits >= 61 ) output += "Junior";
    if (this.credits <= 60 && this.credits >= 31 ) output += "Sophomore";
    if (this.credits <= 30) output += "Freshman";

    return output;
  }
// Setter example - Inside the major() setter method, set the student's major to a backing property "major". If the student's level is Junior or Senior, the value of the backing property should be equal to the parameter passed to the setter method. If the student is only a Freshman or Sophomore, set the "major" backing property equal to 'None'
  set major(major) {


    if ( this.level === 'Senior' || this.level === 'Junior') {
      this._major = major;
      return this._major;
    } else {
      this._major = 'none';
    return this._major; 
    }

  }
}

  const student = new Student(3.9);