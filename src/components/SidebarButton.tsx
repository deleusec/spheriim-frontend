interface SidebarButtonProps {
    children?: React.ReactNode;
    active?: boolean | undefined;
    sidebarIsOpen?: boolean;
    text: string;
    theme: 'light' | 'dark';
    onClick?: () => void;
}

SidebarButton.defaultProps = {
    active: false,
    sidebarIsOpen: true,
    text: 'Click Me',
    theme: 'light'
}

function SidebarButton(props: SidebarButtonProps) {
    return (
        <button className={`flex items-center gap-4 py-3 px-4 rounded-lg text-sm ${props.active && 'bg-primary text-white '} ${props.sidebarIsOpen && "min-w-[250px]"}`} onClick={props.onClick}>
            {props.children}
            {props.sidebarIsOpen && <span>{props.text}</span>}
        </button>
    );
}

export default SidebarButton;