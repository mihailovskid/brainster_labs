(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName("needs-validation");
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



(function() {
var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let selectField = document.getElementById("student_type");
      let results = JSON.parse(this.response)

      results.forEach(item => {
        var option = document.createElement("option");
        option.text = item.text;
        option.value = item.id;

        selectField.appendChild(option)
      })
    }
  };
  xmlhttp.open("GET", "./backend/student_types.php", true);
  xmlhttp.send();
})();