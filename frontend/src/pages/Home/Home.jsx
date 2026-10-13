import "./Home.css"
import Header from "../../components/Hero/Hero"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import { useState } from "react"

const Home = () => {
  
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}


export default Home
