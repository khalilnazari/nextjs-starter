import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        const user = {
          email: "khalil@gmail.com",
          password: "12345",
        };

        try {
          if (credentials.email === user.email) {
            if (credentials.password === user.password) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("Wrong Credentials!");
          }
        } catch (error) {
          console.log("Credentials : ", error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/profile",
    signOut: "/login",
  },
});

export { handler as GET, handler as POST };
