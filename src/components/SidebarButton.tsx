interface SidebarButtonProps {
    children?: React.ReactNode;
    active?: boolean | undefined;
    text: string;
    theme: 'light' | 'dark';
    onClick?: () => void;
}

SidebarButton.defaultProps = {
    active: false,
    text: 'Click Me',
    theme: 'light'
}

function SidebarButton(props: SidebarButtonProps) {
    return ( 
        <button className={`flex items-center gap-4 min-w-[250px] py-3 px-4 rounded-lg text-sm ${props.active && 'bg-primary text-white '}`} onClick={props.onClick}>
            { props.children }
            <span>{ props.text }</span>
        </button>
     );
}

export default SidebarButton;