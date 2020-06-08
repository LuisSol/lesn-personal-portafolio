import React from 'react'
import styled from 'styled-components';

const ProjectDetail = styled.div`
    width: 100%;
    height: 410px;
`


const Project = ({title, github, link, detail, android, ios}) => {
    return (
        <ProjectDetail>
            {title}
        </ProjectDetail>
    )
}

export default Project;
