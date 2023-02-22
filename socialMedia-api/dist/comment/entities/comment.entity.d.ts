import { Post } from "../../post/entities/post.entity";
export declare class Comment {
    id: number;
    userId: number;
    value: string;
    posts: Post[];
}
