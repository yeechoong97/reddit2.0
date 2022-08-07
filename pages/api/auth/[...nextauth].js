import RedditProvider from "next-auth/providers/reddit";
import NextAuth from "next-auth"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        RedditProvider({
            clientId: process.env.REDDIT_CLIENT_ID,
            clientSecret: process.env.REDDIT_CLIENT_SECRET
        })
    ]
})