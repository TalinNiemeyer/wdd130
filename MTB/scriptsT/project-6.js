const fetchImage = async (imageName) => {
  try {
    const response = await fetch(`images/${imageName}`);
    if (!response.ok) {
      throw new Error('Image not found');
    }
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    return imageUrl;
  } catch (error) {
    console.error(error);
  }
};

const loadImage = async () => {
  try {
    const imageUrl = await fetchImage('tues-pros.png');
    const imageContainer = document.getElementById('image-container');
    const img = document.createElement('img');
    img.src = imageUrl;
    imageContainer.appendChild(img);
  } catch (error) {
    console.error(error);
  }
};

loadImage();

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
    
    });
  });
  
  setTimeout(function() {
    var body = document.querySelector('body');
    body.classList.remove('hidden');
  }, 3000);