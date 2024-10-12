import {Hono} from 'hono';
import {handle} from 'hono/vercel';
 
 
import  accounts  from "./accounts"
export const runtime ='edge';

const app = new Hono().basePath('/api')
// app.route("/accounts",accounts)
const routes = app
.route("/accounts",accounts);
export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
// app.get('/hello', (c)=>{
//     // clerkMiddleware(),
//     // helloController(),
//     // (c)=>{
    
//     //     const auth = getAuth(c);
//     //     if(!auth?.userId){
//     //         return c.json({
//     //             error:"Unauthorized!!"
//     //         })
//     //     }
//     return c.json({
//             message:'Hello NextJs',})
//     })
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
// app.route('/authors',authors);
// app.route('/books',books);

