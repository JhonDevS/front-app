import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const mockUser = {
  id: "1",
  name: "Jhon",
  email: "test@test.com",
  pass: "1234",
};

const simulationfetch = async (email: string, password: string) => {
  console.log('Email**:', email);
  console.log('Password**', password);
  if (email === mockUser.email && password === mockUser.pass) {
    return mockUser;
  }
  return null;
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        console.log('Credentials', credentials)
        const user = await simulationfetch(credentials?.email ?? '', credentials?.password ?? '');
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
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };