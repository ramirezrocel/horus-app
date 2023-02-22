import { User } from "../../user/entities/user.entity";
export declare class Post {
    id: number;
    userId: number;
    value: string;
    postImageURL: string;
    user: User;
}
