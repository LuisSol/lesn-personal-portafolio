import actions from '../actions/actionTypes'

const initialState = {
    modalOpen: false,
    pdfModalOpen: false
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.TOGGLE_MODAL:
            return {
                modalOpen: !state.modalOpen
            }
        case actions.TOGGLE_PDF_MODAL:
            return {
                pdfModalOpen: !state.pdfModalOpen
            }
        default:
            return state;
    }
}

export default modalReducer;