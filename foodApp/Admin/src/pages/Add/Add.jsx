/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import toast from "react-hot-toast";


export default function Add({url}) {

  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad"
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }))
  }


  const submitHandler = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)

    const response = await axios.post(`${url}/api/food/add`, formData)
    console.log("hello")
    console.log(response.data)
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: ""
      })
      setImage(false)
      toast.success("Food Added")
    }else{
      toast.error("network Error")
    } 
  }

    return (
      <div className=" w-full ml-[3rem] mt-[1rem]">
        <form onSubmit={submitHandler} className=" flex flex-col gap-4 w-5/12">

          {/* Product Image  */}
          <div className=" w-[120px] cursor-pointer">
            <p className=" mb-3 font-heading">Upload Image</p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload" className="cursor-pointer" />
            </label>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
          </div>

          {/* Product Name  */}
          <div>
            <p className=" font-heading">Product Name</p>
            <input value={data.name} onChange={onChangeHandler} type="text" required name="name" placeholder="Type here" className=" w-full outline-none border border-slate-300 py-1 px-2" />
          </div>

          {/* Product Description  */}
          <div>
            <p className=" font-heading">Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write Content Here" className=" w-full outline-none border border-slate-300 py-1 px-2" ></textarea>
          </div>

          {/* Category & Price  */}
          <div className=" flex justify-between gap-3">
            <div className=" w-full">
              <p className=" font-heading">Product Category</p>
              <select name="category" value={data.category}  onChange={onChangeHandler} className=" w-full outline-none border border-slate-300 py-1 px-2">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Rolls">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div>
              <p className=" font-heading">Product Price</p>
              <input type="Number" required onChange={onChangeHandler} value={data.price} name="price" placeholder="$20" className=" w-full outline-none border border-slate-300 py-1 px-2  " />
            </div>
          </div>
          <div >
            <button className=" font-content bg-red-500 inline-block px-[2rem] py-2 font-bold text-white " type="submit">ADD</button>
          </div>
        </form>
      </div>
    )
  }
