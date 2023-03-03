//filtro de tareas
const filterByPriority = (pTaskList, pPrioridad) => pTaskList.filter(tareas => tareas.prioridad.includes(pPrioridad));

//funcion de busqueda semantica

function searchByTask(pList, pPalabra) {
    return pList.filter(tareas => tareas.titulo.toLowerCase().includes(pPalabra.toLowerCase()) ());
}