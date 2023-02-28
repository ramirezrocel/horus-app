import { Connection } from "typeorm";
import { User } from "../../user/entities/user.entity";

export const profileProviders = [
  {
    provide: "USER_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ["DATABASE_CONNECTION"],
  },
];
