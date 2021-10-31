console.log('Hola Mundo');

const initialState = [{
    id: '1',
    tarea: 'Comprar pan',
    estado: false
}]

const tareaReducer = (state = initialState, action)=> {
    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }
    return state
}

let tareas = tareaReducer();
console.log(tareas);

const newTodo = {
    id: '2',
    tarea: 'Comprar leche',
    estado: false
}

const agregarTareaAction = {
    type: 'agregar',
    payload: newTodo
}

tareas = tareaReducer(tareas, agregarTareaAction)

console.log(tareas);