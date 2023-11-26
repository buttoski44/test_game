import { useController } from './useController'

function App() {

  const [disabled, state, dispatch] = useController();

  const handleLeft = () => {
    dispatch({ type: "left" })
  }
  const handleRight = () => {
    dispatch({ type: "right" })
  }
  const handleUp = () => {
    dispatch({ type: "up" })
  }
  const handleDown = () => {
    dispatch({ type: "down" })
  }

  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='h-[580px] w-[580px] flex'>
        <div className="w-10 h-full flex flex-col">
          <div className='h-10 w-full flex-none'></div>
          <button className='w-full grow bg-[#b8eded] disabled:opacity-50 disabled:bg-gray-300 rounded ' disabled={disabled.left} onClick={handleLeft}>left</button>
          <div className='h-10 w-full flex-none'></div>
        </div>
        <div className='flex flex-col '>
          <button className='w-[500px] bg-[#b8eded] h-10 disabled:opacity-50 disabled:bg-gray-300 rounded' disabled={disabled.up} onClick={handleUp}>up</button>
          <div className='flex-grow w-full relative'>
            <div className='h-[50px] w-[50px] bg-yellow-300 absolute rounded' style={{ top: state.top, left: state.left }}></div>
          </div>
          <button className='w-[500px] bg-[#b8eded] h-10 disabled:opacity-50 disabled:bg-gray-300 rounded' disabled={disabled.down} onClick={handleDown}>down</button>
        </div>
        <div className="w-10 flex flex-col">
          <div className='h-10 w-full flex-none'></div>
          <button className='w-full grow bg-[#b8eded] disabled:opacity-50 disabled:bg-gray-300 rounded' disabled={disabled.right} onClick={handleRight}>right</button>
          <div className='h-10 w-full flex-none'></div>
        </div>
      </div>
    </main>
  )
}

export default App
