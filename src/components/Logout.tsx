import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const LogoutButton = () => {
    const navigate = useNavigate();
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
                <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
        </div>
    );
};

export default LogoutButton;
