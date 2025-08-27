import AboutUs from "../components/AboutUs"
import Industries from "../components/Industries"
import Introduce from "../components/Introduce"
import Nav from "../components/Nav"
import ProductRange from "../components/ProductRange"
import RequestQuote from "../components/RequestQuote"
import TopBar from "../components/TopBar"
import WhyUs from "../components/WhyUs"


const Home = () => {
  return (
    <>
    <TopBar/>
    <Nav/>
    <Introduce/>
    <WhyUs/>
    <ProductRange/>
    <Industries/>
    <RequestQuote/>
    <AboutUs/>
    </>
   
  )
}

export default Home