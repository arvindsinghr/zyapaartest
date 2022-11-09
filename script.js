const employee = [];

function insertObject(){
    // alert("hello");
    let empname=document.getElementById("name").value;
    let empage=document.getElementById("age").value;
    let empsal=document.getElementById("sal").value;
    let empdept=document.getElementById("dept").value;
    employee.push({name:empname,age:empage,sal:empsal,dept:empdept});  
    sessionStorage.setItem('employee',JSON.stringify(employee));
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("sal").value = "";
    document.getElementById("dept").value = "";
    alert("Saved Succesfully");
   }
