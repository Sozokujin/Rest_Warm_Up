import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crypto } from './entity/crypto.entity';
import { CreateCryptoDto, UpdateCryptoDto, DeleteCryptoDto } from './dto';

@Injectable()
export class CryptoService {
  constructor(
    @InjectRepository(Crypto)
    private readonly cryptoRepository: Repository<Crypto>,
  ) {}

  async create(createCryptoDto: CreateCryptoDto): Promise<Crypto> {
    const crypto = this.cryptoRepository.create(createCryptoDto);
    return await this.cryptoRepository.save(crypto);
  }

  async findAll(): Promise<Crypto[]> {
    return await this.cryptoRepository.find();
  }

  async findOne(id: number): Promise<Crypto> {
    const crypto = await this.cryptoRepository.findOne({ where: { id } });
    if (!crypto) {
      throw new NotFoundException(`Crypto with ID ${id} not found`);
    }
    return crypto;
  }

  async update(id: number, updateCryptoDto: UpdateCryptoDto): Promise<Crypto> {
    await this.findOne(id); // Vérifie si la cryptomonnaie existe
    await this.cryptoRepository.update(id, updateCryptoDto);
    return await this.findOne(id); // Renvoie la cryptomonnaie mise à jour
  }

  async remove(deleteCryptoDto: DeleteCryptoDto): Promise<void> {
    await this.findOne(deleteCryptoDto.id); // Vérifie si la cryptomonnaie existe
    await this.cryptoRepository.delete(deleteCryptoDto.id);
  }
}
