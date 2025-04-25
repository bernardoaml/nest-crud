import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './modules/clients.module';
import { AddressesModule } from './modules/addresses/addresses.module';

@Module({
  imports: [
            PrismaModule, 
            ClientsModule,
            AddressesModule,
            ],
})
export class AppModule {}
