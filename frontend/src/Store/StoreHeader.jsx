import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function StoreHeader() {
  return (
    <div className='flex justify-between items-center border-b pl-2'>
        {/*Left*/}
        <img src='/logo.png' width={150} height={100} />
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>My Store</AvatarFallback>
        </Avatar>

    </div>
  )
}

export default StoreHeader