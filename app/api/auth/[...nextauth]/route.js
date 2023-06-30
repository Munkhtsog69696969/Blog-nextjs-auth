import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectDb } from "@/mongo/dbConnect";

import User from "@/model/user";

const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,

        })
    ],
    callbacks:{
        async session({session}){
            const sessionUser=await User.findOne({
                providerId:session.user.providerId
            });
    
            session.user.id=sessionUser._id.toString();
    
            return session;
        },
        async signIn({profile}){
            try{
                await connectDb();
    
                const user=await User.findOne({providerId:profile.id});
    
                if(!user){
                    await User.create({
                        email:profile.email,
                        username:profile.displayName,
                        imageUrl:profile.picture,
                        providerId:profile.id,
                    });
                }
    
                return true;
            }catch(err){
                console.log(err);
            }
        }
    }
});

export {handler as GET , handler as POST};