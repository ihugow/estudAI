import * as Popover from "@radix-ui/react-popover";
import { useRef, useState } from "react";

const DropDown = ({
  children,
  items = [],
  sideOffset = 2,
  openOnHover = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  };

  const hoverProps = openOnHover
    ? {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }
    : {};

  return (
    <Popover.Root modal={false} open={openOnHover ? open : undefined} onOpenChange={setOpen}>
      <div className="relative contents" {...hoverProps}>
        <Popover.Trigger className="outline-none" asChild>{children}</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            forceMount
            align="end"
            sideOffset={sideOffset}
            className={`outline-none z-50 min-w-64 text-white rounded-md bg-[#030712] p-2.5 border border-[#292d41] shadow-lg/50 ${open ? "animate-popover-in" : "animate-popover-out"} ${className}`}
          >
            {items.map((item, index) =>
              item.type === "separator" ? (
                <div
                  key={index}
                  className="my-1 h-px bg-[#292d41] rounded-full"
                />
              ) : (
                <div
                  key={index}
                  onClick={item.onSelect}
                  className="flex items-center gap-2 px-3 h-8 select-none rounded-[3px] text-sm text-white cursor-pointer hover:bg-violet9"
                >
                  {item.icon && <span className="text-base">{item.icon}</span>}
                  {item.label}
                </div>
              )
            )}
            {/* <Popover.Arrow className="bg-[#030712] size-3.5 border-r border-b border-[#292d41] rotate-45 -translate-y-1/2" /> */}
          </Popover.Content>
        </Popover.Portal>
      </div>
    </Popover.Root>
  );
};

export default DropDown;
