function login(){
    const username = document.getElementById("uname");
    const password = document.getElementById("pw");

    if(username.value === "Nurulfikri" && password.value === "12345"){
        alert("Login Sucefull")
        window.location.href = "LoginValidation.html";
    }
    else{
        alert("Username or Password Is Wrong!");
        pw.value = "";
        uname.focus();
    }
}