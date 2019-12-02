const initialState = {
    error: false
};

const validacion = (state = initialState,action) =>{
    switch (action.type) {
        case 'VALIDAR_FORMULARIO':
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default validacion;