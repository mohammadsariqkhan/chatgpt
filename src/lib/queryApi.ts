import openai from "@/lib/chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {

    // @ts-ignore
    // const res = await openai.completions.create({
    //     model,
    //     prompt,
    //     temperature: 0.9,
    //     top_p: 1,
    //     max_tokens: 1000,
    //     frequency_penalty: 0,
    // })
    try {
        const completion = await openai.completions.create({
            model,
            prompt,
            temperature:0.9,
            top_p:1,
            max_tokens:1000,
            frequency_penalty:0
        })
        const rep = completion.choices[0].text
        return  rep
    } catch (err) {
        console.log(err)
    }

}
export default query