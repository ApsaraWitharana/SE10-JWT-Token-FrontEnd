//dashboard - js
// logout -set loging user set dashboard
$(document).ready(function (){
    let token = localStorage.getItem("token");
    if (token){

    }else {
        window.location.href="signin.html"
    }
})
function logout(){
    localStorage.removeItem("token")

}