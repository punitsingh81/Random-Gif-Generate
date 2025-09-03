import { useState } from "react";
import useGif from "../Hooks/useGif";
import Spinner from "./Spinner";

// const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const [tag, setTag] = useState('');
    const {gif,loading,fetchData}=useGif(tag);

  return (
    <div className="w-11/16  bg-blue-500 flex flex-col
                      items-center gap-y-5 mt-[15px] rounded-lg border border-black">
        <h1 className=" mt-[15px]  text-2xl underline uppercase font-bold">Random {tag} GIF's</h1>
        {
          loading ? (<Spinner />) : (<img src={gif} width="450px" alt={`Random ${tag} GIF`} />)
        }
        <input 
        className='w-10/12 text-center bg-white text-lg py-2 rounded-lg  mb-[3px] '
        onChange={(event)=>setTag(event.target.value)}
        placeholder="Search Your Tag"
        value={tag}/>
        <button onClick={()=>fetchData(tag)} 
        className="w-10/12 bg-white text-lg py-2 mb-[15px] rounded-lg ">
            Generate
            </button>
    </div>
  )
}

export default Tag
