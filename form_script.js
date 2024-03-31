console.log("Hola Mundo");

window.addEventListener('load',() => {

    const submitButton = document.querySelector('#submitJS');
    submitButton.addEventListener ('click',(event) => {
        const name = document.querySelector('#nameJS').value;
        const email = document.querySelector('#mailJS').value;
        const telefono = document.querySelector('#telJS').value;
        const mensaje = document.querySelector('#msjJS').value;

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

