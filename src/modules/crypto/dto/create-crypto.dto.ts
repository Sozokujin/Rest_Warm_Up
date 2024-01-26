import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateCryptoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  symbol: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  currentPrice: number;
}
