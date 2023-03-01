import { UserService } from "../user/user.service";
import { PostService } from "../post/post.service";
export declare class ProfilesController {
    private readonly postService;
    private readonly userService;
    constructor(postService: PostService, userService: UserService);
    findAll(): void;
    findUserDetails(username: string): Promise<import("../user/entities/user.entity").User>;
    findUserPost(username: string): Promise<import("../post/entities/post.entity").Post[]>;
}
