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

//UC4 While loop
{
    const NUM_OF_WORKING_DAYS =20;
    let totalEmpHrs = 0;
    for (let day =0;
        day<NUM_OF_WORKING_DAYS;day++){
            let empCheck =Math.floor(Math.random() * 10) % 3;
            totalEmpHrs +=getWorkingHours(empCheck);
        }
        let empwage = totalEmpHrs * WAGE_PER_HOUR;
        console.log("UC4 - Total Hrs:" +totalEmpHrs+ "Emp Wage:" +empwage);
}
//UC5 For loop
const NUM_OF_WORKING_DAYS = 2;
let emphrs =0;
for (let day = 0;
    day< NUM_OF_WORKING_DAYS;day++){
        let empCheck =Math.floor(Math.random() * 10) % 3;
        empHrs += getWorkingHours(empCheck);
        }
        let Empwage = empHrs * WAGE_PER_HOUR;
        console.log("Total Hrs:" +empHrs+ "Emp Wage:" +empwage);

 //UC6 Arrays    
 function calDailyWage(emphrs){
     return empHrs * WAGE_PER_HOUR;
 }   
 const MAX_HRS_IN_MONTH = 160;
 const NUM_OF_WORKING_DAYS =20;
 let totalEmpHrs =0;
 let totalWorkingDays =-0;
 let empDailyWageArr = new Array();

 while(totalEmpHrs<= MAX_HRS_IN_MONTH && totaWorkingDays<NUM_OF_WORKING_DAYS){
     totalWorkingDays++;
     let empcheck = Math.flooor(Math.random()* 10)% 3;
     let empHrs= getWorkingHours(empCheck);
     totalEmpHrs += empHrs;
     empDailyWageArr.push(calDailyWage(totalEmpHrs));

 }
let empwage = calDailyWage(totalEmpHrs);
consolr.log("total Days:" + totalWorkingDays + "Total Hrs"+ totalEmpHrs +"Emp Wage"+ empwage;)


