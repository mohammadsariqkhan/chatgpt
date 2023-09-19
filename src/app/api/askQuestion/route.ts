import {NextRequest, NextResponse} from "next/server";
import query from "@/lib/queryApi";
import admin from "firebase-admin";
import {adminDb} from "../../../../firebaseAdmin";


type Data = {
    answer: string
}

export async function POST(req: NextRequest) {
    // @ts-ignore
    const data = await req.json()
    const {prompt,chatId,session,model} = data
    if (!prompt) {
        // @ts-ignore
        console.log('Please provide a prompt')
        return NextResponse.json({answer: 'Please provide a prompt'})
    }
    if (!chatId) {
        // @ts-ignore
        console.log('Please provide a valid chat ID')
        return NextResponse.json({answer: 'Please provide a valid chat ID'})
    }
//     chatGPT Query

    const responese = await query(prompt, chatId, model)
    console.log(responese)
    console.log("hello2")
    const message: Message = {
        text: responese || "ChatGPT was unable to find an answer for that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: 'https://links.papareact.com/89k',
        },
    }
    await adminDb.collection("users").doc(session?.user?.email).collection('chats').doc(chatId).collection("messages").add(message)
    return NextResponse.json({answer: message.text})

}