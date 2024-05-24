import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";

export const options:NextAuthOptions = {
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{
                    label:'Username:',
                    type:"text",
                    placeholder:"enter your username"
                },
                password:{
                    label:'Password',
                    type:"password",
                    placeholder:"********"
                }
            },
            async authorize (credentials) {
                /**This is where you need to retrieve user data to verify credentials */
                const user = { id: '42', name: 'Devam', password:"nextAuth"}
                if(credentials?.username === user.name &&credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
        })
    ],

    /**If you want to create your own custom page of auth , below is the example how to create it */

    // pages:{
    //     signIn:""
    // }
}