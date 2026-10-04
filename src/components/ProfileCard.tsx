import LikeButton from './LikeButton'
import './ProfileCard.css'

type ProfileCardProps = {
  name: string
  role: string
  avatarUrl: string
}

function ProfileCard({
  name,
  role,
  avatarUrl,
}: ProfileCardProps) {
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

        <LikeButton />
      </div>
    </section>
  )
}

export default ProfileCard