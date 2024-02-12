"use client";

type SidebarButtonProps = {
    children?: React.ReactNode;
    active?: boolean | undefined;
    sidebarIsOpen?: boolean;
    text: string;
    theme?: 'light' | 'dark';
    onClick?: () => void;
}

function SidebarButton({
    children,
    active = false,
    sidebarIsOpen = true,
    text = 'Click Me',
    theme = 'light',
    onClick
}: SidebarButtonProps) {
    return (
        <button className={`flex items-center gap-4 py-3 px-4 rounded-lg text-sm ${active && 'bg-primary text-white '} ${sidebarIsOpen && "min-w-[250px]"}`} onClick={onClick}>
            {children}
            {sidebarIsOpen && <span>{text}</span>}
        </button>
    );
}

export default SidebarButton;