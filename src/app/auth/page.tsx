"use client"
import React, {useState} from 'react';
import {useSession} from "next-auth/react";
import Login from "@/components/Login";
import SideBar from "@/components/SideBar";
import Hero from "@/components/Hero";

function Page() {
    const session = useSession()
    const [isToggled, setIsToggled] = useState(false);

    // Function to handle the button click and toggle the state
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    if (session.status === 'loading') {
        return "wait"
    } else if (session.status === 'authenticated') {
        console.log(session.data.user)
        return (

            <div className="flex bg-[#343541]">
                {/*sidebar*/}

                 <div
                    className="bg-[#202123] text-white max-w-xs h-screen overflow-auto md:min-w-[20rem] hidden md:block">
                    <SideBar/>
                </div>
                <div className="bg-[#343541] flex-1">
                    <Hero/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full h-full overflow-auto">
                <Login/>
            </div>)
    }

}

export default Page;