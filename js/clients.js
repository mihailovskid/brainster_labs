(function() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let table = "<table id='table' class='table table-hover bg-info borde'>"
      let main = document.getElementById("main");
      let results = JSON.parse(this.response);

      table += "<tr>"
      table += "<th>Име</th>"
      table += "<th>Компанија</th>"
      table += "<th>Е-мајл</th>"
      table += "<th>Телефон</th>"
      table += "<th>Тип на студент</th>"
      table += "</tr>"

      results.forEach(item => {
          table += "<tr>"
          table += "<td>" + item.name + "</td>"
          table += "<td>" + item.company + "</td>"
          table += "<td>" + item.email + "</td>"
          table += "<td>" + item.phone + "</td>"
          table += "<td>" + item.student_type + "</td>"
          table += "</tr>"
      })

      table += "</table>"

      const parser = new DOMParser();
      const parsedDocument = parser.parseFromString(table, "text/html");
      let finalTable = parsedDocument.getElementById('table')

      main.append(finalTable)
    }
  };
  xmlhttp.open("GET", "./backend/clients.php", true);
  xmlhttp.send();
})();