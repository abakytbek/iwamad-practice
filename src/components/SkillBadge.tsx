import { type Skill } from '../data/skills'
import Tag from './ui/Tag'
import './SkillBadge.css'

function SkillBadge({ skill }: { skill: Skill }) {
  return <Tag label={skill.label} />
}

export default SkillBadge