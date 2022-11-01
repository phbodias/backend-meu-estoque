import * as userRepository from "../repositories/userRepository";

const findAll = async () => {
  const users = (await userRepository.findAll()).map((element) => {
    return { name: element.name, role: element.Role.name };
  });
};
