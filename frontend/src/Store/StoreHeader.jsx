import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function StoreHeader() {
  return (
    <div className='flex justify-between items-center border-b pl-2'>
        {/*Left*/}
        <img src='/logo.png' width={150} height={100} />
        <div className='flex items-center justify-center gap-1 pr-2'>
          <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className='text-[16px] font-bold'>My Store</p>
        </div>
    </div>
  )
}

export default StoreHeader