import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './modules/clients.module';

@Module({
  imports: [PrismaModule, ClientsModule],
})
export class AppModule {}
