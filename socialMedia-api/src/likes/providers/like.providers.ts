import { Connection } from "typeorm";
import { Like } from "../entities/like.entity";

export const likeProviders = [
  {
    provide: "LIKE_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(Like),
    inject: ["DATABASE_CONNECTION"],
  },
];
