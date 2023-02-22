import { Connection } from "typeorm";
import { Comment } from "../entities/comment.entity";
export declare const commentProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Comment>;
    inject: string[];
}[];
