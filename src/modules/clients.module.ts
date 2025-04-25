import { Module } from '@nestjs/common';
import { ClientsService } from './clients/clients.service';
import { ClientsController } from './clients/clients.controller';
import { AddressesController } from './addresses/addresses.controller';
import { AddressesService } from './addresses/addresses.service';

@Module({
  controllers: [ClientsController, AddressesController],
  providers: [ClientsService, AddressesService],
})
export class ClientsModule {}
