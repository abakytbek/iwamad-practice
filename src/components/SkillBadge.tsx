import { type Skill } from '../data/skills'
import './SkillBadge.css'

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="skill-badge">
      {skill.label}
    </div>
  )
}

export default SkillBadge