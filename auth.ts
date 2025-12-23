import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import {PrismaAdapter} from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const {} = NextAuth ({

    providers: [GoogleProvider, AppleProvider],
    adapter: PrismaAdapter(prisma),

});