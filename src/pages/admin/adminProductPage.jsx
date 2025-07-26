import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import {Link} from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  //const [test,setTest] = useState("not pressed");//default value is 'not pressed'
    const[productsLoaded,setProductsLoaded]=useState(false)//initially products not loaded

  useEffect(() => {
    if(!productsLoaded){//if products not loaded get request for load products

        axios.get("http://localhost:5000/api/products").then((res) => {
            console.log(res.data);
            setProducts(res.data);
            setProductsLoaded(true);//after successfully loaded 
          });

    }
    
  }, [productsLoaded]);//now every time productsLoaded variable is vary useEffect also runs 

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
        <Link to={"admin/products/addProduct" } className="absolute right-[25px] bottom-[25px] text-[25px] 
        border-[#3b82f6] border-[2px] text-[#3b82f6] p-5 rounded-xl hover:rounded-full"><FaPlus/></Link>

    {/*<button  className="absolute right-[125px] bottom-[25px] text-[25px] 
        border-[#3b82f6] border-[2px] text-[#3b82f6] p-5 rounded-xl hover:rounded-full"
        onClick={()=>{

            if(test=="Pressed"){
                setTest("Not pressed")
            }else{
                setTest("pressed")
            }
        }}>{test}</button>*/}

      <h1 className="text-2xl font-bold mb-6 text-center">Admin Products Page</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="px-4 py-2 border-b">Product ID</th>
              <th className="px-4 py-2 border-b">Product Name</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Last Price</th>
              <th className="px-4 py-2 border-b">Stock</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-4 py-2 border-b">{product.productId}</td>
                <td className="px-4 py-2 border-b">{product.productName}</td>
                <td className="px-4 py-2 border-b">{product.price}</td>
                <td className="px-4 py-2 border-b">{product.lastPrice}</td>
                <td className="px-4 py-2 border-b">{product.stock}</td>
                <td className="px-4 py-2 border-b">{product.description}</td>
                <td className="px-4 py-2 border-b text-center">
                <div className="flex justify-center gap-4 text-blue-600">
                        <button className="hover:text-red-600" title="Delete"
                            onClick={() => {
                                const token = localStorage.getItem("token");                                
                                axios.delete(`http://localhost:5000/api/products/${product.productId}`,{

                                    headers : {

                                        Authorization : `Bearer ${token}`,
                                    },
                                }).then(
                                    (res)=>{
                                        console.log(res.data);
                                        toast.success("Product deleted successfully!");
                                        setProductsLoaded(false);
                                    }
                                );
                            }}
                        >
                            <FaTrash />
                        </button>

                        <button
                            onClick={() => {
                            console.log("Update clicked for", product.productId);
                            // You can navigate to update form here
                            }}
                            className="hover:text-green-600"
                            title="Edit"
                        >
                            <FaPencilAlt />
                        </button>
                </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
