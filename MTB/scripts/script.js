window.addEventListener("load", () => {
    const loader1 = document.querySelector(".loader1");
  
    loader1.classList.add("loader1--hidden");
  
    loader1.addEventListener("transitionend", () => {
      document.body.removeChild(loader1);
    });

    const loader2 = document.querySelector(".loader2");
  
    loader2.classList.add("loader2--hidden");
  
    loader2.addEventListener("transitionend", () => {
      document.body.removeChild(loader2);

    document.getElementById('loader').style.display = 'none';
    
    document.getElementById('hero').style.display = 'block';

    });
  });
  

