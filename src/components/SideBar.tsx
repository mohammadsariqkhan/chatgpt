'use client'
import React, {useState} from 'react';
import NewChat from "@/components/NewChat";
import {getSession, SessionContext, signOut, useSession} from "next-auth/react";





function SideBar() {
    const {data:session} = useSession()
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    {/*    newChat*/}
                    <NewChat/>
                    <div>
                        {/*    NewChat*/}
                    </div>
                    {/*    Map throught there Chatrows*/}
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