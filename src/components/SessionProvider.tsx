'use client'

import {Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import React from "react";

type Props = {
    children: React.ReactNode;
    session: Session | null
}
export function NextProvider({children,session}: Props) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}