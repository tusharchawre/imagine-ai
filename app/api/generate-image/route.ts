


export async function POST(request: Request) {
    const {prompt} = await request.json()

    return Response.json({
        prompt
    })
}
