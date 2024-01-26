import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto, DeleteUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findOne(id); // Vérifie si l'utilisateur existe
    await this.userRepository.update(id, updateUserDto);
    return await this.findOne(id); // Renvoie l'utilisateur mis à jour
  }

  async remove(deleteUserDto: DeleteUserDto): Promise<void> {
    await this.findOne(deleteUserDto.id); // Vérifie si l'utilisateur existe
    await this.userRepository.delete(deleteUserDto);
  }
}
