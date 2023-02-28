import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Post } from "src/post/entities/post.entity";

//fetch-user/me.posts
@Injectable()
export class UserService {
  private _currentUserId: number = 0;

  public set currentUserId(user: number) {
    this._currentUserId = user;
  }
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>,

    @Inject("POST_REPOSITORY")
    private postRepository: Repository<Post>
  ) {}

  async onModuleInit() {
    const userExists = await this.userRepository.findOne({
      username: "suicideRanker",
    });
    if (!userExists) {
      let user = new User();
      user.username = "suicideRanker";

      const saltOrRounds = 10;
      user.password = await bcrypt.hash("@Password1234", saltOrRounds);
      user.email = "roro09@gmail.com";
      user.name = "Roro Ramirez";
      user.imageUrl =
        "https://th.bing.com/th/id/OIP.yUdYK1NQT2lPKwWJ0efoZQHaHb?pid=ImgDet&w=193&h=194&c=7&dpr=1.5";
      user = await this.userRepository.save(user);
      const initialPosts = [
        {
          value: "Let us play together! Just comment your username/Id below.",
          postImageURL:
            "https://i0.wp.com/abuomar.ae/wp-content/uploads/Call-of-Duty-WWII-4.jpg?w=1280&ssl=1",
        },
        {
          value: "I'm the MVP. What a wild battle!",
          postImageURL: "",
        },
      ].map((post) => ({ ...post, userId: user.id, username: user.username }));
      await this.postRepository.save(initialPosts);
    }
    const user_1_Exists = await this.userRepository.findOne({
      username: "Para_Kay_Ash",
    });
    if (!user_1_Exists) {
      let user = new User();
      user.username = "Para_Kay_Ash";

      const saltOrRounds = 10;
      user.password = await bcrypt.hash("@Password1234", saltOrRounds);
      user.email = "ash@gmail.com";
      user.name = "Ash Gomez";
      user.imageUrl =
        "https://yt3.ggpht.com/a/AATXAJzlDVUi1O7wZ4tURR6dAW9MSRJsncR554lJeg=s900-c-k-c0xffffffff-no-rj-mo";
      user = await this.userRepository.save(user);
      const initialPosts = [
        {
          value: "Ash: post ko to.",
          postImageURL: "https://i.ytimg.com/vi/jqSdBA3YLwo/maxresdefault.jpg",
        },
        {
          value: "You can edit this at `user.services.ts` ",
          postImageURL: "",
        },
      ].map((post) => ({ ...post, userId: user.id, username: user.username }));
      await this.postRepository.save(initialPosts);
    }

    const user_2_Exists = await this.userRepository.findOne({
      username: "Para_Kay_JC",
    });
    if (!user_2_Exists) {
      let user = new User();
      user.username = "Para_Kay_JC";

      const saltOrRounds = 10;
      user.password = await bcrypt.hash("@Password1234", saltOrRounds);
      user.email = "jc@gmail.com";
      user.name = "JC Nuestro";
      user.imageUrl =
        "https://yt3.ggpht.com/a/AATXAJysoEt4W8TQKne8iWCnNTWuKHzoKmnvA6ZEKA=s900-c-k-c0xffffffff-no-rj-mo";
      user = await this.userRepository.save(user);
      const initialPosts = [
        {
          value: "JC: Hey hey...post ko to.",
          postImageURL: "https://i.ytimg.com/vi/iMUc1C6eYng/maxresdefault.jpg",
        },
        {
          value: "You can edit this at `user.services.ts` ",
          postImageURL: "",
        },
      ].map((post) => ({ ...post, userId: user.id, username: user.username }));
      await this.postRepository.save(initialPosts);
    }
  }

  async create(createUserDto: CreateUserDto) {
    let user = await this.userRepository.findOne({
      where: { username: createUserDto.username } || {
        email: createUserDto.email,
      },
    });

    // yyyyyyy

    if (user) {
      throw new HttpException(
        "Username already exists.",
        HttpStatus.BAD_REQUEST
      );
    }

    user = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;

    user.name = createUserDto.name;

    const saltOrRounds = 10;
    user.password = await bcrypt.hash(createUserDto.password, saltOrRounds);

    if (createUserDto.imageUrl == "") {
      user.imageUrl =
        "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png";
    } else {
      user.imageUrl = createUserDto.imageUrl;
    }

    user = await this.userRepository.save(user);

    const returnValue = new User();

    returnValue.id = user.id;
    returnValue.username = user.username;

    return returnValue;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      // where: { userId: this._currentUserId },
      order: {
        id: "DESC",
      },
    });
  }

  async findOne(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  async findMe() {
    // where: { userId: this._currentUserId },
    return this.userRepository.findOne({ where: { id: this._currentUserId } });
  }

  async findUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }
}
