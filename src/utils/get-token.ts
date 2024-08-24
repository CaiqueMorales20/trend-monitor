'use server'

import { cookies } from 'next/headers'

async function getToken() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  return token?.value
}

export { getToken }
