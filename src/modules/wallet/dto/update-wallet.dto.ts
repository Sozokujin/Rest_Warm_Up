import { IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateWalletDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  balance?: number;
}
