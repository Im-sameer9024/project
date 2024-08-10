import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Appdownload from "../../components/AppDownload/Appdownload";


export default function Home() {

  const[category,setCategory] = useState('All')

  return (
    <>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </>
  )
}
