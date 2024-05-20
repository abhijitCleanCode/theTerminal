import './App.css';
import { Outlet } from 'react-router-dom';

import { Navbar } from './components';

function App() {

  return (
    <>
      <Navbar />

      <main className='bg-[#0B1531] min-h-screen'>
        <Outlet />
      </main>
    </>
  )
}

export default App