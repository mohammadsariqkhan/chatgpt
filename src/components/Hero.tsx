import {BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline'

export default function Hero() {
    return (
        <div className="text-white flex flex-col items-center h-screen justify-center px-2">
            <h1 className="text-5xl font-bold mb-20 text-gray-600/70">ChatGPT</h1>
            <div className="flex space-x-2 text-center">
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">

                        {/*Icon*/}
                        <SunIcon className="h-8 w-8 text-gray-500"/>
                        <h2>Example</h2>
                    </div>
                    <div className="space-y-2">
                        <p className='infoText'>Explain Somthing to me</p>
                        <p className='infoText'>rendom text</p>
                        <p className='infoText'>hwllo</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/*Icon*/}
                        <BoltIcon className="h-8 w-8 text-gray-500"/>
                        <h2>Capablities</h2>
                    </div>
                    <div className="space-y-2">
                        <p className='infoText'>Explain Somthing to me</p>
                        <p className='infoText'>rendom text</p>
                        <p className='infoText'>hwllo</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/*Icon*/}
                        <ExclamationTriangleIcon  className="h-8 w-8 text-gray-500"/>
                        <h2>Limitations</h2>
                    </div>
                    <div className="space-y-2">
                        <p className='infoText'>Explain Somthing to me</p>
                        <p className='infoText'>rendom text</p>
                        <p className='infoText'>hwllo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}