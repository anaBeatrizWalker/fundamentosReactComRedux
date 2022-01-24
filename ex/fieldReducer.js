const INITIAL_STATE = {value: 'Escreva'}

export default function(state = INITIAL_STATE, action){
    //qual ação foi desparada
    switch(action.type){
        case 'VALUE_CHANGED':
            //evolução do estado
            return {value: action.payload}
        default:
            return state
    }
}