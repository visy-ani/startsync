import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    async signIn({
      user: { name, email, image },
      profile: { id, login, bio },
    }) {
      console.log('SignIn started:', { id, login });
      
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id,
        });

      console.log('Existing user:', existingUser);
      
      if (!existingUser) {
        const newUser = await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
        console.log('Created new user:', newUser);
      }
      
      return true;
    },
    async jwt({ token, account, profile }) {
      console.log('JWT callback:', { token, profile });
      
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
            id: profile?.id,
          });
        token.id = user?._id;
      }
      
      return token;
    },
    async session({ session, token }) {
      console.log('Session callback:', { session, token });
      
      Object.assign(session, { id: token.id });
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);