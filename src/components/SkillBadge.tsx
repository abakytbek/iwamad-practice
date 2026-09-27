import './SkillBadge.css'

type SkillBadgeProps = {
  label: string
}

function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <div className="skill-badge">
      {label}
    </div>
  )
}

export default SkillBadge