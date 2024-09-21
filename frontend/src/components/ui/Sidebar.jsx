import React from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { BellDot, GlobeLock, Home, Inbox, LayoutDashboard, Settings, Store } from 'lucide-react';
import { Separator } from '@radix-ui/react-dropdown-menu';

function Sidebar() {
  const menuList = [
    {
      group: "General",
      items:[
        {
          link: "/",
          icon: <Home />,
          text: "Home"
        },
        {
          link: "/",
          icon: <LayoutDashboard />,
          text: "Dashboard"
        },
        {
          link: "/",
          icon: <Store />,
          text: "New Store"
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox"
        },
        ,
        {
          link: "/",
          icon: <BellDot />,
          text: "Notifications"
        }
      ]
    },
    {
      group: "Settings",
      items:[
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings"
        },
        {
          link: "/",
          icon: <GlobeLock />,
          text: "Privacy"
        }
      ]
    }
  ]

  return (
    <div className='fixed flex flex-col w-[300px] border-r min-w-[300px] min-h-[735px] p-2'>
      <div className='grow'>
      <Command style={{overflow: 'visible'}}>
          <CommandList style={{overflow: 'visible'}} >
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => (
                  <CommandItem key={optionKey} className="flex gap-2 cursor-pointer" >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>LogOut / Settings</div>
    
    </div> /*to fit screen replace with min-h-screen*/
  )
}

export default Sidebar