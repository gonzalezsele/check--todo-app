//capturar elementos
const input = document.querySelector('#task-input');
//const addBtn = document.querySelector('.add-btn');
//const taskSelect = document.querySelector('.task-select');
//const searchBtn = document.querySelector('.search-btn');

//console.log(input)

//pintar tareas
function printTareas(pListTareas, pSectionDom) {

    pSectionDom.innerHTML = '';
    pListTareas.forEach(tarea => printOneTarea(tarea, pSectionDom))

}

//pintar una tarea
function printOneTarea(pTarea, pDom) {

    const article = document.createElement('article');
    const p = document.createElement('p');

    article.classList.add`${pTarea.priority2}`;
    p.innerHTML = `${pTarea.titulo}`;

    article.appendChild(p);
    pDom.appendChild(article);
    
}

printTareas(tareas, sectionTareas)

//capturar los elementos del filtro de tareas
const selectPrioridad = document.querySelector('.priority');
selectPrioridad.addEventListener('change', (event) => {
    let priority = event.target.value;

    const listaFiltrada = filterByPriority(tareas, prioridad);
    printTareas(listaFiltrada, sectionTareas);

})

//buscador semantico 
//capturar el input
const inputSearch = document.querySelector('#searchTask');
inputSearch.addEventListener('input', getSearch)

function getSearch(event) {
    let palabra = event.target.value;
    let listaFiltrada = searchByTask(tareas, palabra);
    printTareas(listaFiltrada, sectionTareas);
}

