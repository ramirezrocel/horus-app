import { User } from '../../user/entities/user.entity';
export declare class Post {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
    user: User;
}
