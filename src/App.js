import { useState } from "react"
import "./App.css"
import Contact from "./Contact"

function App() {
  const [name] = useState("Shakil Khan")
  const [country] = useState("Pakistan")

  return (
    <div className="App">
      <Contact myName={name} myCountry={country} />
    </div>
  )
}

export default App
