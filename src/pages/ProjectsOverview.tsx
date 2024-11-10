import './../styles/styles.css'
import React, { useEffect, useState } from 'react'
import ProjectItem from '../components/ProjectItem'
import { useNavigate } from 'react-router-dom'
import landwirtschaft from '../assets/projects/landwirtschaft.jpg'
import tourism from '../assets/projects/urlaub.jpg'
import petproject from '../assets/projects/pet-project.jpg'


export type ProjectType = {
  readonly id: number,
  title: string,
  description: string,
  image: string
}

const mockProjectsData = [
  { id: 1, title: 'Portfolio Website', description: 'I worked on several projects on a long term, where I contribute to the long term customer success. It’s not only about the code - it’s about impact on people.', image: landwirtschaft },
  { id: 2, title: 'E-commerce Site', description: 'A full-stack e-commerce website.I worked on several projects on a long term, where I contribute to the long term customer success. It’s not only about the code - it’s about impact on people.', image: tourism },
  { id: 3, title: 'To-Do App', description: 'A simple to-do list application using React.I worked on several projects on a long term, where I contribute to the long term customer success. It’s not only about the code - it’s about impact on people.', image: petproject },
]

function ProjectsOverview() {
  const [projects, setProjects] = useState<ProjectType[]>([])
  const navigate = useNavigate() // Initialize the navigate hook

  const fetchProjects = () => {
    setTimeout(() => {
      setProjects(mockProjectsData)
    }, 1000)
  }

  const handleNavigate = () => {
    navigate('/projects') // Programmatically navigate to the '/projects' page
  }

  useEffect(() => {
    fetchProjects()
  }, []) // // Empty dependency array means this effect runs once after the initial render

  return (
    <section id="projects" className="projects wrapper">
      <div className="projects-header">
        <h2>My Work</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere debitis qui fuga? Iusto natus, ipsa possimus ea cum ipsam
          quos adipisci quidem unde provident rem, cupiditate assumenda vitae molestias.
        </h3>
      </div>
      <div className="projects-list">
        {/** image and text are props in ProjectItem component */}
        {projects.length
          ? projects.map((project) => (
              <ProjectItem key={project.id} image={project.image} title={project.title} description={project.description} />
            ))
          : null}
      </div>
      <div>
        <button onClick={handleNavigate}>More about my projects</button>
      </div>
    </section>
  )
}

export default ProjectsOverview
