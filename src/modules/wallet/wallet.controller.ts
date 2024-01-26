import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto, UpdateWalletDto, DeleteWalletDto } from './dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  async create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletService.create(createWalletDto);
  }

  @Get()
  async findAll() {
    return this.walletService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.walletService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWalletDto: UpdateWalletDto,
  ) {
    return this.walletService.update(+id, updateWalletDto);
  }

  @Delete(':id')
  async remove(@Param() deleteWalletDto: DeleteWalletDto) {
    return this.walletService.remove(deleteWalletDto);
  }
}
