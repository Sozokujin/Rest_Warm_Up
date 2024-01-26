import { IsInt } from 'class-validator';

export class DeleteCryptoDto {
  @IsInt()
  id: number;
}
