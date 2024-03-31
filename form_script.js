console.log("Hola Mundo");

window.addEventListener('load',() => {

    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener ('click',(event) => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const mensaje = document.querySelector('#message').value;

        if(name!='' && email!='' && telefono !='' && mensaje!=''){
            alert("Formulario enviado");
            console.log('Nombre:',name);
            console.log('Email:',email);
            console.log('Telefono:',telefono);
            console.log('Mensaje:',mensaje);
        }
        else{
            document.querySelector('#error').classList.add('show-error');
            
        } 
    });

});

