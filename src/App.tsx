import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header name="Aizere Bakytbek" />

      <main>
        <ProfileCard
          name="Aizere Bakytbek"
          role="Third-year IT Management student"
          avatarUrl="/fav.png"
        />
      </main>

      <Footer year={2026} />
    </>
  )
}

export default App