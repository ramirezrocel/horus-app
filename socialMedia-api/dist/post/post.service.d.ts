import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";
export declare class PostService {
    private postRepository;
    private _currentUserId;
    set currentUserId(user: number);
    constructor(postRepository: Repository<Post>);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAllAdmin(): Promise<Post[]>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<Post>;
    remove(id: number): Promise<{
        id: number;
        userId: number;
        value: string;
        postImageURL: string;
        user: import("../user/entities/user.entity").User;
    }>;
}
