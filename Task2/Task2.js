var Myarr = [
  [
    "machine_name",
    "machine_id",
    "current",
    "voltage",
    "power_factor",
    "active_power",
    "apparent_power",
    "reactive_power",
    "daily_energy",
    "monthly_energy",
    "yearly_energy",
    "idle_daily",
    "idle_monthly",
    "idle_yearly",
  ],
  [
    "Auto Winding Machine",
    "machine001",
    0,
    0,
    0,
    0.0,
    0.0,
    0.0,
    0,
    0,
    0,
    0,
    0,
    0,
  ],
  ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
];

function CreateTableFromJSON() {
  var table1 =
    " <table>" +
    "<tr>" +
    "<th colspan='3'>ENERGY CONSUMED (kwh)</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "daily_energy" +
    "</td>" +
    "<td>" +
    "monthly_energy" +
    "</td>" +
    "<td>" +
    "yearly_energy" +
    "</td>" +
    "</tr>" +
    "</table>";
  var table2 =
    " <table>" +
    "<tr>" +
    "<th colspan='3'>IDLE TIME</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "idle_daily" +
    "</td>" +
    "<td>" +
    "idle_monthly" +
    "</td>" +
    "<td>" +
    "idle_yearly" +
    "</td>" +
    "</tr>" +
    "</table>";

  //Creating Dynamic table
  var table = document.createElement("table");

  var tr = table.insertRow();    //Inserting empty row in the end
  for (var i = 0; i < Myarr[0].length; i++) {
  var th = document.createElement("th"); // TABLE HEADER.
    if (Myarr[0][i] === "idle_daily") {
      th.setAttribute("colspan", "3");
      th.innerHTML =table2;
      tr.appendChild(th);
    } else if (Myarr[0][i] === "daily_energy") {
      th.setAttribute("colspan", "3");
      th.innerHTML = table1;
      tr.appendChild(th);
    } else if (
      Myarr[0][i] === "idle_monthly" ||
      Myarr[0][i] === "idle_yearly" ||
      Myarr[0][i] === "monthly_energy" ||
      Myarr[0][i] === "yearly_energy"
    ) {
      continue;
    } else {
      th.innerHTML = Myarr[0][i];
      tr.appendChild(th);
    }
  }

  for (var i = 0; i < Myarr.length - 1; i++) {
    tr = table.insertRow();

    for (var j = 0; j < Myarr[i].length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = Myarr[i + 1][j];
    }
  }

  var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
  var ele=document.getElementById("heading");
  ele.setAttribute("style", "font-family: 'Inter', sans-serif;");
}
