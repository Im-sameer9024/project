/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";


export default function List({url}) {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)

    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Error")
    }

  }

  useEffect(() => {
    console.log(list)
    fetchList()

  },[list])

  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList()
    if(response.data.success){
      toast.success("food is removed")
    }else{
      toast.error("error")
    }
  }

  return (
    <div className=" w-full ml-[3rem] mt-[1rem]">
      <p className="font-heading my-4">All Foods List</p>
      <div className="w-11/12">
        <div className=" grid grid-cols-5 place-content-center px-3 border border-black py-3 font-smallHeading">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div> 
        {
          list.map((item,index) =>{
            return (
              <div key={index} className=" grid grid-cols-5 place-content-center border border-black py-3 px-3 font-content">
              <img src={`${url}/uploads/`+item.image} alt="img" width="50px" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() =>removeFood(item._id)} className=" font-bold text-[1rem] cursor-pointer">x</p>
              </div>
            )
          })
        } 
      </div>
    </div>
  )
}
