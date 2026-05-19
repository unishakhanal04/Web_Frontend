"use client";//client component
//any time you can use hook/states use client
import { useRouter } from "next/navigation";//hook

export default function RedirectClientPage() {
    const router = useRouter();
    const changeUrl = () => {
        router.push("/example/link"); //functional redirect
    }
    return (
        <div>
            
            <button onClick={changeUrl}>Go to Link Page</button>
        </div>
    );
}