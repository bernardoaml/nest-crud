import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateClientDto) {
    return this.prisma.client.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.client.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        addresses: true,
      },
    });
  }

  async findOne(id: number) {
    const client = await this.prisma.client.findFirst({
      where: { id, deletedAt: null },
      include: { addresses: true },
    });

    if (!client) throw new NotFoundException('Cliente não encontrado');
    return client;
  }

  async update(id: number, dto: UpdateClientDto) {
    await this.findOne(id);
    return this.prisma.client.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
