import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(gender: string): Promise<User> {
    const user = this.userRepository.create({ gender });
    return this.userRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}