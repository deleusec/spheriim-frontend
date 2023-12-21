import { useMatch, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import SidebarButton from './SidebarButton'; 
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const LogoutButton = () => {
    const navigate = useNavigate();
    const isLogin = useMatch('/login') ? true : false;
    const { setIsAuthenticated } = useUser()

    const handleLogout = () => {
        setIsAuthenticated(false);

        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userEmail'); 
        localStorage.removeItem('userPassword');
        navigate('/login');
    };

    return (
        <div onClick={handleLogout}>
            <SidebarButton text="Déconnexion" active={isLogin} sidebarIsOpen={true}>
                <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
            </SidebarButton>
        </div>
    );
};

export default LogoutButton;
