
window.onload = function() {
    var btn = document.getElementById("searchButton");
    btn.onclick = information;
}

function information() {
    var term = document.getElementById("search").value; // The id of your input was "begriff", not "name"
    var url = 'http://localhost:3000/search/terms?term=' + term;
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

    }));
}
