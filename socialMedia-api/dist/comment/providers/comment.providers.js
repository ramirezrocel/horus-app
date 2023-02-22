"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentProviders = void 0;
const comment_entity_1 = require("../entities/comment.entity");
exports.commentProviders = [
    {
        provide: "COMMENT_REPOSITORY",
        useFactory: (connection) => connection.getRepository(comment_entity_1.Comment),
        inject: ["DATABASE_CONNECTION"],
    },
];
//# sourceMappingURL=comment.providers.js.map