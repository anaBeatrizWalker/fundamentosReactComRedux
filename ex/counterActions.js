export function increment(){
    return { type: 'INC' }
}

export function decrement(){
    return { type: 'DEC' }
}

export function stepChanged(e){
    return { 
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}