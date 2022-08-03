export class Post {
    constructor(
    public _id: any,
    public head: string,
    public subhead: string,
    public body: string,
    public image: any,
    public date:any,
    public category:string,
    public imagePath: string,
    public authorname:string
    ){}
}