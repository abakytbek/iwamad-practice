import SkillBadge from '../components/SkillBadge'

type Skill = {
  id: number
  label: string
}

function SkillsPage() {
  const skills: Skill[] = [
    { id: 1, label: 'Programming basics' },
    { id: 2, label: 'Communication' },
    { id: 3, label: 'Training Organization' },
    { id: 4, label: 'Cooking' },
  ]

  return (
    <main>
      <h2>Skills</h2>

      <div className="skills-list">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <SkillBadge
              key={skill.id}
              label={skill.label}
            />
          ))
        ) : (
          <p>No skills added yet.</p>
        )}
      </div>
    </main>
  )
}

export default SkillsPage