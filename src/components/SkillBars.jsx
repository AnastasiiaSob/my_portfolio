import React from 'react'
import styles from './styles.module.css'

// Class components: older, more complex, use this, lifecycle methods.
// Functional components: modern, simpler, use Hooks for state and side effects.

// In React there are three kinds of inputs that you can read while rendering: props, state, and context.
// You should always treat these inputs as read-only.

// When you want to change something in response to user input, you should set state instead of writing to a variable.
// You should never change preexisting variables or objects while your component is rendering.
class SkillBars extends React.Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: true }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 3000)
  }

  render() {
    const { collapsed } = this.state
    const { hue, saturation, skills } = this.props

    return (
      <div id="app" className={`${styles.skillsContainer} ${collapsed ? styles.collapsed : ''}`}>
        <p>
          Set the Hue and Saturation on the <code>&lt;SkillBars /&gt;</code> instance and let the component deal with the shades
        </p>
        <hr />
        <ul className={styles.skillsBars}>
          {skills.map((skill, index) => (
            <li
              key={skill.type}
              style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)` }}
            >
              <p>
                {skill.type}
                <span>{skill.level}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SkillBars
