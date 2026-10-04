type FooterProps = {
  year: number
}

function Footer({ year }: FooterProps) {
  return (
    <footer>
      <p>© {year}</p>
    </footer>
  )
}

export default Footer