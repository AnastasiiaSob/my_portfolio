import '../styles.css'
import React from 'react';

export default function Skills() {
    return(
        <section className='skills'>
            <div className='skills-header'>
                <h2>These are my skills</h2>
                <p>So much skills, so many smArT</p>
            </div>
            <div className='skills-list'>
            <div className='frontend'>
                <h4>Frontend</h4>
                <ul>
                    <li>TypeScript</li>
                    <li>Web Components</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Flutter</li>
                </ul>
                </div>
                <div className='devops'>
                    <h4>DevOps</h4>
                <ul>
                    <li>Docker</li>
                    <li>GitHub</li>
                    <li>Jenkins</li>
                </ul>
                </div>
                <div className='backend'>
                    <h4>Backend</h4>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                </ul>
                </div>
                <div className='languages'>
                    <h4>Languages</h4>
                <ul>
                    <li>German</li>
                    <li>English</li>
                    <li>Russian</li>
                    <li>Italian</li>
                </ul>
                </div>
            
            </div>
                
            
        </section>
    );
}