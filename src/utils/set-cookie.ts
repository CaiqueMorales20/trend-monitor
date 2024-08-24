'use server'

import { cookies } from 'next/headers'

async function setCookie({
  name,
  value,
  httpOnly,
}: {
  name: string
  value: string
  httpOnly?: boolean
}) {
  cookies().set(name, value, {
    httpOnly,
  })
}

export { setCookie }
