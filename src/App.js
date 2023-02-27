
import { useState } from "react";

import { 
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine, 
  RiDeleteBin6Line} from "react-icons/ri";
  
import Sidebar from './components/shared/Sidebar'


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
      {/*Menu movil*/}
      <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 p-4 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
        <button>
          <RiUser3Line/>
          </button>   
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div>Hola1</div>


        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full">
          {/*Orders*/}
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full"/> 
            <h1 className="text-2xl my-4">Orders</h1>
           {/*Pills*/}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
              <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To Go</button>
              <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
            </div>
            {/*Car*/}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5 >Qty</h5>
                <h5>Price</h5>
              </div>
            {/*Product*/}
            <div className="bg-[#262837] p-4 rounded-xl">
              <div className="grid grid-cols-6 mb-4">
                {/*Product description*/}
                <div className="col-span-4 flex items-center gap-2">
                  <img src="zapatos1.jgp" className="w-20"/>
                  <div>
                   <h5 className="text-sm">Spaicy ...</h5>
                   <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/*Qty*/}
                <div className="text-center">
                  <span>2</span>
                </div>
                 {/*Price*/}
                 <div>
                  <span>$4.58</span>
                 </div>
                 {/*Note*/}
                 <div className="grid grid-cols-6 items-center ">
                  <form className="col-span-5"> 
                    <input
                     type='text' 
                     className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                     placeholder="Note..."/>
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500"/>
                    </button>
                  </div>

                 </div>
              </div>

            </div>
            </div>

          </div>
          

        </div>
      </main>
    </div>
  );
}

export default App;
