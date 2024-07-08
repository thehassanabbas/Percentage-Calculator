function calculatePercentage() {
    let FullName = document.getElementById("fullName").value;
    let TotalMarks = document.getElementById("totalMarks").value;
    let ObtainedMarks = document.getElementById("obtainedMarks").value;

    percentage = (ObtainedMarks / TotalMarks) * 100;
    percentage = percentage.toFixed(2);

    let grade = "";

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else if (percentage >= 40) {
        grade = "E";
    }
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = `${FullName} ! You have successfully achieved ${grade} grade with a commendable score of ${percentage}%`;
}