// Create table
var url_data = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpgnuh7bgl5CbIrl1AXOu9if3Ws7FJWRlQE_RcxgjTLH0T73pUZyilB1ezXyrBLgdoDXzjJMVJcKz2/pub?gid=222067643&single=true&output=csv"

d3.text(url_data, function (data) {
    var parsedCSV = d3.csv.parseRows(data);
    var mytable = d3.select('#app')
        .append('table').attr("id", "myTable")
        .selectAll("tr")
        .data(parsedCSV).enter()
        .append("tr")
        .selectAll("td")
        .data(function (d) { return d; })
        .enter()
        .append("td")
        .text(function (d) { return d; });
});

// next page  

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
//

function resetForm(form) // Reset button clicked
{
    form.myButton.disabled = false;
    form.myButton.value = "Submit";
}
//

// next page
function tableFunction() {
    var T = document.getElementById("app");
    T.style.display = "block";  // <-- Set it to block
}