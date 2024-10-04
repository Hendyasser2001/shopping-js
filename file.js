let first = document.querySelector("#first")
let last = document.querySelector("#last")
let email = document.querySelector("#email")
let pass = document.querySelector("#password")
let registerbtn = document.querySelector("#register")



registerbtn.addEventListener("click" , function(e){
e.preventDefault()
if(first.value ==="" || email.value ==="" || last.value ==="" || pass.value ===""){
    alert("Please fill all data");
}
else {
    localStorage.setItem("first" , first.value);
    localStorage.setItem("last" , last.value);
    localStorage.setItem("password" , pass.value);
    localStorage.setItem("email" , email.value);

    setTimeout( () => {
        window.location = "login.html"} 
        , 1500)

}



})

