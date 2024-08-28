function userRegistation() {
    console.log("click!!")
    //define variable

    let name = $('#username').val(); // get value
    let password = $('#login-pass').val(); // get value
    let email = $('#login-email').val(); // get value
    console.log(name, password, email);

    //create ajax request
    $.ajax({
        url: "http://localhost:8080/api/v1/auth/register",
        method: "POST",
        contentType: "application/json",
        "data": JSON.stringify({
            "name": name,
            "password": password,
            "email": email
        }),
        //error handling
        success: function (response) {
            console.log(response.data.token)
            localStorage.setItem("token", response.data.token)
            alert("save successfully!!")
        },
        error: function (error) {
            console.log(error)
            alert("save Unsuccessfully!!")
        }

    })
}


    function userLogin(){
        console.log("click!")

        let  password = $('#login-pass').val(); // get value
        let  email = $('#login-email').val(); // get value

 // create ajax authenticate
    $.ajax({
        url: "http://localhost:8080/api/v1/auth/authenticate",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "password":password,
            "email":email
        }),
        //error handling
        success:function (response){
            console.log(response.data.token)
            localStorage.setItem("token", response.data.token)
            alert("save successfully!!")
        },
        error:function (error){
            console.log(error)
            alert("save Unsuccessfully!!")
        }

    })
}





