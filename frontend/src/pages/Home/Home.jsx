import "./Home.css"
import Header from "../../components/Hero/Hero"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import AppDownload from "../../components/AppDownload/AppDownload"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"

const Home = () => {
  
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload />
      <Footer />
    </div>
  )
}


export default Home
