import { NuxtAuthHandler } from "#auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "~/server/utils/prisma";
import { User } from "next-auth";
declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean;
  }
}
export default NuxtAuthHandler({
  providers: [
    Google.default({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET!,
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async jwt({ token }) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });
      token.isAdmin = existingUser?.isAdmin!;
      return token;
    },
  },
});
