import { useState } from 'react'
import SkillBadge from './SkillBadge'

type ProfileCardProps = {
  name: string
  role: string
  avatarUrl: string
}

type Skill = {
  id: number
  label: string
}

function ProfileCard({
  name,
  role,
  avatarUrl,
}: ProfileCardProps) {
  const [likes, setLikes] = useState(0)

  const skills: Skill[] = [
    { id: 1, label: 'Programming basics' },
    { id: 2, label: 'Communication' },
    { id: 3, label: 'Training Organization' },
    { id: 4, label: 'Cooking' },
  ]

  return (
    <section className="card">
      <img
        className="profile-image"
        src={avatarUrl}
        alt={name}
      />

      <div>
        <h2>{name}</h2>
        <p>{role}</p>

        <button onClick={() => setLikes(likes + 1)}>
          Like {likes}
        </button>

        <h3>Skills</h3>

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
      </div>
    </section>
  )
}

export default ProfileCard