import { useState } from 'react'

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
  const [likes, setLikes] = useState(0)

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
      </div>
    </section>
  )
}

export default ProfileCard