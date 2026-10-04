import ProfileCard from '../components/ProfileCard'

function HomePage() {
  return (
    <main>
      <ProfileCard
        name="Aizere Bakytbek"
        role="Third-year IT Management student"
        avatarUrl={`${import.meta.env.BASE_URL}fav.png`}      />
    </main>
  )
}

export default HomePage