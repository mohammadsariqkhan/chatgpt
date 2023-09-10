'use client'
import React from 'react';
import SideBar from "@/components/SideBar";
import Hero from "@/components/Hero";
import {useSession} from "next-auth/react";

const ChatPage = () => {
    const session = useSession()
    return (
    <div>
        hello
    </div>
    );
};

export default ChatPage;