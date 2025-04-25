import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    ParseIntPipe,
  } from '@nestjs/common';
  import { AddressesService } from './addresses.service';
  import { CreateAddressDto } from './dtos/create-address.dto';
  import { UpdateAddressDto } from './dtos/update-address.dto';
  import { UseGuards } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';

  @UseGuards(AuthGuard('jwt'))
  @Controller('addresses')
  export class AddressesController {
    constructor(private readonly addressesService: AddressesService) {}
  
    @Post()
    create(@Body() dto: CreateAddressDto) {
      return this.addressesService.create(dto);
    }
  
    @Get('client/:clientId')
    findByClient(@Param('clientId', ParseIntPipe) clientId: number) {
      return this.addressesService.findByClient(clientId);
    }
  
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAddressDto) {
      return this.addressesService.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.addressesService.remove(id);
    }
  }
  