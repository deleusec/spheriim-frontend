function Login() {

    const authenticate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
        console.log(email, password);
    }

    return (
        <div className="flex min-h-[100vh] flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full text-center">
                <img className="mx-auto h-12 w-auto" src="./spheriim.svg" alt="Your Company" />
                <h3 className="mt-5">Connectez vous à votre compte</h3>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={authenticate}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email</label>
                        <div className="mt-2">
                            <input type="email" id="email" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="password">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-primary hover:text-primary-light">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input type="password" id="password" />
                        </div>
                    </div>
                    <div>
                        <button className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;