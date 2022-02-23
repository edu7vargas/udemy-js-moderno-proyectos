const cards  = document.querySelectorAll('section.hospedaje .card');

// console.log(cards);


//muestra todos el HTML de cada elemento  de clases titulo

cards.forEach((cardItem)=>{
    console.log(cardItem.querySelector('.titulo'));
});




const formularios = document.querySelectorAll('#formulario')
console.log(formularios);



const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);