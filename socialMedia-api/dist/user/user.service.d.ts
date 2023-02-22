import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    onModuleInit(): Promise<void>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(username: string): Promise<User>;
}
