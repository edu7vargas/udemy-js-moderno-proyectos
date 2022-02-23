// Variables
const listaCursos = document.querySelector("#lista-cursos");

const carrito = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");


let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){

    // Cuando agregar un curso presionando el boton  "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);


    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);


    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = [];
        limpiarHTML();
    });

}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado =  e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        console.log('Agregando a carrito...');
        
    }
}



function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        console.log(cursoId);

        // elimina del arrewglo del articuloCarrito "data-id"
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        carritoHtml();
    }
}





// Lee el contenido del HTMK al que dimos click y extrae la informa del curso

function leerDatosCurso(curso){

    // console.log(curso);
    // Crear un objeto con el contenido del curso actual

    
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector(".info-card h4").textContent,
        autor: curso.querySelector(".info-card p").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // revisa su un elemnto ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id ===infoCurso.id);
    console.log(existe);
    if(existe){
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actulizado
            }else{
                return curso; // 
            }

        })
        articulosCarrito = [...cursos];

    }else{
        // agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito,infoCurso];
    }



    console.log(infoCurso);

    // Agrega elementos al arreglo de carrito
    
    console.table(articulosCarrito);
    carritoHtml();
}


// muestra en carrtio de compras en el HTML
function carritoHtml(){


    // limpiar el HMTML
    limpiarHTML();

    // recorre el carrito y genera el HTML
    articulosCarrito.forEach( (curso) => {

        const { imagen, titulo, precio, cantidad, id} = curso;
        const row =  document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src='${imagen}' />
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href='#' class='borrar-curso' data-id='${id}'>X</a>
        </td>
        `;
        contenedorCarrito.appendChild(row);

    })

    

}



// elimina los curoso del tbody
function limpiarHTML(){
    //forma lenta
    // contenedorCarrito.innerHTML = '';

    // forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}