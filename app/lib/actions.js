'use server'
import { signIn } from '@/auth'

export async function authenticate (_currentState, formData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignIn':
          return 'Invalid credentials'
        default:
          return 'Something went wrong'
      }
    }
    throw error
  }
}
