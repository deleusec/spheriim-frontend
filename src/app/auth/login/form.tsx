'use client';

import { signInWithEmailAndPassword } from '@/app/_actions';
import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
    startTransition(async () => {
      const result = await signInWithEmailAndPassword(values);

      const { error } = JSON.parse(result);
      if (error?.message) {
        setError(error.message);
        toast.error(error.message);
        console.log('Error message', error.message);
        reset({ password: '' });
        return;
      }

      setError('');
      toast.success('successfully logged in');
      router.push('/home');
    });
  };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            {error && (
                <p className='text-center bg-red-300 py-4 mb-6 rounded'>{error}</p>
            )}
            <div className="flex min-h-[100vh] flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full text-center">
                    <img className="mx-auto h-12 w-auto" src="/spheriim.svg" alt="Your Company" />
                    <h3 className="mt-5">Connectez vous à votre compte</h3>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                id="email"
                                {...register('email')}
                            />
                            {errors['email'] && (
                                <span className='text-red-500 text-xs pt-1 block'>
                                    {errors['email']?.message as string}
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="password">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-light text-primary hover:text-primary-light">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                type='password'
                                {...register('password')}
                                placeholder='Password'
                            />
                            {errors['password'] && (
                                <span className='text-red-500 text-xs pt-1 block'>
                                    {errors['password']?.message as string}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="pt-4">
                        <button
                            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            type="submit"
                            disabled={isPending}
                        >
                            {isPending ? 'loading...' : 'Sign In'}
                        </button>
                    </div>
                    <div>
                        <Link href={"/auth/register"} className="font-light text-primary hover:text-primary-light">
                            Pas encore inscrit ?
                        </Link>
                    </div>
                </div>
            </div>
        </form>

    );
};
