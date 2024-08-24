import { NextRequest, NextResponse } from "next/server"

export const GET = (
request : NextRequest,
{params}: {params: {testId:string}},
) =>{
    
    return NextResponse.json({
        message: "Hello World",
        testId: params.testId, 
    });
}


// in video # 48:49
// in clerk mail of pdpu