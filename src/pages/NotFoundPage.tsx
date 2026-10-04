import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <main>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default NotFoundPage