import { useState } from 'react';
import { Link } from 'react-router-dom';
import getSupabase from "../../database/supabase";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const { data, error } = await getSupabase().auth.signUp({ email, password });
            if (error) {
                throw error;
            }
            // Handle successful signup
            console.log('User signed up:', data);
        } catch (error) {
            console.log('Error signing up:', error);
        }

    }
    return (
        <div className="flex min-h-[100vh] flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full text-center">
                <h3 className="mt-5">Créez votre compte</h3>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email</label>
                    <div className="mt-2">
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="password">Password</label>
                    <div className="mt-2">
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="confirmPassword">Confirm Password</label>
                    <div className="mt-2">
                        <input type="password" id="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
                <div>
                    <p className="text-red-500 text-sm h-2">{error}</p>
                </div>
                <div>
                    <button onClick={handleSignup} className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary" type="submit">Login</button>
                </div>
                <div>
                    <Link to={"/login"} className="font-light text-primary hover:text-primary-light">Déjà inscrit ?</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;