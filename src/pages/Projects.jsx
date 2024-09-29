import '../styles.css'
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import landwirtschaft from '../assets/projects/landwirtschaft.jpg'
import tourism from '../assets/projects/urlaub.jpg'
import petproject from '../assets/projects/pet-project.jpg'

const project1 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

export default function Projects() {
    return(
        <section id='projects' className='projects wrapper'>
            <div className='projects-header'>
                <h3>My Work</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere debitis qui fuga? Iusto natus, ipsa possimus ea cum ipsam quos adipisci quidem unde provident rem, cupiditate assumenda vitae molestias.</p>
            </div>
            <div className='projects-list'>
                <ProjectItem image={landwirtschaft} text={project1}/>
                <ProjectItem image={tourism} text={'Tourism project'}/>
                <ProjectItem image={petproject} text={'This is my pet project'}/>
            </div>
        </section>
    );
}