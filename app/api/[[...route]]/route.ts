import {Hono} from 'hono';
import {handle} from 'hono/vercel';
 
export const runtime ='edge';
import  accounts  from "./accounts"
import { HTTPException } from 'hono/http-exception';


const app = new Hono().basePath('/api')
// app.route("/accounts",accounts)
app.onError((err,c)=>{
    if(err instanceof HTTPException){
        return err.getResponse();
    }
    return c.json({error:"Internal Server Error"},500);
}) 



const routes = app
.route("/accounts",accounts);
export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
 