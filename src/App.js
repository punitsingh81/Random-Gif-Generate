import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';

function App() {
  return (
    
      <div className='background w-full flex flex-col items-center  min-h-screen'>
      
      <h1 className='bg-white rounded-lg w-11/12 text-center  mt-[40px] ml-[40px] mr-[40px]
      px-10 py-2 text-3xl mx-auto font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col items-center gap-y-10 mt-[30px] border-rounded-lg '>
        <Random/>
        <Tag/>
      </div>
    </div>
    
  );
}

export default App;
