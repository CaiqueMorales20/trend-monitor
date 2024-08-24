import { api } from '@/lib/axios'

async function login({ name, password }: { name: string; password: string }) {
  const response = await api.post('/login', {
    name,
    password,
  })

  return response
}

export { login }
