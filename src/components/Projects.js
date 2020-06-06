import React from 'react';
import styled from 'styled-components';

const ProjectsView = styled.section`
    height: 450px;
    color: black;
    padding: 10px 45px;
    position: relative;
    z-index: -1;
    .title { 
        position: absolute;
        top: 2rem;
        font-size: 1.7rem;
    }   
`

const Projects = () => {
    return (
        <main>
            <ProjectsView>
                <h1 className="title">Projects</h1>
                
            </ProjectsView>
        </main>
    )
}

export default Projects;