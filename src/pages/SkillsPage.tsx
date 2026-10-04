import SkillBadge from '../components/SkillBadge'
import { type Skill } from '../data/skills'

function SkillsPage() {
  const skills: Skill[] = [
    { id: 1, label: 'Programming basics' },
    { id: 2, label: 'Communication' },
    { id: 3, label: 'Training Organization' },
    { id: 4, label: 'Cooking' },
  ]

  return (
    <section>
      <h2>Skills</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.id}
            skill={skill}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillsPage