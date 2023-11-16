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
          // Move to the next string after a brief delay
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
          // Toggle the visibility of the overlay
          overlayDiv.style.display = (overlayDiv.style.display === 'none' || overlayDiv.style.display === '') ? 'flex' : 'none';
        });
      });