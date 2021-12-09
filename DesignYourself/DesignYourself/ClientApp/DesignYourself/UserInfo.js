$(window).on('load', function () {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://localhost:44326/api/Users/GetUser/1"

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        //const mainTable = document.getElementById("MainPageTable");
        arr.forEach(
            el => {
                console.log(el);
            }
            )
    }
    // Handler for .load() called.
});
