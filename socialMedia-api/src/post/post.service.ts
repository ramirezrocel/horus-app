import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostService {
  private _currentUserId: number = 0;
  private _currentUsername: string = "";

  public set currentUserId(user: number) {
    this._currentUserId = user;
  }

  public set currentUsername(user: string) {
    this._currentUsername = user;
  }

  constructor(
    @Inject("COMMENT_REPOSITORY")
    private commentRepository: Repository<Comment>,

    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>,

    @Inject("POST_REPOSITORY")
    private postRepository: Repository<Post>
  ) {}

  async create(createPostDto: CreatePostDto) {
    const post = new Post();
    post.value = createPostDto.value;
    post.postImageURL = createPostDto.postImageURL;
    post.userId = this._currentUserId;
    post.username = createPostDto.username;

    return this.postRepository.save(post);
  }

  async findAllAdmin(): Promise<Post[]> {
    return this.postRepository.find({
      order: {
        id: "DESC",
      },
    });
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find({
      order: {
        id: "DESC",
      },
    });
  }

  async findOne(id: number) {
    return this.postRepository.findOne({ id });
  }

  async findUserPost(username: string) {
    return this.postRepository.find({
      where: { username },
      order: {
        id: "DESC",
      },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    let post = await this.postRepository.findOne({
      id,
      userId: this._currentUserId,
    });
    if (!post) {
      throw new HttpException("Resource not found.", HttpStatus.NOT_FOUND);
    }

    post.value = updatePostDto.value ?? post.value;
    post.postImageURL = updatePostDto.postImageURL ?? post.postImageURL;

    await this.postRepository.save(post);

    return post;
  }

  async remove(id: number) {
    const post = await this.postRepository.findOne({
      id,
    });
    if (!post) {
      throw new HttpException("Resource not found.", HttpStatus.NOT_FOUND);
    }

    await this.postRepository.remove(post);

    return { ...post, id };
  }
}
