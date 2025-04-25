import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { AddressesController } from '../addresses/addresses.controller';
import { AddressesService } from '../addresses/addresses.service';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ClientsController, AddressesController, AuthController],
  providers: [ClientsService, AddressesService, AuthService],
})
export class ClientsModule {}
