import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateWalletDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  balance: number;

  @IsNotEmpty()
  userId: number;
}
