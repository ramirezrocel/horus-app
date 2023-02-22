import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto, req: any): Promise<import("./entities/post.entity").Post>;
    findAll(req: any): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string, req: any): Promise<import("./entities/post.entity").Post>;
    update(id: string, updatePostDto: UpdatePostDto, req: any): Promise<import("./entities/post.entity").Post>;
    remove(id: string, req: any): Promise<{
        id: number;
        userId: number;
        value: string;
        postImageURL: string;
        user: import("../user/entities/user.entity").User;
    }>;
}
