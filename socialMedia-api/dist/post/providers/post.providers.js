"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProviders = void 0;
const post_entity_1 = require("../entities/post.entity");
exports.postProviders = [
    {
        provide: "POST_REPOSITORY",
        useFactory: (connection) => connection.getRepository(post_entity_1.Post),
        inject: ["DATABASE_CONNECTION"],
    },
];
//# sourceMappingURL=post.providers.js.map