import { LOAD_TIPS } from '../actions/tips'

export default function tips (state = [], action) {
    switch (action.type) {
        case LOAD_TIPS:
            return action.tips
        default:
            return state
    }
}