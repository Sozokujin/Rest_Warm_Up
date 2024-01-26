import { IsInt } from 'class-validator';

export class DeleteWalletDto {
  @IsInt()
  id: number;
}
