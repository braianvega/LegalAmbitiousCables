(() => {
  // <stdin>
  var tableSelectAll = document.getElementById("table-select-rows");
  if (tableSelectAll) {
    tableSelectAll.addEventListener("change", function() {
      tableRows = document.querySelectorAll("tr");
      if (this.checked) {
        tableRows.forEach(function(rows) {
          rows.classList.add("active");
          console.log("rows", rows);
          var input = rows.querySelector("[name ='data-table-checkbox']");
          if (input) {
            console.log("input", input);
            input.checked = true;
          }
        });
      } else {
        tableRows.forEach(function(rows) {
          rows.classList.remove("active");
          var input = rows.querySelector("[name ='data-table-checkbox']");
          if (input) {
            console.log("input", input);
            input.checked = false;
          }
        });
      }
    });
  }
  var sortTableIcons = document.querySelectorAll("[name ='data-table-sort-icon']");
  sortTableIcons.forEach((icon) => {
    icon.addEventListener("click", function() {
      index = icon.getAttribute("index");
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("data-table-example");
      switching = true;
      dir = "asc";
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("td")[index];
          y = rows[i + 1].getElementsByTagName("td")[index];
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          if (dir == "asc") {
            icon.classList.add("data-table-sort-high-icon");
            icon.classList.remove("data-table-sort-low-icon");
          } else {
            icon.classList.add("data-table-sort-low-icon");
            icon.classList.remove("data-table-sort-high-icon");
          }
          switching = true;
          switchcount++;
        } else {
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    });
  });
  var allCheckBox = document.querySelectorAll("[name ='data-table-checkbox']");
  allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      trComponent = checkbox.closest("tr");
      if (event.target.checked) {
        trComponent.classList.add("active");
        trComponent.classList.remove("hover");
      } else {
        trComponent.classList.remove("active");
      }
    });
  });
})();
