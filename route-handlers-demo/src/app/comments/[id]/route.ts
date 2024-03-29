import { comments, } from "../data";
export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const comment = comments.find(data => data.id === parseInt(params.id));
    return new Response(JSON.stringify(comment));
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    comments[index].text = text;
    return new Response(JSON.stringify(comments[index]));
}
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    const deleteComment = comments[index];
    comments.splice(index, 1);
    return new Response(JSON.stringify(deleteComment));
}