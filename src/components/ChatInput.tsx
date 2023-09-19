'use client'
import React, {FormEvent, useState} from 'react';
import {PaperAirplaneIcon} from "@heroicons/react/24/solid";
import {useSession} from "next-auth/react";
import {addDoc, collection, serverTimestamp} from "@firebase/firestore";
import {db} from "../../firebase";
import {POST} from "@/app/api/auth/[...nextauth]/route";
import toast from "react-hot-toast";
import ModelSelection from "@/components/ModelSelection";
import useSWR from "swr";

type Props = {
    chatId: string
}
const ChatInput = ({chatId}: Props) => {
    const [prompt, setPrompt] = useState("")
    const {data: session} = useSession()
    // useSWR to get model
    const {data: model} = useSWR('model', {fallbackData: 'text-devinci-003'})
    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt) return;
        const input = prompt.trim()
        setPrompt("")
        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email,
                name: session?.user?.name,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }
        const notification = toast.loading('ChatGPT is thinking...')
        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message)
        //toaster notification

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session
            }),
        }).then(() => {
            //toast notifiation
            toast.success('Your Answer', {
                id: notification,
            })
        })
    }
    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm w-full mx-auto">
            <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
                <input
                    className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                    disabled={!session} value={prompt} onChange={(e) => {
                    setPrompt(e.target.value)
                }} type="text" placeholder="Type your message here..."/>
                <button className="hover:opacity-50 disabled:cursor-not-allowed" disabled={!prompt || !session}
                        type="submit"><PaperAirplaneIcon
                    className="h-5 w-5 -rotate-50"></PaperAirplaneIcon></button>
            </form>
            <div className="md:hidden">
                {/*    ModelSelection*/}
                <ModelSelection/>
            </div>
        </div>
    );
};

export default ChatInput;