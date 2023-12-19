interface AppButtonProps {
    children?: React.ReactNode;
    text: string;
    theme: 'light' | 'dark';
    onClick?: () => void;
}

AppButton.defaultProps = {
    text: 'Click Me',
    theme: 'light'
}

function AppButton(props: AppButtonProps) {
    return ( 
        <button className="flex gap-4 min-w-[250px] py-4 px-5 border border-primary bg-primary text-white rounded-lg hover:bg-white hover:text-primary duration-200" onClick={props.onClick}>
            { props.children }
            <span>{ props.text }</span>
        </button>
     );
}

export default AppButton;