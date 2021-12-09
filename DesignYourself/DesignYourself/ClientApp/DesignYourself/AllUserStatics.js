/*$(window).on('load', function () {
    var xmlhttp = new XMLHttpRequest();
    var url1 = "https://localhost:44326/api/Users/GetUsers";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction1(myArr);
        }
    };
    xmlhttp.open("GET", url1, true);
    xmlhttp.send();

    function myFunction1(arr) {
        const mainTable = document.getElementById("MainPageTable");
        return arr;
    }
});*/

$(window).on('load', function () {
    console.log(window.localStorage.getItem('userId'));
    console.log(window.localStorage.getItem('userTypeId'));
    console.log(window.localStorage.getItem('email'));
    console.log( window.localStorage.getItem('password'));
    var xmlhttp = new XMLHttpRequest();
    var url = "https://localhost:44326/api/SolvedTasks/";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        const mainTable = document.getElementById("MainPageTable");

        //var users = myFunction1();
        //console.log(users);

         //dates.sort(function () {
         //let a = new Date(arr.solvationDate),
            //b = new Date(arr.solvationDate);
            //return a - b;
            //});
            //console.table(dates);
        var i = 0;
        arr.forEach(
            el => {
                console.log(el);
               
                let tr = mainTable.appendChild( document.createElement('tr'));
                let td = tr.appendChild( document.createElement('td'));
                td.style = 'text-align: center; vertical-align: middle;';
                let a = td.appendChild( document.createElement('a'));
                a.style = 'color: #000000;';
                a.innerText = el.taskName;

                //User
                let td3 = tr.appendChild( document.createElement('td'));
                td3.style = 'text-align: center; vertical-align: middle;';
                let a3 = td3.appendChild( document.createElement('a'));
                a3.style = 'color: #000000;';
                a3.innerText = "User";

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
                a1.setAttribute('class', 'dateClass');
                a1.setAttribute('id', 'Time' + i);
                i++;
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

 document.getElementById('sortDay').onclick = function (){
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.getElementById("MainPageTable");
      switching = true;
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("td")[0];
          y = rows[i + 1].getElementsByTagName("td")[0];
          // Check if the two rows should switch place:
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }

        /*const allDates = [];

        for (var i = 0; i < document.getElementsByClassName("dateClass").length; i++) {
            allDates.push(document.getElementsByClassName("dateClass")[i].innerHTML);
        }

        allDates.sort();

        for (var i = 0; i < allDates.length; i++) {
             console.log(allDates[i]);
        }

        var table = document.getElementById("MainPageTable");
        for (let i in table.rows) {
           let row = table.rows[i]
           //iterate through rows
           //rows would be accessed using the "row" variable assigned in the for loop
           for (let j in row.cells) {
             let col = row.cells[j]
             //iterate through columns
             //columns would be accessed using the "col" variable assigned in the for loop
             console.log(col.text);
           }  
        }*/
}
