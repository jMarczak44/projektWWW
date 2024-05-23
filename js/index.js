document.getElementById('credValid').addEventListener('submit', function (event) {
    //stopper
    event.preventDefault();

    var isValid = true;

    // pobieranie wartosci z forma
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    // reset error
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';

    // imie
    if (firstName === '') {
        document.getElementById('firstNameError').innerText = 'Pole imię nie może być puste!';
        isValid = false;
    }

    // naziwsko
    if (lastName === '') {
        document.getElementById('lastNameError').innerText = 'Pole nazwisko nie może być puste!';
        isValid = false;
    }

    // email
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').innerText = 'Pole email nie może być puste!';

        isValid = false;

    } else if (!emailValid.test(email)) {
        document.getElementById('emailError').innerText = 'Podany email nie jest poprawny!';

        isValid = false;
    }

    if (isValid) {
        alert('Dane zatwierdzone!');

    }
});