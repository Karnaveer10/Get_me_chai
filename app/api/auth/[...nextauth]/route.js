import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  debug: true,
});

export { handler as GET, handler as POST };
