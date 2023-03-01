import { Connection } from "typeorm";
import { User } from "../../user/entities/user.entity";
export declare const profileProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<User>;
    inject: string[];
}[];
