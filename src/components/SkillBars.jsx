import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

export const SKILLS = [
    {type: "HTML", level: 99},
    {type: "CSS", level: 98},
    {type: "JavaScript", level: 87},
    {type: "Flutter", level: 45},
    {type: "React", level: 20},
    {type: "Java", level: 14}
  ];

export default function SkillBars({hue, saturation, skills}){
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCollapsed(false)
    }, 3000);
  }, []);

  return(
     <div id="app" className={`${styles.skillsContainer} ${collapsed ? styles.collapsed : ''}`}>
          <p>Set the Hue and Saturation on the <code>&lt;SkillBars /&gt;</code> instance and let the component deal with the shades</p>
          <hr/>
          <ul className={styles.skillsBars}>
            {skills.map((skill, index) => 
              <li
                key={skill.type}
                style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
              >
                <p>{skill.type}<span>{skill.level}</span></p>
              </li>
            )}
          </ul>
        </div>
  )
}

// Class component - the older way
// eslint-disable-next-line no-lone-blocks
{/**
  class SkillBars extends React.Component {
    constructor(props) {
      super(props);
      this.state = { collapsed: true };       
    }
    
    componentDidMount() {
      setTimeout(() => {
        this.setState({ collapsed: false })
      }, 9000);
    }
  
    render() {
      const { collapsed } = this.state;
      const { hue, saturation, skills } = this.props;
  
      return(  
        <div id="app" className={styles.skillsContainer `${collapsed ? 'collapsed' : ''}`}>
          <p>Set the Hue and Saturation on the <code>&lt;SkillBars /&gt;</code> instance and let the component deal with the shades</p>
          <hr/>
          <ul className={styles.skillsBars}>
            {skills.map((skill, index) => 
              <li
                key={skill.type}
                style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
              >
                <p>{skill.type}<span>{skill.level}</span></p>
              </li>
            )}
          </ul>
        </div>
      )
    }
  }

  export default SkillBars
  
  */}
  