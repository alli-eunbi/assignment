import { EntityRepository, Repository, getRepository } from "typeorm";
import { Resource } from "./entities/Resource.entity";

// @EntityRepository(Resource)
// class ResourceRepository extends Repository<Resource> {
//   async createDocument(
//     name: string,
//     type: string
//   ): Promise<string> {
//     const resource = await this.createQueryBuilder()
//       .insert()
//       .into(Resource)
//       .values({ name, type })
//       .execute();
//     return resource.identifiers.;
//   }

//   async getUserByEmail(email: string): Promise<User | undefined> {
//     const user = await this.createQueryBuilder("user")
//       .select(["user.id", "user.nickname", "user.password"])
//       .where("user.email = :email", { email })
//       .getOne();
//     return user;
//   }
// }

// export default UserRepository;

class ResourceService {
  async register(name: string, type: string) {
    const resource = new Resource();
    const resourceRepository = getRepository(Resource);
    console.log("d");
    resource.name = name;
    resource.type = type;
    await resourceRepository.save(resource);
  }
}

export default ResourceService;
