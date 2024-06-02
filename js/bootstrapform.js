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