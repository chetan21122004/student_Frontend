import React, { Fragment } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Menu, Transition } from '@headlessui/react'
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Top() {
  // const navigate = useNavigate()
  // const {user} = useUser()
 const user = JSON.parse(localStorage.getItem('user')); // Set isLoggedIn in local storage

  console.log(user);

  
  return (
  <div className=' shadow-lg   border-gary-300  mb-0'>
    <div className=" bg-blue-400 h-28  mb-0   ">
      <div className=" bg-blue-400   flex items-center justify-start h-28   ">
        
        <div className=" m-4">

            <Menu as="div" className="relative  ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <div className="h-14 border-2 border-black  flex items-center justify-center bg-gray-500 w-14 rounded-full text-white">
                      <FaUser className="h-8  w-8 rounded-full text-white" />
                      </div>
                        

                      
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0  z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div 
                          onClick={ ()=> {
                            localStorage.setItem('isLoggedIn', false); // Set isLoggedIn in local storage
                            window.location.reload();
                            // navigate('/')

                          }}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
               </Menu>
            </div>
        <div className=" m-4 mt-2">
          <p className=' text-2xl  text-white font-normal '>Welcome</p>
          <p className=' text-xl font-normal text-white '>Chetan</p>
        </div>

      </div>
      
    </div>
    <div className=" flex items-center bg-white h-20  p-2">
        
    <div className="  rounded-full flex overflow-hidden border-2 h-12 w-12 m-3 items-center justify-center bg-gray-400">
      <FaUser className=' h-6 w-12 ' />
      </div>
      <div className="">
        <div className="font-bold ">{user.first_name+' '+user.last_name}</div>
        <div className="font-normal ">Bachelor Of Computer Science - 3 Years </div>
        <div className="font-normal ">Semester 3</div>
      </div>
    </div>
  </div>

  )
}

export default Top