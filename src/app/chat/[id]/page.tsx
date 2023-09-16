'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
type Props = {
    params:{
        id:string
    }
}
const ChatPage = ({params:{id}}: Props) => {

    // const session = useSession()
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Chat chatId={id}/>
            {/*    chat*/}
            {/*    chatinput*/}
            <ChatInput chatId={id}/>

        </div>
    );
};

export default ChatPage;