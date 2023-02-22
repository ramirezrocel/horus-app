"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
let PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
        this._currentUserId = 0;
    }
    set currentUserId(user) {
        this._currentUserId = user;
    }
    async create(createPostDto) {
        const post = new post_entity_1.Post();
        post.value = createPostDto.value;
        post.postImageURL = createPostDto.postImageURL;
        post.userId = this._currentUserId;
        return this.postRepository.save(post);
    }
    async findAllAdmin() {
        return this.postRepository.find({
            order: {
                id: "DESC",
            },
        });
    }
    async findAll() {
        return this.postRepository.find({
            where: { userId: this._currentUserId },
            order: {
                id: "DESC",
            },
        });
    }
    async findOne(id) {
        return this.postRepository.findOne({ id, userId: this._currentUserId });
    }
    async update(id, updatePostDto) {
        var _a;
        let post = await this.postRepository.findOne({
            id,
            userId: this._currentUserId,
        });
        if (!post) {
            throw new common_1.HttpException("Resource not found.", common_1.HttpStatus.NOT_FOUND);
        }
        if (updatePostDto.title === "") {
            throw new common_1.HttpException({ message: ["title cannot be empty"] }, common_1.HttpStatus.BAD_REQUEST);
        }
        post.value = (_a = updatePostDto.title) !== null && _a !== void 0 ? _a : post.value;
        await this.postRepository.save(post);
        return post;
    }
    async remove(id) {
        const post = await this.postRepository.findOne({
            id,
            userId: this._currentUserId,
        });
        if (!post) {
            throw new common_1.HttpException("Resource not found.", common_1.HttpStatus.NOT_FOUND);
        }
        await this.postRepository.remove(post);
        return Object.assign(Object.assign({}, post), { id });
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("POST_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map