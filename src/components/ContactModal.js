import React, { useState } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';

const ContacMeBtn = styled.button`
    margin-top: .5rem;
    width: 8rem;
    height: 2.5rem;
    border-radius: 10px; 
    border: 1px solid #CCC;
    cursor: pointer;  
    font-size: 1rem; 
    &:focus {
        outline: none;
    }
`

const ContactModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <>
            <ContacMeBtn onClick={toggleModal}>Contact me</ContacMeBtn>                  
            <Modal
                closeTimeoutMS={300}    
                className="contact-modal"            
                overlayClassName="overlay"
                isOpen={modalOpen}
                onRequestClose={toggleModal}
            >
                <div>HOLA</div>
            </Modal>        
        </>
    )
}

export default ContactModal; 


    
