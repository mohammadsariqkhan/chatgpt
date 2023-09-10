'use client'

import {signIn} from "next-auth/react";
import Typewriter from 'typewriter-effect';


function Login() {
    return (
        <div className="bg-[#00002e] h-screen flex flex-col justify-between md:flex-row ">
            <div className="text-[#d292ff] p-8 flex flex-col md:flex-1 min-w-fit">
                <div className="flex items-center space-x-1">
                    <div className="font-bold text-2xl ">ChatGPT</div>
                    <div className='w-4 h-4 rounded-full bg-[#d292ff]'></div>
                </div>
                <div className="font-bold mt-72 text-5xl flex items-center">
                    <Typewriter
                        options={{
                            strings: ['Welcome', 'to', 'ChatGPT'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <div className='h-6 w-6 bg-[#d292ff] rounded-3xl'></div>
                </div>

            </div>
            <div
                className="bg-black text-white text-center rounded-t-3xl py-12 space-y-5 flex flex-col md:justify-center md:rounded-none px-4 md:flex-1 max-w-3xl">
                <h1 className="font-bold text-xl md:text-3xl">Get started</h1>
                <div className="space-x-3 flex justify-center">
                    <button className="btn animate-pulse" onClick={() =>
                        signIn('google')
                    }>
                        Log in
                    </button>
                    {/*<button className="btn"  onClick={(e) => {*/}
                    {/*    signIn("google")*/}
                    {/*}}>*/}
                    {/*    Signup*/}
                    {/*</button>*/}
                </div>
                <div>
                    <div>
                        <div>OpenAL</div>
                        <div className="text-gray-500 text-sm">Terms of use | Privacy policy</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;