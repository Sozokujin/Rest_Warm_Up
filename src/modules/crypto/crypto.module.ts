import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crypto } from './entity/crypto.entity';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Crypto])],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}
