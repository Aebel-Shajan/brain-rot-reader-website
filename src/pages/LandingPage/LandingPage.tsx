import Navbar from "../../components/Navbar/Navbar"
import Hero from "./Hero/Hero"
import Pricing from "./Pricing/Pricing"
import UseCases from "./UseCases/UseCases"

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <UseCases />
      <Pricing />
    </div>
  )
}

export default LandingPage
