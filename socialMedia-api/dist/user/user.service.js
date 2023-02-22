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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async onModuleInit() {
        const userExists = await this.userRepository.findOne({ username: "user" });
        if (!userExists) {
            let user = new user_entity_1.User();
            user.username = "user";
            const saltOrRounds = 10;
            user.password = await bcrypt.hash("1234567890", saltOrRounds);
            user.email = "user@gmail.com";
            user.name = "Test Name";
            user.imageUrl =
                "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png";
            user = await this.userRepository.save(user);
            const initialTodos = [
                {
                    title: "delectus aut autem",
                    completed: false,
                },
                {
                    title: "quis ut nam facilis et officia qui",
                    completed: false,
                },
                {
                    title: "fugiat veniam minus",
                    completed: false,
                },
                {
                    title: "et porro tempora",
                    completed: true,
                },
                {
                    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    completed: false,
                },
                {
                    title: "qui ullam ratione quibusdam voluptatem quia omnis",
                    completed: false,
                },
                {
                    title: "illo expedita consequatur quia in",
                    completed: false,
                },
                {
                    title: "quo adipisci enim quam ut ab",
                    completed: true,
                },
                {
                    title: "molestiae perspiciatis ipsa",
                    completed: false,
                },
                {
                    title: "illo est ratione doloremque quia maiores aut",
                    completed: true,
                },
                {
                    title: "vero rerum temporibus dolor",
                    completed: true,
                },
                {
                    title: "ipsa repellendus fugit nisi",
                    completed: true,
                },
                {
                    title: "et doloremque nulla",
                    completed: false,
                },
                {
                    title: "repellendus sunt dolores architecto voluptatum",
                    completed: true,
                },
                {
                    title: "ab voluptatum amet voluptas",
                    completed: true,
                },
                {
                    title: "accusamus eos facilis sint et aut voluptatem",
                    completed: true,
                },
                {
                    title: "quo laboriosam deleniti aut qui",
                    completed: true,
                },
                {
                    title: "dolorum est consequatur ea mollitia in culpa",
                    completed: false,
                },
                {
                    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
                    completed: true,
                },
                {
                    title: "ullam nobis libero sapiente ad optio sint",
                    completed: true,
                },
                {
                    title: "suscipit repellat esse quibusdam voluptatem incidunt",
                    completed: false,
                },
                {
                    title: "distinctio vitae autem nihil ut molestias quo",
                    completed: true,
                },
                {
                    title: "et itaque necessitatibus maxime molestiae qui quas velit",
                    completed: false,
                },
                {
                    title: "adipisci non ad dicta qui amet quaerat doloribus ea",
                    completed: false,
                },
                {
                    title: "voluptas quo tenetur perspiciatis explicabo natus",
                    completed: true,
                },
                {
                    title: "aliquam aut quasi",
                    completed: true,
                },
                {
                    title: "veritatis pariatur delectus",
                    completed: true,
                },
                {
                    title: "nesciunt totam sit blanditiis sit",
                    completed: false,
                },
                {
                    title: "laborum aut in quam",
                    completed: false,
                },
                {
                    title: "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
                    completed: true,
                },
                {
                    title: "repudiandae totam in est sint facere fuga",
                    completed: false,
                },
                {
                    title: "earum doloribus ea doloremque quis",
                    completed: false,
                },
                {
                    title: "sint sit aut vero",
                    completed: false,
                },
                {
                    title: "porro aut necessitatibus eaque distinctio",
                    completed: false,
                },
                {
                    title: "repellendus veritatis molestias dicta incidunt",
                    completed: true,
                },
                {
                    title: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
                    completed: true,
                },
                {
                    title: "sunt cum tempora",
                    completed: false,
                },
                {
                    title: "totam quia non",
                    completed: false,
                },
                {
                    title: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
                    completed: false,
                },
                {
                    title: "totam atque quo nesciunt",
                    completed: true,
                },
                {
                    title: "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
                    completed: false,
                },
                {
                    title: "rerum perferendis error quia ut eveniet",
                    completed: false,
                },
                {
                    title: "tempore ut sint quis recusandae",
                    completed: true,
                },
                {
                    title: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
                    completed: true,
                },
                {
                    title: "velit soluta adipisci molestias reiciendis harum",
                    completed: false,
                },
                {
                    title: "vel voluptatem repellat nihil placeat corporis",
                    completed: false,
                },
                {
                    title: "nam qui rerum fugiat accusamus",
                    completed: false,
                },
                {
                    title: "sit reprehenderit omnis quia",
                    completed: false,
                },
                {
                    title: "ut necessitatibus aut maiores debitis officia blanditiis velit et",
                    completed: false,
                },
                {
                    title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
                    completed: true,
                },
                {
                    title: "distinctio exercitationem ab doloribus",
                    completed: false,
                },
                {
                    title: "nesciunt dolorum quis recusandae ad pariatur ratione",
                    completed: false,
                },
                {
                    title: "qui labore est occaecati recusandae aliquid quam",
                    completed: false,
                },
                {
                    title: "quis et est ut voluptate quam dolor",
                    completed: true,
                },
                {
                    title: "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
                    completed: true,
                },
                {
                    title: "deleniti ea temporibus enim",
                    completed: true,
                },
                {
                    title: "pariatur et magnam ea doloribus similique voluptatem rerum quia",
                    completed: false,
                },
                {
                    title: "est dicta totam qui explicabo doloribus qui dignissimos",
                    completed: false,
                },
                {
                    title: "perspiciatis velit id laborum placeat iusto et aliquam odio",
                    completed: false,
                },
                {
                    title: "et sequi qui architecto ut adipisci",
                    completed: true,
                },
                {
                    title: "odit optio omnis qui sunt",
                    completed: true,
                },
                {
                    title: "et placeat et tempore aspernatur sint numquam",
                    completed: false,
                },
                {
                    title: "doloremque aut dolores quidem fuga qui nulla",
                    completed: true,
                },
                {
                    title: "voluptas consequatur qui ut quia magnam nemo esse",
                    completed: false,
                },
                {
                    title: "fugiat pariatur ratione ut asperiores necessitatibus magni",
                    completed: false,
                },
                {
                    title: "rerum eum molestias autem voluptatum sit optio",
                    completed: false,
                },
                {
                    title: "quia voluptatibus voluptatem quos similique maiores repellat",
                    completed: false,
                },
                {
                    title: "aut id perspiciatis voluptatem iusto",
                    completed: false,
                },
                {
                    title: "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
                    completed: false,
                },
                {
                    title: "ut sequi accusantium et mollitia delectus sunt",
                    completed: false,
                },
                {
                    title: "aut velit saepe ullam",
                    completed: false,
                },
                {
                    title: "praesentium facilis facere quis harum voluptatibus voluptatem eum",
                    completed: false,
                },
                {
                    title: "sint amet quia totam corporis qui exercitationem commodi",
                    completed: true,
                },
                {
                    title: "expedita tempore nobis eveniet laborum maiores",
                    completed: false,
                },
                {
                    title: "occaecati adipisci est possimus totam",
                    completed: false,
                },
                {
                    title: "sequi dolorem sed",
                    completed: true,
                },
                {
                    title: "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
                    completed: false,
                },
                {
                    title: "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
                    completed: false,
                },
                {
                    title: "eum ipsa maxime ut",
                    completed: true,
                },
                {
                    title: "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
                    completed: true,
                },
                {
                    title: "suscipit qui totam",
                    completed: true,
                },
                {
                    title: "voluptates eum voluptas et dicta",
                    completed: false,
                },
                {
                    title: "quidem at rerum quis ex aut sit quam",
                    completed: true,
                },
                {
                    title: "sunt veritatis ut voluptate",
                    completed: false,
                },
                {
                    title: "et quia ad iste a",
                    completed: true,
                },
                {
                    title: "incidunt ut saepe autem",
                    completed: true,
                },
                {
                    title: "laudantium quae eligendi consequatur quia et vero autem",
                    completed: true,
                },
                {
                    title: "vitae aut excepturi laboriosam sint aliquam et et accusantium",
                    completed: false,
                },
                {
                    title: "sequi ut omnis et",
                    completed: true,
                },
                {
                    title: "molestiae nisi accusantium tenetur dolorem et",
                    completed: true,
                },
                {
                    title: "nulla quis consequatur saepe qui id expedita",
                    completed: true,
                },
                {
                    title: "in omnis laboriosam",
                    completed: true,
                },
                {
                    title: "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
                    completed: true,
                },
                {
                    title: "facilis modi saepe mollitia",
                    completed: false,
                },
                {
                    title: "vel nihil et molestiae iusto assumenda nemo quo ut",
                    completed: true,
                },
                {
                    title: "nobis suscipit ducimus enim asperiores voluptas",
                    completed: false,
                },
                {
                    title: "dolorum laboriosam eos qui iure aliquam",
                    completed: false,
                },
                {
                    title: "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
                    completed: true,
                },
                {
                    title: "neque voluptates ratione",
                    completed: false,
                },
                {
                    title: "excepturi a et neque qui expedita vel voluptate",
                    completed: false,
                },
                {
                    title: "explicabo enim cumque porro aperiam occaecati minima",
                    completed: false,
                },
                {
                    title: "sed ab consequatur",
                    completed: false,
                },
                {
                    title: "non sunt delectus illo nulla tenetur enim omnis",
                    completed: false,
                },
                {
                    title: "excepturi non laudantium quo",
                    completed: false,
                },
                {
                    title: "totam quia dolorem et illum repellat voluptas optio",
                    completed: true,
                },
                {
                    title: "ad illo quis voluptatem temporibus",
                    completed: true,
                },
                {
                    title: "praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt",
                    completed: false,
                },
                {
                    title: "a eos eaque nihil et exercitationem incidunt delectus",
                    completed: true,
                },
                {
                    title: "autem temporibus harum quisquam in culpa",
                    completed: true,
                },
                {
                    title: "aut aut ea corporis",
                    completed: true,
                },
                {
                    title: "magni accusantium labore et id quis provident",
                    completed: false,
                },
                {
                    title: "consectetur impedit quisquam qui deserunt non rerum consequuntur eius",
                    completed: false,
                },
                {
                    title: "quia atque aliquam sunt impedit voluptatum rerum assumenda nisi",
                    completed: false,
                },
                {
                    title: "cupiditate quos possimus corporis quisquam exercitationem beatae",
                    completed: false,
                },
                {
                    title: "sed et ea eum",
                    completed: false,
                },
                {
                    title: "ipsa dolores vel facilis ut",
                    completed: true,
                },
                {
                    title: "sequi quae est et qui qui eveniet asperiores",
                    completed: false,
                },
                {
                    title: "quia modi consequatur vero fugiat",
                    completed: false,
                },
                {
                    title: "corporis ducimus ea perspiciatis iste",
                    completed: false,
                },
                {
                    title: "dolorem laboriosam vel voluptas et aliquam quasi",
                    completed: false,
                },
                {
                    title: "inventore aut nihil minima laudantium hic qui omnis",
                    completed: true,
                },
                {
                    title: "provident aut nobis culpa",
                    completed: true,
                },
                {
                    title: "esse et quis iste est earum aut impedit",
                    completed: false,
                },
                {
                    title: "qui consectetur id",
                    completed: false,
                },
                {
                    title: "aut quasi autem iste tempore illum possimus",
                    completed: false,
                },
                {
                    title: "ut asperiores perspiciatis veniam ipsum rerum saepe",
                    completed: true,
                },
                {
                    title: "voluptatem libero consectetur rerum ut",
                    completed: true,
                },
                {
                    title: "eius omnis est qui voluptatem autem",
                    completed: false,
                },
                {
                    title: "rerum culpa quis harum",
                    completed: false,
                },
                {
                    title: "nulla aliquid eveniet harum laborum libero alias ut unde",
                    completed: true,
                },
                {
                    title: "qui ea incidunt quis",
                    completed: false,
                },
                {
                    title: "qui molestiae voluptatibus velit iure harum quisquam",
                    completed: true,
                },
                {
                    title: "et labore eos enim rerum consequatur sunt",
                    completed: true,
                },
                {
                    title: "molestiae doloribus et laborum quod ea",
                    completed: false,
                },
                {
                    title: "facere ipsa nam eum voluptates reiciendis vero qui",
                    completed: false,
                },
                {
                    title: "asperiores illo tempora fuga sed ut quasi adipisci",
                    completed: false,
                },
                {
                    title: "qui sit non",
                    completed: false,
                },
                {
                    title: "placeat minima consequatur rem qui ut",
                    completed: true,
                },
                {
                    title: "consequatur doloribus id possimus voluptas a voluptatem",
                    completed: false,
                },
                {
                    title: "aut consectetur in blanditiis deserunt quia sed laboriosam",
                    completed: true,
                },
                {
                    title: "explicabo consectetur debitis voluptates quas quae culpa rerum non",
                    completed: true,
                },
                {
                    title: "maiores accusantium architecto necessitatibus reiciendis ea aut",
                    completed: true,
                },
                {
                    title: "eum non recusandae cupiditate animi",
                    completed: false,
                },
                {
                    title: "ut eum exercitationem sint",
                    completed: false,
                },
                {
                    title: "beatae qui ullam incidunt voluptatem non nisi aliquam",
                    completed: false,
                },
                {
                    title: "molestiae suscipit ratione nihil odio libero impedit vero totam",
                    completed: true,
                },
                {
                    title: "eum itaque quod reprehenderit et facilis dolor autem ut",
                    completed: true,
                },
                {
                    title: "esse quas et quo quasi exercitationem",
                    completed: false,
                },
                {
                    title: "animi voluptas quod perferendis est",
                    completed: false,
                },
                {
                    title: "eos amet tempore laudantium fugit a",
                    completed: false,
                },
                {
                    title: "accusamus adipisci dicta qui quo ea explicabo sed vero",
                    completed: true,
                },
                {
                    title: "odit eligendi recusandae doloremque cumque non",
                    completed: false,
                },
                {
                    title: "ea aperiam consequatur qui repellat eos",
                    completed: false,
                },
                {
                    title: "rerum non ex sapiente",
                    completed: true,
                },
                {
                    title: "voluptatem nobis consequatur et assumenda magnam",
                    completed: true,
                },
                {
                    title: "nam quia quia nulla repellat assumenda quibusdam sit nobis",
                    completed: true,
                },
                {
                    title: "dolorem veniam quisquam deserunt repellendus",
                    completed: true,
                },
                {
                    title: "debitis vitae delectus et harum accusamus aut deleniti a",
                    completed: true,
                },
                {
                    title: "debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis",
                    completed: true,
                },
                {
                    title: "et praesentium aliquam est",
                    completed: false,
                },
                {
                    title: "ex hic consequuntur earum omnis alias ut occaecati culpa",
                    completed: true,
                },
                {
                    title: "omnis laboriosam molestias animi sunt dolore",
                    completed: true,
                },
                {
                    title: "natus corrupti maxime laudantium et voluptatem laboriosam odit",
                    completed: false,
                },
                {
                    title: "reprehenderit quos aut aut consequatur est sed",
                    completed: false,
                },
                {
                    title: "fugiat perferendis sed aut quidem",
                    completed: false,
                },
                {
                    title: "quos quo possimus suscipit minima ut",
                    completed: false,
                },
                {
                    title: "et quis minus quo a asperiores molestiae",
                    completed: false,
                },
                {
                    title: "recusandae quia qui sunt libero",
                    completed: false,
                },
                {
                    title: "ea odio perferendis officiis",
                    completed: true,
                },
                {
                    title: "quisquam aliquam quia doloribus aut",
                    completed: false,
                },
                {
                    title: "fugiat aut voluptatibus corrupti deleniti velit iste odio",
                    completed: true,
                },
                {
                    title: "et provident amet rerum consectetur et voluptatum",
                    completed: false,
                },
                {
                    title: "harum ad aperiam quis",
                    completed: false,
                },
                {
                    title: "similique aut quo",
                    completed: false,
                },
                {
                    title: "laudantium eius officia perferendis provident perspiciatis asperiores",
                    completed: true,
                },
                {
                    title: "magni soluta corrupti ut maiores rem quidem",
                    completed: false,
                },
                {
                    title: "et placeat temporibus voluptas est tempora quos quibusdam",
                    completed: false,
                },
                {
                    title: "nesciunt itaque commodi tempore",
                    completed: true,
                },
                {
                    title: "omnis consequuntur cupiditate impedit itaque ipsam quo",
                    completed: true,
                },
                {
                    title: "debitis nisi et dolorem repellat et",
                    completed: true,
                },
                {
                    title: "ut cupiditate sequi aliquam fuga maiores",
                    completed: false,
                },
                {
                    title: "inventore saepe cumque et aut illum enim",
                    completed: true,
                },
                {
                    title: "omnis nulla eum aliquam distinctio",
                    completed: true,
                },
                {
                    title: "molestias modi perferendis perspiciatis",
                    completed: false,
                },
                {
                    title: "voluptates dignissimos sed doloribus animi quaerat aut",
                    completed: false,
                },
                {
                    title: "explicabo odio est et",
                    completed: false,
                },
                {
                    title: "consequuntur animi possimus",
                    completed: false,
                },
                {
                    title: "vel non beatae est",
                    completed: true,
                },
                {
                    title: "culpa eius et voluptatem et",
                    completed: true,
                },
                {
                    title: "accusamus sint iusto et voluptatem exercitationem",
                    completed: true,
                },
                {
                    title: "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
                    completed: true,
                },
                {
                    title: "ut quas possimus exercitationem sint voluptates",
                    completed: false,
                },
                {
                    title: "rerum debitis voluptatem qui eveniet tempora distinctio a",
                    completed: true,
                },
                {
                    title: "sed ut vero sit molestiae",
                    completed: false,
                },
                {
                    title: "rerum ex veniam mollitia voluptatibus pariatur",
                    completed: true,
                },
                {
                    title: "consequuntur aut ut fugit similique",
                    completed: true,
                },
                {
                    title: "dignissimos quo nobis earum saepe",
                    completed: true,
                },
                {
                    title: "quis eius est sint explicabo",
                    completed: true,
                },
                {
                    title: "numquam repellendus a magnam",
                    completed: true,
                },
                {
                    title: "ipsam aperiam voluptates qui",
                    completed: false,
                },
            ].map((todo) => (Object.assign(Object.assign({}, todo), { userId: user.id })));
        }
    }
    async create(createUserDto) {
        let user = await this.userRepository.findOne({
            where: { username: createUserDto.username },
        });
        if (user) {
            throw new common_1.HttpException("Username already exists.", common_1.HttpStatus.BAD_REQUEST);
        }
        user = new user_entity_1.User();
        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.name = createUserDto.name;
        const saltOrRounds = 10;
        user.password = await bcrypt.hash(createUserDto.password, saltOrRounds);
        user.imageUrl =
            "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png";
        user = await this.userRepository.save(user);
        const returnValue = new user_entity_1.User();
        returnValue.id = user.id;
        returnValue.username = user.username;
        return returnValue;
    }
    async findOne(username) {
        return this.userRepository.findOne({ where: { username } });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("USER_REPOSITORY")),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map