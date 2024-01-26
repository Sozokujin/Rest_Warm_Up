import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateCryptoDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  symbol?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  currentPrice?: number;
}
