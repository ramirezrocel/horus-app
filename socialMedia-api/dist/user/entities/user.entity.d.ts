import { Post } from "../../post/entities/post.entity";
export declare class User {
    id: number;
    username: string;
    name: string;
    email: string;
    password: string;
    imageUrl: string;
    posts: Post[];
}
