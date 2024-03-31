console.log("Hola Mundo");

window.addEventListener('load',() => {

    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener ('click',(event) => {

        alert("Click en enviar");
    });

});

