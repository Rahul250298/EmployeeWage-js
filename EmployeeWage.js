const IS_Absent=0
let empcheck= Math.floor(Math.random()* 10) % 2;
if (empcheck == IS_Absent){
    console.log("Employee is Absent")
}
else
{
    console.log("Employee is present")
}
//UC-2 Swtich case
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS= 8;
const WAGE_PER_HOUR = 20;
{
    let empHrs =0;
    let empcheck = Math.floor(Math.random() * 10) % 3;
    switch (empcheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;    
    
        default:
            empHrs =0;
            break;
    }
    let empwage = empHrs * WAGE_PER_HOUR;
    console.log("Empwage:" + empwage)
}
//UC 3
function getWorkingHours(empcheck){
    switch(empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
          default:
                return 0;    
    }
}

let empCheck = Math.floor(Math.random() * 10)% 3 ;
let empHrs = getWorkingHours(empCheck);
let empwage = empHrs * WAGE_PER_HOUR;
console.log("hour:" +empHrs+ "Emp Wage:" +empwage);



