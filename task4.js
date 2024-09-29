function calculateFinalScore(obj) {
    
    if (typeof obj !== 'object' || obj === null ) {
        return "Invalid Input";
    }

    if (typeof obj.name !== 'string') {
        return "Invalid Input";
    }

    if (typeof obj.testScore !== 'number' || obj.testScore > 50) {
        return "Invalid Input";
    }

    if (typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30) {
        return "Invalid Input";
    }

    
    if (typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let bonus = obj.isFFamily ? 20 : 0;
    const finalScore = obj.testScore + obj.schoolGrade + bonus;


    return finalScore >= 80;
}


const obj = {
    name: "Rajib",
    testScore: 50,
    schoolGrade: 30,
    isFFamily: false
}; 

console.log(calculateFinalScore(obj));

