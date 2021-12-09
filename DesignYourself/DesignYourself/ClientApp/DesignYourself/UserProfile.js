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

function sortByDay(){
        $('#filterbyDay').modal('show');
    }

    document.getElementById('filteringDay').onclick = function (){
        
        // Declare variables
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("textDay");
          //filter = input.value.toUpperCase();
          table = document.getElementById("MainPageTable");
          tr = table.getElementsByTagName("tr");

          // Loop through all table rows, and hide those who don't match the search query
          console.log(tr.length);
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                var a = document.getElementById("Time"+i);
                console.log(a.innerText+" "+input.value);

                if (a.innerText != input.value) {
                    //console.log(tr[i].style.display.table);
                    tr[i].style.display = "none";

                }else{
                    tr[i].style.display = "";
                }
              //txtValue = td.textContent || td.innerText;
              //if (txtValue.toUpperCase().indexOf(filter) > -1) {
                //tr[i].style.display = "";
              //} else {
                //tr[i].style.display = "none";
              //}
            }
        }
    }

function sortByReverse(){
    var numOfRows = document.getElementById("MainPageTable").rows.length;
    //alert(numOfRows);
    var n = 1;
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("MainPageTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}