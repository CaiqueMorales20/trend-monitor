'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useLogin } from '@/hooks/use-login'
import { setCookie } from '@/utils/set-cookie'

const handleLoginSchema = z.object({
  name: z.string().min(1, 'Insert a name'),
  password: z.string().min(1, 'Insert a password'),
})

type HandleLoginType = z.infer<typeof handleLoginSchema>

function Form() {
  const { mutateAsync: loginFn, isPending } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HandleLoginType>({
    resolver: zodResolver(handleLoginSchema),
  })

  async function handleLogin({ name, password }: HandleLoginType) {
    const { data: token } = await loginFn({ name, password })

    if (token) {
      await setCookie({
        name: 'token',
        value: token,
        httpOnly: true,
      })

      window.location.href = '/dashboard'
    } else {
      toast.error('Name or password wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1 className="text-center text-xl font-bold">Login</h1>
      <p className="mb-6 text-center text-sm text-foreground/80">
        Manage your inventory right now
      </p>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm">Your username</Label>
          <Input {...register('name')} className="w-80" />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <Label className="text-sm">Your password</Label>
          <Input {...register('password')} type="password" className="w-80" />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <Button disabled={isPending} className="w-full text-sm">
          Access panel
        </Button>
      </div>
    </form>
  )
}

export { Form }
