export const authConfig = {
  pages: {
    signIn: '/login'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnHome = nextUrl.pathname.startsWith('/login')

      if (isOnHome) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/login'), nextUrl)
      }
      return true
    }
  },
  providers: []
}
