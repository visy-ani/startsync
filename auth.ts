import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      user: { name, email, image },
      profile: { id, login, bio },
    }) {
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      try {
        if (account && profile) {
          const user = await client
            .withConfig({ useCdn: false })
            .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
              id: profile?.id,
            });
          if(user){
          token.id = user._id;
          }
        }
      } catch (err) {
        console.log(err + "Erorr in jwt");
      }

      return token;
    },
    async session({ session, token }) {
      if(session.user){
        session.user.id = token.id;
      }
      else{
        console.log("No session user");
        return session;
      }
    },
  },
});
