'use client'
import React, {useState} from 'react';
import NewChat from "@/components/NewChat";
import {getSession, SessionContext, signOut, useSession} from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, orderBy, query} from "@firebase/firestore";
import {db} from "../../firebase";
import ChatRow from "@/components/ChatRow";
import ModelSelection from "@/components/ModelSelection";





function SideBar() {
    const {data:session} = useSession()
    const [chats,loading,error] = useCollection(
        session && query(collection(db,'users',session.user?.email!,'chats'),orderBy('createdAt','asc'))
    );

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    {/*    newChat*/}
                    <NewChat/>
                    {/*<div className="hidden sm:inline">*/}
                    {/*    <ModelSelection/>*/}

                    {/*    /!*    NewChat*!/*/}
                    {/*</div>*/}
                    <div className="flex flex-col space-y-2 my-2">
                        {loading && (
                            <div className="animate-pulse text-center text-white">
                                <p>Loading Chats...</p>
                            </div>
                        )}
                        {/*    Map throught there Chatrows*/}
                        {chats?.docs.map(chat => (
                            <ChatRow key={chat.id} id={chat.id}/>
                        ))}

                    </div>
                </div>
            </div>
            {session && (
                <>
                    <hr className="border-gray-700 mb-2"/>
                    <div className="flex items-center space-x-6 hover:bg-[#343541] rounded-md p-4">
                        <img onClick={() => signOut()} src={session.user?.image!} alt="Profile Pic"
                             className='h-10 w-10 cursor-pointer hover:opacity-50 rounded-md'/>
                        <p>{session.user?.name!}</p>
                    </div>
                </>
            )}

        </div>



)
    ;
}

export default SideBar;