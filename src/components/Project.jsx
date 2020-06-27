import React from 'react'
import styled from 'styled-components';
import WebLogo from './svg/web.svg'
import PlayLogo from './svg/play_store.svg' 
import GitHubLogo from './svg/git_hub_white.svg'
import AppleLogo from './svg/apple_logo.svg'

const ProjectContainer = styled.div`
    position: relative;
    width: 100%;
    height: 410px;
    font-weight: 300;
    display: flex;
    #title {
        position: absolute;
        top: 20px;
    }
    .links {
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 20px;
        top: 0;
        z-index: 1;
    }
    .links span {
        margin-left: 5px;
    }
    @media (max-width: 900px) {
        .links {
            flex-direction: column;
            height: 100%;
            width: 130px;
            right: 50px;
            padding: 5rem 0;       
            a {
                margin-bottom: 1rem;
            }            
        }
    }
    @media (max-width: 650px) {
        .links {
            flex-direction: row;
            height: 2rem;
            width: 100%;
            right: 0;
            padding: 0;           
        }
    }
    @media (max-width: 550px) {     
        .links span {
            display: none;            
        }
    } 
`
const ProjectDetail = styled.div`
    margin-top: 4.5rem;
    width: 45%;
    text-align: justify;    
    @media (max-width: 900px) {
        width: 55%;
    }
    @media (max-width: 650px) {
        width: 100%;
        margin-top: 5rem;
        font-size: 1rem;
    }
`
const ProjecVisuals = styled.div`
    flex: 1;  
    position: relative;     
    #large {
        img {
            width: 430px;
            position: absolute;
            bottom: 10px;
            right: 10px;       
        }        
    }
    #mid {
        display: none;
    }
    @media (max-width: 900px) {         
        #large {
            display: none;            
        }
        #mid {
            display: block;
            img {
                position: absolute;
                height: 400px;
                right: 10px; 
                top: 0;    
            }
        }
    }
    @media (max-width: 650px) {
        display: none;
    } 
`
const ResourceLink = styled.a`
    background-color: black;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    height: 2rem;
    display: flex;    
    align-items: center;
    margin-right: .5rem;
    padding: 7px;
    transition: transform 200ms ease;    
    &:hover {
        transform: scale(1.05);
    }   
`
const imgLogo = {
    width: 16,
    height: 16
}
const disabled = {
    pointerEvents: 'none',
    opacity: 0.5
}

const Project = (props) => {
    return (
        <ProjectContainer>
            <h1 id="title">{props.title}</h1>
            <ProjectDetail 
                dangerouslySetInnerHTML={{__html: props.detail}}
            />
            <div className="links">
                <ResourceLink 
                    href={props.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={ props.link ===  '#' ? disabled : {} }
                >   
                    <img src={WebLogo} alt="web logo" style={imgLogo} />
                    <span>{ props.link ===  '#' ? 'Soon...' : 'Web' }</span>
                </ResourceLink>                    
                <ResourceLink
                    href={props.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={ props.github ===  '#' ? disabled : {} }
                >
                    <img src={GitHubLogo} alt="git hub logo" style={imgLogo} />
                    <span>{ props.github ===  '#' ? 'Soon...' : 'GitHub' }</span>
                </ResourceLink>                        
                <ResourceLink 
                    href={props.android}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={ props.android ===  '#' ? disabled : {} }
                >
                    <img src={PlayLogo} alt="play store logo" style={imgLogo} />
                    <span>{ props.android ===  '#' ? 'In revision' : 'Play Store' }</span>
                </ResourceLink>                        
                <ResourceLink
                    href={props.ios}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={ props.ios ===  '#' ? disabled : {} }
                >
                    <img src={AppleLogo} alt="apple logo" style={imgLogo} />
                    <span>{ props.ios ===  '#' ? 'In revision' : 'App Store' }</span>
                </ResourceLink>
            </div>
            <ProjecVisuals>                                
                <div id="large">                    
                    <img src={props.image.large} alt={`${props.title} display large`} />                    
                </div>
                <div id="mid">
                    <img src={props.image.medium} alt={`${props.title} display medium`} />
                </div>
            </ProjecVisuals>
        </ProjectContainer>
    )
}

export default Project;
