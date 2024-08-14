import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials) {
            throw new Error("No credentials provided");
          }
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          const user = userCredential.user;
          const role = "user"; // Varsayılan olarak "user" rolü atıyoruz
          return { id: user.uid, email: user.email, role };
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Eğer token içinde user varsa, bu bilgiyi session.user'a atıyoruz
      if (token.user) {
        session.user = token.user as {
          id: string;
          email: string;
          role: string;
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      // Eğer user bilgisi mevcutsa, bu bilgiyi token.user olarak saklıyoruz
      if (user) {
        token.user = user;
      }
      return token;
    },
    async redirect({ baseUrl }) {
      // Başarılı oturum açma sonrası yönlendirme için baseUrl'e geri dönüyoruz
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(options);