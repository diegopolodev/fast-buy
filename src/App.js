
import { useState } from "react";

import { 
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine, 
  RiDeleteBin6Line} from "react-icons/ri";
  import Card from "./components/shared/Card";
  
import Sidebar from './components/shared/Sidebar';


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  


  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu}/>
      <Card/>
      {/*Menu movil*/}
      <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 p-4 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
        <button>
          <RiUser3Line/>
          </button>   
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 pb-20">
        <div>Hola1</div>

    
       
      </main>
    </div>
  );
}

export default App;
