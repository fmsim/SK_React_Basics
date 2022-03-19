const Contact = ({ myName, myCountry }) => {
  return (
    <div style={{ backgroundColor: "red", color: "white", fontSize: "30px" }}>
      <h1>{myName}</h1>
      <h3>{myCountry}</h3>
    </div>
  )
}

export default Contact
