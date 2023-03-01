"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileProviders = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
exports.profileProviders = [
    {
        provide: "USER_REPOSITORY",
        useFactory: (connection) => connection.getRepository(user_entity_1.User),
        inject: ["DATABASE_CONNECTION"],
    },
];
//# sourceMappingURL=profile.providers.js.map