import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { toggleModal } from '../redux/actions/modalActions'

const ContacMeBtn = styled.button`
    margin-top: .5rem;
    width: 8rem;
    height: 2.5rem;
    border-radius: 10px; 
    border: 1px solid #CCC;
    cursor: pointer;  
    font-size: 1rem; 
    background: rgb(241,241,241);
    background: linear-gradient(180deg, rgba(241,241,241,1) 0%, rgba(193,193,193,1) 65%);
    &:focus {
        outline: none;
    }
    &:hover {
        background: rgb(231,231,231);
        back    margin-top: .5rem;
    width: 8rem;
    height: 2.5rem;
    border-radius: 10px; 
    border: 1px solid #CCC;
    cursor: pointer;  
    font-size: 1rem; 
    background: rgb(241,241,241);
    background: linear-gradient(180deg, rgba(241,241,241,1) 0%, rgba(193,193,193,1) 65%);
    &:focus {
        outline: none;
    }
    &:hover {
        background: rgb(231,231,231);
        background: linear-gradient(180deg, rgba(231,231,231,1) 0%, rgba(170,170,170,1) 65%);
    }
    &:active {
        background: rgb(200,200,200);
        background: linear-gradient(180deg, rgba(200,200,200,1) 0%, rgba(129,129,129,1) 65%);
    }ground: rgb(200,200,200);
        background: linear-gradient(180deg, rgba(200,200,200,1) 0%, rgba(129,129,129,1) 65%);
    }
`

const ContactBtn = () => {
    const dispatch = useDispatch();

    return (
        <ContacMeBtn onClick={() => dispatch(toggleModal())}>Contact me</ContacMeBtn> 
    );
}

export default ContactBtn;