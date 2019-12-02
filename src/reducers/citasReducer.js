//todos los reducer tienen un state
const initialState = {
    citas: []
};

const citas = (state = initialState,action) =>{
    switch (action.type) {
        case 'AGREGAR_CITA':
            return{
                ...state,
                citas:[...state.citas,action.payload]
            }
        default:
            return state;
    }
}

export default citas;