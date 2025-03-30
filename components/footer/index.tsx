import { useAuth } from "@/context/AuthContext";
import UserBadge from "./user-badge";
export default async function Footer () {
    return <footer className=" w-full  gap-2 absolute  p-0 m-0  bottom-5 flex justify-center flex-col items-center">
        <UserBadge />
    </footer>
}