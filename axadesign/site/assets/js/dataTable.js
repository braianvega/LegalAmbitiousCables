

// select header shouls select all rows
var tableSelectAll= document.getElementById('table-select-rows')
if (tableSelectAll) {
  tableSelectAll.addEventListener('change', function() {
    tableRows=  document.querySelectorAll('tr')
    if (this.checked) {
      tableRows.forEach(function(rows){
        rows.classList.add("active");
        console.log("rows",rows);
        var input=  rows.querySelector("[name ='data-table-checkbox']");
        if(input){
          console.log("input",input);
          input.checked = true;
      }
    })
    }else {
      tableRows.forEach(function(rows){
        rows.classList.remove("active");
        var input=  rows.querySelector("[name ='data-table-checkbox']");
        if(input){
          console.log("input",input);
          input.checked = false;
      }
      });
    }
  })
}




//sort asc or desc cols
var sortTableIcons= document.querySelectorAll("[name ='data-table-sort-icon']")
sortTableIcons.forEach((icon) => { 
  icon.addEventListener('click', function() {
    index= icon.getAttribute('index');
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("data-table-example");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("td")[index];
        y = rows[i + 1].getElementsByTagName("td")[index];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
         // document.getElementById("table-sort-icon-low0").style.visibility = "hidden";
         //document.getElementById("table-sort-icon-high0").style.visibility = "visible";

          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          //document.getElementById("table-sort-icon-low0").style.visibility = "visible";
          //document.getElementById("table-sort-icon-high0").style.visibility = "hidden";
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            
            
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        if(dir=="asc"){
          icon.classList.add("data-table-sort-high-icon");
          icon.classList.remove("data-table-sort-low-icon");
            
        }else{
            icon.classList.add("data-table-sort-low-icon");
            icon.classList.remove("data-table-sort-high-icon");
        }
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
    
})
})



let allCheckBox = document.querySelectorAll("[name ='data-table-checkbox']")
  allCheckBox.forEach((checkbox) => { 
  checkbox.addEventListener('change', (event) => {
    trComponent = checkbox.closest("tr");
    if (event.target.checked) {
      trComponent.classList.add("active");
      trComponent.classList.remove("hover");
    }
    else{
      trComponent.classList.remove("active");
    }
  })
})
