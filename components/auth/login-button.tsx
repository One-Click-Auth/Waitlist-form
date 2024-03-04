"use client";

import { useRouter } from "next/navigation";

// import { LoginForm } from "./login-form";

interface LoginButtonProps{
    children:React.ReactNode,
    asChild?:boolean;
}
export const LoginButton = ({
    children,
    asChild
}:LoginButtonProps ) => {   
    const router = useRouter();
    const onClick = () =>{
    router.push("/")
    }

    return ( 
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
}


// //Only for checking whether the current user is logged in or not


//auth wale button ko wrap krne k liye

