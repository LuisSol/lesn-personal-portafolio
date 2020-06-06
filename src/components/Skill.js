import React from 'react'
import styled from 'styled-components';

const SkillContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 380px;
`
const SkillDetail = styled.div`
    position: relative;
    top: -5rem;
    width: 400px;    
    h1 {
        margin-top: 0;
    }
`

 const Skill = ({ img, alt, title, subtitle, detail}) => {
    return (
        <SkillContainer>
            <img
                src={img}
                alt={alt}
                width={250}
                height={250}
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
