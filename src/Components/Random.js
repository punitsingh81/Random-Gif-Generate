import useGif from "../Hooks/useGif";
import Spinner from "./Spinner";

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
      const {gif,loading,fetchData}=useGif();
  return (
    <div className="w-11/16  bg-green-500 flex flex-col
      items-center gap-y-5 mt-[15px] rounded-lg border border-black">
        <h1 className=" mt-[15px]  text-2xl underline uppercase font-bold">A Random GIFs</h1>
        {
          loading ? (<Spinner />) : (<img src={gif} width="450px" />)
        }
        <button onClick={()=>fetchData()}
        className="w-10/12 bg-white text-lg py-2 mb-[15px] rounded-lg ">
            Generate
            </button>
    </div>
  )
}

export default Random
