//dashboard - js
// logout -set loging user set dashboard
$(document).ready(function (){
    let token = localStorage.getItem("token");
    if (token){
 //set hii massage-append to dashboard
        $.ajax({
            url: "http://localhost:8080/api/v1/blog/newMethod",
            method: "GET",
            contentType: "application/json",
            headers:{
                "Authorization":"Bearer "+token
            },

            //error handling
            success: function (response) {
                console.log(response)
                // Append the token to the dashboard
                $('<p>'+response+'<p>').appendTo('body')
            },
            error: function (error) {
                console.log(error)

            }

        })

    }else {
        window.location.href="signin.html"
    }
})
function logout(){
    localStorage.removeItem("token")

}