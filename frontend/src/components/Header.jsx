import React from 'react';
// import { BiWorld } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  return (
    <div className='flex justify-between items-center border-b pl-2'>
        {/*Left*/}
        <img src='/logo.png' width={150} height={100} />
        {/*Right*/}
        <div className='flex items-center pr-3 font-semibold'>
            <p className=' px-3 py-1 rounded-full hover:bg-gray-300 duration-100 ease-out mx-4 cursor-pointer'>Add Store</p>
            {/* <BiWorld className='flex items-center mx-4 gap-1' /> */}
            {/* <div className="flex items-center border px-3 py-2 rounded-full gap-1 shadow-lg shadow-gray-200 hover:bg-gray-300 duration-100 ease-out">
                <FiMenu className='text-[19]' />
                <AiOutlineUser className='text-[19]' />
            </div> */}
            <DropdownMenu>
              <DropdownMenuTrigger>
              <div className="flex items-center border px-3 py-2 rounded-full gap-1 shadow-lg shadow-gray-200 hover:bg-gray-300 duration-100 ease-out">
                <FiMenu className='text-[19]' />
                <AiOutlineUser className='text-[19]' />
              </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
                <DropdownMenuItem>Log In</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Add Store</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>
  )
}

export default Header