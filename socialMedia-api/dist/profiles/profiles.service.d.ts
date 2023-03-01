import { Repository } from "typeorm";
import { Post } from "../post/entities/post.entity";
export declare class ProfilesService {
    private postRepository;
    private _currentUserId;
    set currentUserId(user: number);
    constructor(postRepository: Repository<Post>);
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    findUserPost(username: string): Promise<Post>;
}
