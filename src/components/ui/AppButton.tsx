interface AppButtonProps {
    children: string;
    color?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}

function AppButton(props: AppButtonProps) {
    return ( 
        <button onClick={props.onClick} className={`flex gap-2 py-[10px] px-[15px] rounded-lg text-white text-sm ${props.color === 'red' && "bg-[#E72727]"} ${props.color === 'gray' && "bg-[#666666]"}`}>{props.icon && props.icon}{props.children}</button>
     );
}

export default AppButton;