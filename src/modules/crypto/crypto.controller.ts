import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CreateCryptoDto, UpdateCryptoDto, DeleteCryptoDto } from './dto';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Post()
  async create(@Body() createCryptoDto: CreateCryptoDto) {
    return this.cryptoService.create(createCryptoDto);
  }

  @Get()
  async findAll() {
    return this.cryptoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cryptoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCryptoDto: UpdateCryptoDto,
  ) {
    return this.cryptoService.update(+id, updateCryptoDto);
  }

  @Delete(':id')
  async remove(@Param() deleteCryptoDto: DeleteCryptoDto) {
    return this.cryptoService.remove(deleteCryptoDto);
  }
}
