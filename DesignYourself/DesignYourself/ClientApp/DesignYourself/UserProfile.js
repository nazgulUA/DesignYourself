$(window).on('load', function () {
    console.log(window.localStorage.getItem('userId'));
    console.log(window.localStorage.getItem('userTypeId'));
    console.log(window.localStorage.getItem('email'));
    console.log( window.localStorage.getItem('password'));
    var xmlhttp = new XMLHttpRequest();
    var url = "https://localhost:44326/api/SolvedTasks/" + window.localStorage.getItem('userId');


    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    document.getElementById("Email").value = window.localStorage.getItem('email');
    document.getElementById("Password").value = window.localStorage.getItem('password');

    function myFunction(arr) {
        const mainTable = document.getElementById("MainPageTable");
        arr.forEach(
            el => {
                console.log(el);
                let tr = mainTable.appendChild( document.createElement('tr'));
                let td = tr.appendChild( document.createElement('td'));
                td.style = 'text-align: center; vertical-align: middle;';
                let a = td.appendChild( document.createElement('a'));
                a.style = 'color: #000000;';
                a.innerText = el.taskName;

                //solutionDate
                let td1 = tr.appendChild( document.createElement('td'));
                td1.style = 'text-align: center; vertical-align: middle;';
                let a1 = td1.appendChild( document.createElement('a'));
                a1.style = 'color: #000000;';

                //time
                 function formatDate(timestamp){
                var x=new Date(el.solvationDate);
                var dd = x.getDate();
                var mm = x.getMonth()+1;
                var yy = x.getFullYear();
                return dd +"." + mm+"." + yy;
                }
                a1.innerText = formatDate();

                //mark
                let td2 = tr.appendChild( document.createElement('td'));
                td2.style = 'text-align: center; vertical-align: middle;';
                let a2 = td2.appendChild( document.createElement('a'));
                a2.style = 'color: #000000;';
                a2.innerText = el.mark;
               
            }
        )
    }
});
