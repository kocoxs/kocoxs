import apiGetTips from '../utils/api/tips'

export const LOAD_TIPS = 'LOAD_TIPS'

export function getTips(tips){
    return {
        type: LOAD_TIPS,
        tips
    }
}

export function loadTips(){
    return (dispatch) => {
        return apiGetTips()
        .then(({tips})=>{
            dispatch(getTips(tips))
        })
    }
}