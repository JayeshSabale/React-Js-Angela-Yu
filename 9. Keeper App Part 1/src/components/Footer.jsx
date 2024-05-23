
function Footer() {

    const currentYear = new Date()
    const Year = currentYear.getFullYear()
  return (
    <div className="footer">
      <p>Copyright {Year}</p>
    </div>
    
  )
}

export default Footer
