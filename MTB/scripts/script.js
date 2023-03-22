// window.addEventListener("load", () => {
//     const loader1 = document.querySelector(".loader1");
  
//     loader1.classList.add("loader1--hidden");
  
//     loader1.addEventListener("transitionend", () => {
//       document.body.removeChild(loader1);
//     });

//     const loader2 = document.querySelector(".loader2");
  
//     loader2.classList.add("loader2--hidden");
  
//     loader2.addEventListener("transitionend", () => {
//       document.body.removeChild(loader2);

//     document.getElementById('loader').style.display = 'none';
    
//     });
//   });
  
//   setTimeout(function() {
//     var body = document.querySelector('body');
//     body.classList.remove('hidden');
//   }, 3000);


// document.getElementById("menu").addEventListener("click", );  


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }