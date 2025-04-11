    document.getElementById("backbtn").addEventListener("click", function() {
      window.location.href = "Home.html";
    });

    document.getElementById("myForm").addEventListener("submit", function (e) {
      e.preventDefault(); 
  
      const name = document.getElementById("productType").value.trim();
  
      if ( productType === "") {
        alert("Fill the details")
      } else {
        window.location.href = "Add.html";
      }
    });