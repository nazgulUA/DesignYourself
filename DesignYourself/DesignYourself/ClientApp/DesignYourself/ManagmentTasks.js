$(window).on('load', function () {
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

    function myFunction(arr) {
        const mainTable = document.getElementById("MainPageTable");
        const but = document.getElementById("butAdd");
        let a1 = but.appendChild(document.createElement('a'));
        a1.style = 'color: #ffffff;';
        a1.innerText = "Add new task";
        a1.href = 'taskCreationPage/index.html';
        var updateUrl='TaskUpdatePage/index.html?TaskId=';

        arr.forEach(
            el => {
            console.log(el);
                let tr = mainTable.appendChild( document.createElement('tr'));
                let td = tr.appendChild( document.createElement('td'));
                td.style = 'text-align: center; vertical-align: middle;';
                let a = td.appendChild( document.createElement('a'));
                a.style = 'color: #000000;';
                a.innerText = el.name;
                
                //update
                let td2 = tr.appendChild( document.createElement('td'));
                td2.style = 'text-align: center; vertical-align: middle;';
                let i2 = td2.appendChild( document.createElement('i'));
                i2.style = 'color:green';
                i2.setAttribute('class', 'fa fa-pencil');
                i2.onclick = function() {
                const id = el.taskId;
                window.location.href = updateUrl+id;
                }

                //delete
                let td3 = tr.appendChild( document.createElement('td'));
                td3.style = 'text-align: center; vertical-align: middle;';
                let i3 = td3.appendChild( document.createElement('i'));
                i3.style = 'color:red';
                i3.setAttribute('class', 'fa fa-trash');
                i3.onclick = function() {
                $('#deleteModal').modal('show');
                window.localStorage.setItem('currentTask', el.taskId);
                }
            }
        )
    }

    document.getElementById('submitDelete').onclick = async function (){
        alert(window.localStorage.getItem('currentTask'));
        var url = "https://localhost:44326/api/Tasks/DeleteTask/";
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", url+ window.localStorage.getItem('currentTask'), false);
     xhr.send(null);
        xhr.onreadystatechange = function () {
            alert(this.responseText);
    
        };
    }
});
