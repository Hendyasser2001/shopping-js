let email = document.querySelector("#email")
let pass = document.querySelector("#password")
let sub = document.querySelector("#sub")

sub.addEventListener("click" , function (e)
{
    e.preventDefault()
    if( email.value ==="" || pass.value ===""){
        alert("fill data please")
    }


    else{
        if(localStorage.getItem("email")=== email.value && localStorage.getItem("password") === pass.value)
        {
            setTimeout( ()=>{
                window.location = "index.html"
            })
        }
        else{
            alert("password and email is wrong")
        }

    
    
    }
 }   )