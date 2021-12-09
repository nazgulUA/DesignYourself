$(function () {
  $('#submitSignUpBtn').click(function (event) {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://localhost:44326/api/Users/SignUp" 

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
            window.localStorage.setItem('userId', res.userId);
            window.localStorage.setItem('userTypeId', res.userTypeId);
            window.localStorage.setItem('email', res.email);
            window.localStorage.setItem('password', res.password);
            window.location.href = 'MainPage.php';     
        }
    };

    console.log(JSON.stringify({
    email: document.getElementById("email1").value,
    password: document.getElementById("password1").value,
}));

    try {
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(JSON.stringify({
    email: document.getElementById("email1").value,
    password: document.getElementById("password1").value,
    })) 
}
    catch(ex)
    {
        window.alert(ex);
    } 
});

    });

$(function () {
  $('#submitSignInBtn').click(function (event) {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://localhost:44326/api/Users/SignIn" 

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
            window.localStorage.setItem('userId', res.userId);
            window.localStorage.setItem('userTypeId', res.userTypeId);
            window.localStorage.setItem('email', res.email);
            window.localStorage.setItem('password', res.password);
            window.location.href = 'MainPage.php';
        }else
        {

        }
    };

    console.log(JSON.stringify({
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    }));

    try{
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(JSON.stringify({
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
}))}
    catch(ex1)
    {
        window.alert(ex1);
    }
});
});