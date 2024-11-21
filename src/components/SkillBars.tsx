import React from 'react'
import { SkillType } from '../sections/Skills';
// Class components: older, more complex, use this, lifecycle methods.
// Functional components: modern, simpler, use Hooks for state and side effects.

// In React there are three kinds of inputs that you can read while rendering: props, state, and context.
// You should always treat these inputs as read-only.

// When you want to change something in response to user input, you should set state instead of writing to a variable.
// You should never change preexisting variables or objects while your component is rendering.

export type SkillBarsProps = {
	hue?: string,
	saturation?: string,
	skills: SkillType[],
};


class SkillBars extends React.Component<SkillBarsProps, {collapsed: boolean}> {
  constructor(props: SkillBarsProps) {
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
      <div id="app" className={`skillsContainer ${collapsed ? "collapsed" : ''}`}>
        <p>
          Set the Hue and Saturation on the <code>&lt;SkillBars /&gt;</code> instance and let the component deal with the shades
        </p>
        <hr />
        <ul className="skills-bars">
          {skills.map((item, index) => (
            <li
              key={item.skill}
              style={{ width: `${item.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)` }}
            >
              <p>
                {item.skill}
                <span>{item.level}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SkillBars
