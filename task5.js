function waitingTime(waitingTimes, serialNumber) {
    
    if (!Array.isArray(waitingTimes)) {
        return "Invalid Input"; 
    }

    
    if (typeof serialNumber !== 'number') {
        return "Invalid Input"; 
    }

    let sum = 0;


    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }


    const average = Math.round(sum / waitingTimes.length);

   
   if (serialNumber <= waitingTimes.length) {
        
        return "Invalid Input"; 
    }
   
   
    const difference = (serialNumber - waitingTimes.length) - 1;


    return average * difference;
}

const waitingTimes = [3, 5, 7, 11, 6];
const serialNumber = 10;

const result = waitingTime(waitingTimes, serialNumber);
if (result !== undefined) {
    console.log("Result:", result); // Output will be the product of average and difference
}
