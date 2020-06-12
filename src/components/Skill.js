import React from 'react'
import styled from 'styled-components';

const SkillContainer = styled.div`    
    display: flex;
    justify-content: space-around;
    position: relative;
    align-items: center;
    height: 380px;
`
const SkillDetail = styled.div`
    width: 50%;  
    h1 {
        margin-top: 0;
    }
    @media (max-width: 650px) {
        width: 95%;
    } 
`
const Image = styled.img`
    width: 250px;
    height: 250px;
    @media (max-width: 650px) {
        position: absolute;
        width: 70px;
        height: 70px;
        top: 1rem;
        right: .5rem;
    }    
`

 const Skill = ({ img, alt, title, subtitle, detail}) => {
    return (
        <SkillContainer>
            <Image
                src={img}
                alt={alt}
            />          
            <SkillDetail>                
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{detail}</p>
            </SkillDetail>
        </SkillContainer>        
    )
}

export default Skill;
