import TopNav from "./components/TopNav"
import Featured from "./components/Featured"
import Delivery from "./components/Delivery"
import TopPicks from "./components/TopPicks"
import Meal from "./components/Meal"
import Categories from "./components/Categories"
import NewsLetter  from "./components/NewsLetter"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
 
  return (
    <div className="app">
    <TopNav />
    <Featured />
    <Delivery />
    <TopPicks />
    <Meal />
    <Categories />
    <NewsLetter />
    <Footer />
    </div>
  )
}

export default App
