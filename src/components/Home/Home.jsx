import Hero from '../Heropage/Heropage'
import Afhero from '../Afhero/Afhero'
import Allchain from '../Allchain/Allchain'
import Features from '../Feature/Feature'
import Buildweb from '../Buildweb/Buildweb'
import Slide from '../Slide/Slide'
import Accord from '../Accordion/Accordion'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Slide/>
      <Buildweb/>
      <Afhero/>
      <Features/>
      <Accord/>
      <Allchain/>
    </div>
  )
}

export default Home
