import './globals.css'
import {getServerSession} from "next-auth";
import SideBar from "@/components/SideBar";
import React from "react";
import Login from "@/components/Login";
import {authOptions} from "@/lib/auth";
import {NextProvider} from "@/components/SessionProvider";
import ClientProvider from "@/components/ClientProvider";
export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions);
    console.log(session)
    return (
        <html lang="en">
        <head/>
        <body>
        <NextProvider session={session}>
            {!session ? (
                <Login/>
            ) : (
                <div className="flex bg-[#343541]">
                    {/*sidebar*/}
                    <div
                        className="bg-[#202123] text-white max-w-xs h-screen overflow-auto md:min-w-[20rem]">
                        <SideBar/>
                    </div>
                    {/*clinetProvider-Notifaction*/}

                    <ClientProvider/>

                    <div className="bg-[#343541] flex-1">
                        {children}
                    </div>
                </div>
            )}
        </NextProvider>
        </body>
        </html>
    )
}
