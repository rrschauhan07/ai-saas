import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN // This is also the default, can be omitted
  });

export async function POST(
    req: Request
    ) {
        try{
            const {userId} = auth();
            const body = await req.json();
            const {prompt} = body;

            if(!userId){
                return new NextResponse("Unauthorized", {status: 401});
            }

           

            if(!prompt){
                return new NextResponse("prompt are required", {status: 400});
            }

            const input = {
                // fps: 24,
                // width: 1024,
                // height: 576,
                // prompt: "Clown fish swimming in a coral reef, beautiful, 8k, perfect, award winning, national geographic",
                // guidance_scale: 17.5,
                // negative_prompt: "very blue, dust, noisy, washed out, ugly, distorted, broken"
                prompt
            };
            
            const response = await replicate.run("anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351", { input });
            // console.log(output)
        return NextResponse.json(response);

        } catch (error){
            console.log("[MUSIC_ERROR]", error);
            return new NextResponse("Internal error", {status: 500}); 
        }
    
}