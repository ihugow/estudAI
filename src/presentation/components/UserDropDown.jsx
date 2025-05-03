import * as React from "react";
import { DropdownMenu } from "radix-ui";

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
          className="mt-1.5 z-50 min-w-36 rounded-md bg-white p-2.5 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 cursor-pointer"
          onClick={onProfile}>
            {user?.displayName || "Nome não informado"}{" "}  
            <FaUser className="size-3.5 ml-auto"/>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-black" />

          <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 cursor-pointer">
            Preferencias{" "}
            <IoSettings className="size-3.5 ml-auto"/>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 cursor-pointer"
          onClick={onLogout}>
            Sair{" "}
            <RiLogoutBoxRFill className="size-3.5 ml-auto"/>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserDropDown;
