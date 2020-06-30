import React, { Suspense } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { togglePDFModal } from '../redux/actions/modalActions'

const LazyPDFView = React.lazy(() => import('./PDFView'));
const ControlsContainer = styled.div`
    position: "absolute";
    top: 0; 
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
        margin-left: 1rem;
    }
`

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
            <ControlsContainer>
                <a href="/docs/CV_LESN_EN.pdf" download>Download PDF</a>
                <button 
                    onClick={() => dispatch(togglePDFModal())}
                >X</button>
            </ControlsContainer>
            <Suspense fallback={<div>Loading ...</div>}>
                <LazyPDFView />
            </Suspense>
        </Modal>
    )
}
