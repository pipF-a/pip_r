import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";

export const config = {
  providers: [
    Github({clientId: process.env.AUTH_GITHUB_ID, 
    clientSecret: process.env.AUTH_GITHUB_SECRET})],
  basePath: "/api/auth",
  callbacks: {
    async signIn({user}) {
      const allowedEmails = [
        "pip87213@gmail.com",
      ];
      // ユーザーのメールアドレスが許可リストに含まれていなければ、サインインを拒否
      if (!allowedEmails.includes(user.email ?? "")) {
        return false;  // サインインを拒否
      }

      return true;  // 許可されたメールアドレスの場合、サインインを許可
    }
  }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);