import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/entities/user.entity';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';
import { Wallet } from './modules/wallet/entity/wallet.entity';
import { Crypto } from './modules/crypto/entity/crypto.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Crypto, Wallet]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class AppModule {}
