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
        <button className={`flex gap-4 min-w-[250px] py-4 px-5 border border-transparent ${props.active && 'border-primary bg-primary text-white rounded-lg '} duration-200`} onClick={props.onClick}>
            { props.children }
            <span>{ props.text }</span>
        </button>
     );
}

export default SidebarButton;