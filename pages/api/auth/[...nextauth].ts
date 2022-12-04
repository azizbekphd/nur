import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize( credentials, req ) {
        console.log("Credentials", credentials);
        console.log("Req", req);
        if (credentials) {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            }
          });
          console.log("User", user);
          if (user) {
            return user;
          }
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      let success = true;
      if (account?.provider === "google") {
         success = (profile as GoogleProfile).email_verified;
      }
      if (success) {
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      console.log(url, baseUrl)
      return "/"
    }
  },
}

export default NextAuth(authOptions)
