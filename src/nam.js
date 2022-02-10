function myfun(){
    var phone = document.getElementById("ph").value;
    var name = document.getElementById("nm").value;
    Valid( phone,name);
}

function Valid( phone , name){

    if(name.length==""){
        document.getElementById("message1").innerHTML = "can not be empty ";
        document.getElementById("message1").style.color = "red";
        document.getElementById("nm").style.border=" 1px solid red";
        return false;
    }
    if(phone == ""){
        document.getElementById("message2").innerHTML="please fill phone number";
        document.getElementById("message2").style.color = "red";
        document.getElementById("ph").style.border=" 1px solid red";
        return false;
    }
    if(isNaN(phone)){
        document.getElementById("message2").innerHTML ="enter only value number";
        document.getElementById("message2").style.color = "red";
        document.getElementById("ph").style.border=" 1px solid red";
        return false;
    }
    if(phone.length!=10){
        document.getElementById("message2").innerHTML = "enter only 10 digits";
        document.getElementById("message2").style.color = "red";
        document.getElementById("ph").style.border=" 1px solid red";
        return false;
    }

}
        