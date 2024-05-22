const form = document.getElementById('form');
const fname = document.getElementById('fname');
const surname = document.getElementById('surname');
const email = document.getElementById('email');

form.addEventListener('submit', x => 
    {
        x.preventDefault();

        validateInput();
    });

const validateInput = () =>
    {
        const tempFname = fname.value.trim();
        const tempSurname = surname.value.trim();
        const tempEmail = email.value.trim();
    
    };