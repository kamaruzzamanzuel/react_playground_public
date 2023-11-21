import { useState } from 'react'
import RouterButton from './advanced-buttons/RouterButton'
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';

const Root = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className='flex justify-center gap-5 pb-5'>
        <RouterButton to='/ag-grid' variant='outlined'>
          AG Grid
        </RouterButton>
        <RouterButton to='/mui-x-grid' target="_blank" className='hover:text-black hover:!bg-white'>
          MUI X Grid
        </RouterButton>
        <RouterButton to='/kendo-grid'>
          Kendo Grid
        </RouterButton>
        <Button >
          Home 1
        </Button>
        <Button component="a" href="/">
          Home 2
        </Button>
        <RouterButton onClick={() => alert("test")}>
          Home 3
        </RouterButton>
      </div>

      <Outlet />
    </>
  )
}

export default Root