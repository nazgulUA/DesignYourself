$(window).on('load', function () {
    console.log(window.localStorage.getItem('userId'));
    console.log(window.localStorage.getItem('userTypeId'));
    console.log(window.localStorage.getItem('email'));
    console.log( window.localStorage.getItem('password'));
    var xmlhttp = new XMLHttpRequest();
    var url = "https://localhost:44326/api/Tasks/GetTaskList"

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    document.getElementById("ManagTask").style.display = "none";

    if (window.localStorage.getItem('userTypeId') == 1) {
        document.getElementById("ManagTask").style.display = "block";
    }

    document.getElementById("StatisticsTask").style.display = "none";

    if (window.localStorage.getItem('userTypeId') == 1) {
        document.getElementById("StatisticsTask").style.display = "block";
    }
    
    function myFunction(arr) {
        const mainTable = document.getElementById("MainPageTable");
        arr.forEach(
            el => {
                console.log(el)
                let tr = mainTable.appendChild( document.createElement('tr'));
                let td = tr.appendChild( document.createElement('td'));
                td.style = 'text-align: center; vertical-align: middle;';
                let a = td.appendChild( document.createElement('a'));
                a.style = 'color: #000000;';
                a.innerText = el.name;
                a.href = 'taskSolvingPage/index.html?TaskId=' + el.taskId.toString();
            }
        )
    }
});
