import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './entity/wallet.entity';
import { CreateWalletDto, UpdateWalletDto, DeleteWalletDto } from './dto';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {}

  async create(createWalletDto: CreateWalletDto): Promise<Wallet> {
    const wallet = this.walletRepository.create(createWalletDto);
    return await this.walletRepository.save(wallet);
  }

  async findAll(): Promise<Wallet[]> {
    return await this.walletRepository.find();
  }

  async findOne(id: number): Promise<Wallet> {
    const wallet = await this.walletRepository.findOne({ where: { id } });
    if (!wallet) {
      throw new NotFoundException(`Wallet with ID ${id} not found`);
    }
    return wallet;
  }

  async update(id: number, updateWalletDto: UpdateWalletDto): Promise<Wallet> {
    await this.findOne(id); // Vérifie si le portefeuille existe
    await this.walletRepository.update(id, updateWalletDto);
    return await this.findOne(id); // Renvoie le portefeuille mis à jour
  }

  async remove(deleteWalletDto: DeleteWalletDto): Promise<void> {
    await this.findOne(deleteWalletDto.id); // Vérifie si le portefeuille existe
    await this.walletRepository.delete(deleteWalletDto);
  }
}
