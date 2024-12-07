import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const mockUser = {
  id: "1",
  name: "Jhon",
  email: "test",
  pass: "1234",
};

const simulationfetch = async (email: string, password: string) => {
  if (email === mockUser.email && password === mockUser.pass) {
    return mockUser;
  }
  return null;
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const user = await simulationfetch(credentials?.username ?? '', credentials?.password ?? '');
        if (user) return user;

        return null;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, user };
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token as any;
      return session;
    }
  }
});

export { handler as GET, handler as POST };