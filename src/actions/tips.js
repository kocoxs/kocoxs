export const LOAD_TIPS = 'LOAD_TIPS'
export const SAGAS_TIPS = 'SAGAS_TIPS'

export function getTips(tips){
    return {
        type: LOAD_TIPS,
        tips
    }
}

export function loadTips(){
    return{
        type: SAGAS_TIPS
    }
}