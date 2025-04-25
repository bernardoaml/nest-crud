import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dtos/create-address.dto';
import { UpdateAddressDto } from './dtos/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAddressDto) {
    const client = await this.prisma.client.findFirst({
      where: { id: dto.clientId, deletedAt: null },
    });

    if (!client) throw new NotFoundException('Cliente não encontrado');

    return this.prisma.address.create({ data: dto });
  }

  async findByClient(clientId: number) {
    const client = await this.prisma.client.findFirst({
      where: { id: clientId, deletedAt: null },
    });

    if (!client) throw new NotFoundException('Cliente não encontrado');

    return this.prisma.address.findMany({
      where: { clientId },
    });
  }

  async update(id: number, dto: UpdateAddressDto) {
    const address = await this.prisma.address.findUnique({ where: { id } });

    if (!address) throw new NotFoundException('Endereço não encontrado');

    return this.prisma.address.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    const address = await this.prisma.address.findUnique({ where: { id } });

    if (!address) throw new NotFoundException('Endereço não encontrado');

    return this.prisma.address.delete({ where: { id } });
  }
}
