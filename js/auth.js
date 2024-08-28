function userRegistation(){
    console.log("click!!")
    //define variable

    let  name = $('#username').val(); // get value
    let  password = $('#login-pass').val(); // get value
    let  email = $('#login-email').val(); // get value
    console.log(name,password,email);

    //create ajax request

    $.ajax({
        url: "http://localhost:8080/api/v1/auth/register",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "name":name,
            "password":password,
            "email":email
        }),
        //error handling
        success:function (response){
            console.log(response)
            alert("save successfully!!")
    },
        error:function (error){
            console.log(error)
            alert("save Unsuccessfully!!")
        }

    })

    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8080/api/v1/auth/register",
    //     data: JSON.stringify({ username: "user", password: "password" }),
    //     contentType: "application/json",
    //     success: function(response) {
    //         console.log("User registered successfully!", response);
    //     },
    //     error: function(xhr, status, error) {
    //         console.error("Error:", error);
    //     }
    // });





}