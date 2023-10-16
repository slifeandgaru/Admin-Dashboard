function btnLogin() {
    let account = $("#account").val()
    let password = $("#password").val()
    let role = $("#role").val()

    $.ajax({
        url: "/auth/login-shop",
        method: "POST",
        data: {
            account,
            password,
            role
        }
    })
        .then((data) => {
            if(data.message === "login success"){
                window.location = "/dashboard";
            }
            console.log(data)
        }).catch((err) => {
            console.log(err);
        })
}