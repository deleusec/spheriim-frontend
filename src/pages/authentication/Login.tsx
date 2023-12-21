import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getSupabase from "../../database/supabase";
import { useUser } from "../../context/UserContext";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated } = useUser()
    const navigate = useNavigate()

    const handleLogin = async () => {
        const { data, error } = await getSupabase().auth.signInWithPassword({
            email,
            password,
        });
 
 
        if (error) {
            console.error('Error signing in:', error.message);
        } else {
            console.log('User signed in successfully:', data);
            setIsAuthenticated(true)
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/')
            // Redirect to the dashboard or any other page
        } 
    };
 

    return (
        <div className="flex min-h-[100vh] flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full text-center">
                <img className="mx-auto h-12 w-auto" src="./spheriim.svg" alt="Your Company" />
                <h3 className="mt-5">Connectez vous à votre compte</h3>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email</label>
                    <div className="mt-2">
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="password">Password</label>
                        <div className="text-sm">
                            <a href="#" className="font-light text-primary hover:text-primary-light">Forgot password?</a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className='pt-4'>
                    <button onClick={handleLogin} className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary" type="submit">Login</button>
                </div>
                <div>
                    <Link to={"/register"} className="font-light text-primary hover:text-primary-light">Pas encore inscrit ?</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;