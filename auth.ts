import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  trustHost: true,
})