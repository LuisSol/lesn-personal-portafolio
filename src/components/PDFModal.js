import React, { Suspense } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux'
import { togglePDFModal } from '../redux/actions/modalActions'

const LazyPDFView = React.lazy(() => import('./PDFView'));

export default function PDFModal() {
    const showResume = useSelector( state => state.pdfModalOpen )
    const dispatch = useDispatch();

    return (
        <Modal
          closeTimeoutMS={300}    
          className="pdf-modal"            
          overlayClassName="overlay"
          isOpen={showResume}
          onRequestClose={() => dispatch(togglePDFModal())}
        >
            <button 
                style={{
                        position: "absolute", 
                        top: 0, 
                        right: 5,
                        zIndex: 10
                        }}
                onClick={() => dispatch(togglePDFModal())}
            >X</button>
            <Suspense fallback={<div>Loading ...</div>}>
                <LazyPDFView />
            </Suspense>
        </Modal>
    )
}
