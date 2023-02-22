import { Connection } from 'typeorm';
import { Post } from '../entities/post.entity';
export declare const postProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Post>;
    inject: string[];
}[];
