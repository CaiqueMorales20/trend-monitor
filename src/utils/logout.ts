'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function logout() {
  cookies().delete('token')
  redirect('/sign-in')
}

export { logout }
