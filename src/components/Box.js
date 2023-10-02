import React from "react";
import reviews from "../data";
import { useState } from "react";
import { FaQuoteRight, FaQuoteLeft,FaAngleLeft,FaAngleRight} from "react-icons/fa6";
import { toast } from 'react-toastify';
function Box(){
    const [index,setIndex]=useState(0)
    const n=reviews.length
    function randomChange(){
        const max=n-1
        const min=0
        const curr=Math.floor(Math.random() * (max - min + 1)) + min;
        setIndex(curr)
        toast.info('Suprise Me', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });
        console.log(index)
    }
    function increment(){
        setIndex((prev)=>((prev+1)%n))
        console.log(index)
    }
    function decrement(){
        setIndex((prev)=>(prev===0?(n-1):prev-1))
        console.log(index)
    }
    return (
        <div className="bg-white max-w-2xl transition-shadow duration-300 delay-150 ease-in-out  hover:shadow-shad ">
            <div  className="relative">
                <div>
                    <div className="w-[130px] h-[130px] rounded-full bg-highlight absolute -top-12 left-9 "></div>
                    <img className="w-[130px] h-[130px] rounded-full absolute -top-11 left-7 "src={reviews[index].image}/>
                </div>
                <div className="flex flex-col items-center gap-y-2 mb-3 mt-4">
                   <h2 className="font-semibold text-[20px]">{reviews[index].name}</h2>
                   <h3 className="text-highlight uppercase text-opacity-50 font-semibold">{reviews[index].job}</h3>
                </div>
                <div className="flex justify-center mb-6">
                    <button><FaQuoteLeft className="fill-highlight opacity-70" fontSize="2rem"/></button>
                </div>
                <div className="flex justify-center mb-6 text-center px-10">
                    {reviews[index].text}
                </div>
                <div className="flex justify-center mb-6">
                    <button ><FaQuoteRight className="fill-highlight opacity-70" fontSize="2rem"/></button>
                </div>
            </div>
            <div className="flex justify-center gap-x-6 mb-5">
                <button onClick={decrement}><FaAngleLeft className="fill-highlight opacity-70" fontSize="1.75rem"/></button>
                <button onClick={increment}><FaAngleRight className="fill-highlight opacity-70" fontSize="1.75rem"/></button>
            </div>
            <div className="flex justify-center mb-6">
                <button className="py-3 px-6 bg-highlight 
                text-white font-semibold rounded-md bg-opacity-60 transition-colors duration-300 delay-150 ease-in-out  hover:bg-opacity-95" onClick={randomChange}>Suprise me</button>
            </div>
        </div>
    )
}
export default Box