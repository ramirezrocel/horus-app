"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProfilesModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesModule = void 0;
const common_1 = require("@nestjs/common");
const profiles_service_1 = require("./profiles.service");
const profiles_controller_1 = require("./profiles.controller");
const post_service_1 = require("../post/post.service");
const database_module_1 = require("../database/database.module");
const post_providers_1 = require("../post/providers/post.providers");
const comment_providers_1 = require("../comment/providers/comment.providers");
const user_providers_1 = require("../user/providers/user.providers");
const profile_providers_1 = require("./providers/profile.providers");
const user_service_1 = require("../user/user.service");
let ProfilesModule = ProfilesModule_1 = class ProfilesModule {
};
ProfilesModule = ProfilesModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [profiles_controller_1.ProfilesController],
        providers: [
            ...post_providers_1.postProviders,
            ...comment_providers_1.commentProviders,
            ...user_providers_1.userProviders,
            ...profile_providers_1.profileProviders,
            post_service_1.PostService,
            profiles_service_1.ProfilesService,
            user_service_1.UserService,
        ],
        exports: [ProfilesModule_1, user_service_1.UserService],
    })
], ProfilesModule);
exports.ProfilesModule = ProfilesModule;
//# sourceMappingURL=profiles.module.js.map