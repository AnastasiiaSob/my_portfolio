import '../styles.css'
import React, { useEffect, useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import landwirtschaft from '../assets/projects/landwirtschaft.jpg'
import tourism from '../assets/projects/urlaub.jpg'
import petproject from '../assets/projects/pet-project.jpg'

const mockProjectsData = [
    { id: 1, title: 'Portfolio Website', description: 'A personal portfolio to showcase my projects.', image: landwirtschaft },
    { id: 2, title: 'E-commerce Site', description: 'A full-stack e-commerce website.', image: tourism },
    { id: 3, title: 'To-Do App', description: 'A simple to-do list application using React.', image: petproject },
  ];


export default function Projects() {
    const [projects, setProjects] = useState([])

    const fetchProjects = () => {
        setTimeout(() => {
            setProjects(mockProjectsData)
        }, 1000);
    }

    useEffect(() => {
        fetchProjects()
    }, []) // // Empty dependency array means this effect runs once after the initial render

    return(
        <section id='projects' className='projects wrapper'>
            <div className='projects-header'>
                <h3>My Work</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere debitis qui fuga? Iusto natus, ipsa possimus ea cum ipsam quos adipisci quidem unde provident rem, cupiditate assumenda vitae molestias.</p>
            </div>
            <div className='projects-list'>
                {/** image and text are props in ProjectItem component */}
                {projects.length ? projects.map((project) => <ProjectItem key={project.id} image={project.image} title={project.title} description={project.description}/>) : null}
            </div>
        </section>
    );
}