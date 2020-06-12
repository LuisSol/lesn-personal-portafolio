import actions from '../actions/actionTypes'

const initialState = {
    modalOpen: false
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.TOGGLE_MODAL:
            return {
                modalOpen: !state.modalOpen
            }
        default:
            return state;
    }
}

export default modalReducer;