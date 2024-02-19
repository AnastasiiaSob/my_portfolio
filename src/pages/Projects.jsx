import '../styles.css'
import React from 'react';
import ProjectItem from '../components/ProjectItem';

export default function Projects() {
    return(
        <section id='projects' className='projects'>
            <div className='projects-header'>
                <h3>My Work</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere debitis qui fuga? Iusto natus, ipsa possimus ea cum ipsam quos adipisci quidem unde provident rem, cupiditate assumenda vitae molestias.</p>
            </div>
            <div className='projects-list'>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </section>
    );
}