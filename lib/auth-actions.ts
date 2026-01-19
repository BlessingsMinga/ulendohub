import { signIn, signOut} from "@/auth"
import { sign } from "crypto";



export const login = async () => {
    await signIn("GoogleProvider", {redirectTo: "/"});
};

export const logout = async () => {
    await signOut({redirectTo: "/"});
};