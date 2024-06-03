document.addEventListener('DOMContentLoaded', function () 
{
  const form = document.querySelector('.needs-validation');

  form.addEventListener('submit', function (event) 
  {
      // zatrzymanie
      event.preventDefault();
      event.stopPropagation();

      // zmienne z formsa
      const firstName = document.getElementById('validationCustom01');
      const lastName = document.getElementById('validationCustom02');
      const email = document.getElementById('validationCustomUsername');
      const checkBox = document.getElementById('invalidCheck');

      // Walidacja
      let isValid = true;

      // walidacja imienia
      if (firstName.value.trim() === '') 
        {
          firstName.classList.add('is-invalid');
          isValid = false;
      } 
      else 
      {
          firstName.classList.remove('is-invalid');
      }

      // walidacja nazwiska
      if (lastName.value.trim() === '') 
        {
          lastName.classList.add('is-invalid');
          isValid = false;
      } 
      else 
      {
          lastName.classList.remove('is-invalid');
      }

      // walidacja miala
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() === '') 
        {
          email.classList.add('is-invalid');
          isValid = false;
      } 
      else if (!emailPattern.test(email.value.trim())) 
        {
          email.classList.add('is-invalid');
          email.nextElementSibling.innerText = 'Podaj poprawny adres e-mail!';
          isValid = false;
      } 
      else 
      {
          email.classList.remove('is-invalid');
          email.nextElementSibling.innerText = 'Proszę podać adres e-mail!';
      }

      // walidacja checkbox
      if (!checkBox.checked) 
        {
          checkBox.classList.add('is-invalid');
          isValid = false;
      } 
      else 
      {
          checkBox.classList.remove('is-invalid');
      }


      // wiadomosc (do poprawki)
      if (isValid)
      {
        successMessage.style.display = 'block';
      } 
      else 
      {
        successMessage.style.display = 'none';
      }

  }, false);
});


   // Funkcja do animowania liczb
   function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range / 1000)); // Przyspieszamy liczenie dzieląc przez 2
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Wywołanie funkcji animateValue dla każdej liczby
animateValue("stat-1", 1000, 3300, 2000); // Animuj od 0 do 3300 w ciągu 2 sekund
animateValue("stat-2", 1000, 44000, 2000); // Animuj od 0 do 44000 w ciągu 2 sekund
animateValue("stat-3", 1000, 77000000, 2000); // Animuj od 0 do 77000000 w ciągu 2 sekund

// Inicjalizacja AOS
AOS.init();
