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
        <button className={`flex gap-4 min-w-[250px] py-4 px-5 rounded-lg bg-transparent ${props.active && 'bg-gradient-to-r from-primary to-[#F1B575] text-white '} duration-200`} onClick={props.onClick}>
            { props.children }
            <span>{ props.text }</span>
        </button>
     );
}

export default SidebarButton;