alert("Hello !!!")
let marks = prompt("Enter marks");
if(marks<=100&&marks>=90){
    grade = "A";
}
else if(marks<90&&marks>=80){
    grade = "B";
}
else if(marks<80&&marks>=70){
    grade = "C";
}
else if(marks<70&&marks>=60){
    grade = "D";
}
else{
    grade = "F";
}

console.log("Mark Entered = ",marks);
console.log("Grade = ",grade);