import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import bcrypt from 'bcrypt'


// TODO: Add hashing
async function getUser(email) {
  try {
    // TODO: Create backend and retrieve here a user
    const user = { rows: [{ email: 'me.test@mail.com', password: '123456' }] }
    return user.rows[0]
  } catch (error) {
    console.error('Failed to fetch user', error)
    throw new Error('Failed to fetch user.')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize (credentials) {
      const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(credentials)

      if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data
        const user = await getUser(email)
        console.log(user)
        if (!user) return null
        const passwordMatch = password === user.password
        if (passwordMatch) return user
      }

      console.log('Invalid Credentials')
      return null
    }
  })]
})
