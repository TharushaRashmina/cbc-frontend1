import { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function AddProductForm() {
  const [productID, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

async function handleSubmit(){

    const altNames = alternativeNames.split(",")//split alt names by a comma
    const imgUrls = imageUrls.split(",")

    const product = {

        productId : productID,//backend model value : fontend submitted value in input fields
        productName : productName,
        altNames : alternativeNames,
        images : imageUrls,
        price : price,
        lastPrice : lastPrice,
        stock : stock,
        description : description


    }

    const token = localStorage.getItem("token")//get the saved token from admon login

    try{

        await axios.post("http://localhost:5000/api/products",product,{

            headers : {

                Authorization : "Bearer "+token
            }
        })
        navigate("/admin/products")//after submit go to adminProductPage
        toast.success("Product Added Successfully")

    }catch(error){

        toast.error("Failed to add product")
    }


}





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add New Product
        </h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Product ID</label>
            <input
              type="text"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={productID}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Alternative Names</label>
            <input
              type="text"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Image URLs</label>
            <input
              type="text"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={imageUrls}
              onChange={(e) => setImageUrls(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Last Price</label>
            <input
              type="number"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          onClick={handleSubmit}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
