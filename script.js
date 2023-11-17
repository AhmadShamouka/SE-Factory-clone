const leftDiv=document.getElementById('overlay')
    let colors = [
        'rgba(40, 238, 167, 0.93)',
        'rgba(40, 238, 167, 0.93)',
        'rgba(152, 100, 218, 0.93)',
        'rgba(251, 80, 142, 0.93)',
      ];
    
      function bgcolor() {

        let randomIndex = Math.floor(Math.random() * colors.length);

        leftDiv.style.backgroundColor = colors[randomIndex];
      }
      
      setInterval(bgcolor, 3000);
      let strings = ['Software engineer?', 'Data engineer?', 'UI/UX designer?'];
      let stringIndex = 0;
      let charIndex = 0;
    
      function typeText() {
        let typedTextElement = document.getElementById("typed_text");
        let currentString = strings[stringIndex];
        typedTextElement.textContent = currentString.slice(0, charIndex++);
        
        if (charIndex <= currentString.length) {
          setTimeout(typeText, 100);
        } else {
     
          setTimeout(function() {
            charIndex = 0;
            stringIndex = (stringIndex + 1) % strings.length;
            typeText();
          }, 1000);
        }
      }
    
   
      typeText();


      document.addEventListener('DOMContentLoaded', function () {
        var toggleButton = document.getElementById('toggleOverlay');
        var overlayDiv = document.getElementById('overlayDiv');
      
        toggleButton.addEventListener('click', function () {

          overlayDiv.style.display = (overlayDiv.style.display === 'none' || overlayDiv.style.display === '') ? 'flex' : 'none';
        });
      });

      for (let i = 1; i <= 4; i++) {
        const tab = document.getElementById(`btntab${i}`);
        tab.addEventListener('click', function () {
            openTab(`tab${i}`);
        });
    }

    function openTab(tabName) {

        var tabContents = document.querySelectorAll('.w-tab-pane');
        for (var i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove('w--tab-active');
        }

     
        document.getElementById(tabName).classList.add('w--tab-active');
    }


    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
        showCard(n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("card");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "flex";  
        dots[slideIndex-1].className += " active";
    }

  
    function showCard(cardNumber) {
     
        for (let i = 1; i <= 4; i++) {
            document.getElementById('card' + i).style.display = 'none';
        }

      
        document.getElementById('card' + cardNumber).style.display = 'flex';
    }

    
    setInterval(function() {
        plusSlides(1);
    }, 3000);
