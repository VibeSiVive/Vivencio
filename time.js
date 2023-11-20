//let time = "07:45:17 PM"
// let time = "03:30:29 AM"
// let time = "12:00:00 AM"
// let time = "11:59:59 PM"

//////expected output: 19:45:17
//////expected output: 03:30:29
//////expected output: 00:00:00
//////expected output: 23:59:59

function normalToMilitary(time) {
    var [hours, minutes, seconds, period] = time.split(/:|\s/);
    
    if (period === 'PM' && hours !== '12') {
    hours = parseInt(hours) + 12;
    }
    
    if (period === 'AM' && hours === '12') {
    hours = '00';
    }
    
    return hours + ':' + minutes + ':' + seconds;
    }
    
    var normalTime = '11:59:59 PM';
    var convertedTime = normalToMilitary(normalTime);
    console.log(convertedTime); 