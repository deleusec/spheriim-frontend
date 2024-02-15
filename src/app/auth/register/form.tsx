'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import Link from 'next/link'
import { CreateUserInput, createUserSchema } from '@/lib/user-schema'
import { signUpWithEmailAndPassword } from '@/app/_actions'

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const methods = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  })

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const onSubmitHandler: SubmitHandler<CreateUserInput> = values => {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword({
        data: values,
      })
      const { error } = JSON.parse(result)
      if (error?.message) {
        toast.error(error.message)
        console.log('Error message', error.message)
        reset({ password: '' })
        return
      }

      toast.success('registered successfully')
      router.push('/auth/login')
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="flex min-h-[100vh] flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full text-center">
          <h3 className="mt-5">Créez votre compte</h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                {...register('email')}
                placeholder="Email address"
              />
              {errors['email'] && (
                <span className="text-red-500 text-xs pt-1 block">
                  {errors['email']?.message as string}
                </span>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                {...register('password')}
                placeholder="Password"
              />
              {errors['password'] && (
                <span className="text-red-500 text-xs pt-1 block">
                  {errors['password']?.message as string}
                </span>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                {...register('passwordConfirm')}
                placeholder="Confirm Password"
              />
              {errors['passwordConfirm'] && (
                <span className="text-red-500 text-xs pt-1 block">
                  {errors['passwordConfirm']?.message as string}
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
              disabled={isPending}
            >
              {isPending ? 'loading...' : 'Sign Up'}
            </button>
          </div>
          <div>
            <Link
              href={'/auth/login'}
              className="font-light text-primary hover:text-primary-light"
            >
              Déjà inscrit ?
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}
