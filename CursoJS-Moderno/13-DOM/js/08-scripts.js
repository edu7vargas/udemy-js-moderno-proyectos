// + EJERICIO 1: AGREGAR UN NUEVA OPCIÓN EN EL MENÚ 
/*
const enlace = document.createElement('A');
enlace.textContent = 'Nuevo enlace';

enlace.href = "/nuevo/enlace";
//enlace.target = '_blanck'
enlace.onclick = miFuncion;
enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('alguna-clase');
console.log(enlace);

const navegacion  = document.querySelector(".navegacion");
console.log(navegacion.children)
// navegacion.appendChild(enlace); // insertar al final del menú

navegacion.insertBefore(enlace, navegacion.children[1]);//en la parte indicada

function miFuncion(){
    alert('doy click');
}
*/





// + EJERICIO 2: AGREGAR UN CARDS

const textoCategoria =  document.createElement('P');
textoCategoria.classList.add('categoria','concierto');
textoCategoria.textContent = "música"

const textoTitulo = document.createElement('P');
textoTitulo.classList.add('titulo');
textoTitulo.textContent = "Música latinoamericana 2022";

const textoPrecio = document.createElement('P');
textoPrecio.classList.add('precio');
textoPrecio.textContent = "$150 por persona";

const imagen = document.createElement('img');
imagen.src = 'img/hacer1.jpg';

const cardInfo =  document.createElement('div');
cardInfo.classList.add('info');
cardInfo.appendChild(textoCategoria);
cardInfo.appendChild(textoTitulo);
cardInfo.appendChild(textoPrecio);

const card =  document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(cardInfo);

const contenedorCards = document.querySelector('.contenedor-cards');
contenedorCards.appendChild(card); 

//console.log(cards);







// + EJERICIO 3:  Mostrar y ocultar el FOOTER
/*
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');



btnFlotante.addEventListener('click', mostrarOcultarFooter);

let activo = false;

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = "Idioma y Moneda";
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = "X Cerrar";
        
    }
}
*/




