import jwt from 'jsonwebtoken'

import { getToken } from './get-token'

interface DecodedToken {
  businessId: number
  name: string
  iat: number
  exp: number
}

async function getDecodedToken(): Promise<DecodedToken> {
  const token = await getToken()

  const decoded = jwt.decode(token!)

  return decoded as DecodedToken
}

export { getDecodedToken }
