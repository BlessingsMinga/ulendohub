import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const {auth, handlers, signIn, signOut} = NextAuth ({

    providers: [GoogleProvider],
    adapter: PrismaAdapter(prisma),

});