import { DropdownMenu } from "radix-ui";
import * as React from "react";

import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";

const UserDropDown = ({user, onProfile, onLogout, children}) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="mt-2 mr-4 z-50 min-w-48 text-white rounded-md bg-[#030712] p-2.5 border border-[#292d41] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="group relative flex justify-center h-[25px] select-none items-center rounded-[3px] text-sm font-bold leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 cursor-pointer"
          onClick={onProfile}>
            {user?.displayName || "Nome não informado"}{" "}  
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-[#292d41] rounded-full" />

          <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] text-sm leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 cursor-pointer">
            Preferencias{" "}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] text-sm leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 cursor-pointer"
          onClick={onLogout}>
            Sair{" "}
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="size-3 relative bottom-1.5 bg-[#030712] mr-4 border-r border-b border-[#292d41] rotate-45" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserDropDown;
