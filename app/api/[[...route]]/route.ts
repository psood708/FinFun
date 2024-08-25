import {Hono} from 'hono';
import {handle} from 'hono/vercel';
import {z} from "zod";
import { zValidator } from '@hono/zod-validator';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { error } from 'console';


export const runtime ='edge';

const app = new Hono().basePath('/api')

app

.get('/hello',
    clerkMiddleware(),
    (c)=>{
    
    const auth = getAuth(c);
    if(!auth?.userId){
        return c.json({
            error:"Unauthorized!!"
        })
    }



    return c.json({
        message:'Hello NextJs',
    })
})
// bellow is the best wasy to do the api ( practice )
// .get(
    
    
//     "/hello/:test",
//     //we can add any middleware here and any amounts
//     zValidator("param",z.object({
//         test: z.number(), 
//     })),
    
//     (c)=>{

//     const test = c.req.param("test");
//     return c.json({
//         message:"Hello World",
//         test:test,
//     })
// })
// .post(
//     "/create/:postId",
//     zValidator("json",z.object({
//         name:z.string(),
//         userId:z.number(),
//     })),
     
//     zValidator("param",z.object({
//         postId:z.number(),
//     })),      
//     (c)=>{
//         const {name,userId} = c.req.valid("json");
//         const {postId}= c.req.valid("param");
//         return c.json({});
//     })


export const GET = handle(app);
export const POST = handle(app);