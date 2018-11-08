
window.onload = function() {
    var btn = document.getElementById("searchButton");
    btn.onclick = information;
}

function information() {
    var term = document.getElementById("search").value; // The id of your input was "begriff", not "name"
    var url = 'http://localhost:3000/search?term=' + term;
    console.log(url)
    // Now send a request to your Node program
    fetch(url).then((data) => data.json().then(function(data) {
        
        var body = document.getElementById('tableDiv'),
        tbl  = document.createElement('table');
        tbl.style.width  = '100px';
        tbl.style.border = '1px solid black';

        var tr = tbl.insertRow();
        for(var i = 0; i < data.metaData.length; i++){
            var td = tr.insertCell();
            td.appendChild(document.createTextNode(data.metaData[i].name));   
            td.style.border = '1px solid black';
            td.className = "headRowCell"
        }

        for(var i = 0; i < data.rows.length; i++){
            var tr = tbl.insertRow();
            for(var j = 0; j < data.rows[i].length; j++){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(data.rows[i][j]));
                    td.style.border = '1px solid black';
                    td.className = "row"
                  
                }
            }
        tbl.setAttribute("id", "top");  

        //var temp = getElementByClassName('top');
        //console.log(temp)
        body.appendChild(tbl);


        // Res will be a Response object.
        // Use res.text() or res.json() to get the information that the Node program sent.
        //<canvas id="myChart" width="400" height="400"></canvas>
        /*var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });*/

    }));
}
