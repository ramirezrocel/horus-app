import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common/decorators";
import { Repository } from "typeorm";
import { CreateLikeDto } from "./dto/create-like.dto";
import { UpdateLikeDto } from "./dto/update-like.dto";
import { Like } from "./entities/like.entity";

@Injectable()
export class LikesService {
  private _currentUserId: number = 0;

  public set currentUserId(user: number) {
    this._currentUserId = user;
  }
  constructor(
    @Inject("LIKE_REPOSITORY")
    private likeRepository: Repository<Like>
  ) {}

  async onModuleInit() {
    const like = await this.likeRepository.findOne({
      id: 1,
    });
    if (!like) {
      let like = new Like();
      like.userId = 1;
      like.postId = 6;
      like.isLike = true;
      like = await this.likeRepository.save(like);
    }
  }

  async create(createLikeDto: CreateLikeDto) {
    const like = new Like();
    like.postId = createLikeDto.postId;
    like.userId = this._currentUserId;
    like.isLike = true;

    return this.likeRepository.save(like);
  }

  async findAllByPost(postId: number) {
    return this.likeRepository.find({
      where: { postId },
    });
  }

  async isliked(postId: number) {
    const exist = this.likeRepository.find({
      where: { postId, userId: this._currentUserId },
    });

    return exist != undefined ? exist : false;
  }

  findAll() {
    return `This action returns all likes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  async remove(id: number) {
    const like = await this.likeRepository.findOne({
      postId: id,
    });
    if (!like) {
      throw new HttpException("Resource not found.", HttpStatus.NOT_FOUND);
    }

    await this.likeRepository.remove(like);

    return { ...like, id };
  }
}
