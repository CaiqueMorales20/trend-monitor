import jwt, { JwtPayload } from 'jsonwebtoken'
import { cookies } from 'next/headers'

function isTokenExpired(token: string): boolean {
  const decoded = jwt.decode(token)

  if (typeof decoded === 'object' && decoded !== null && 'exp' in decoded) {
    const currentTime = Math.floor(Date.now() / 1000)
    return (decoded as JwtPayload).exp! < currentTime
  }

  return true
}

function useValidateToken() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (token && !isTokenExpired(token.value)) {
    return true
  } else {
    return false
  }
}

export { useValidateToken }
