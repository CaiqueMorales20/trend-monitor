import { redirect } from 'next/navigation'

import { useValidateToken } from '@/hooks/useValidadeToken'

export default async function Home() {
  const isAuth = useValidateToken()

  if (isAuth) {
    redirect('/dashboard')
  } else {
    redirect('/sign-in')
  }

  return <main></main>
}
