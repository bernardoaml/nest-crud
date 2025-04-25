import { Test, TestingModule } from '@nestjs/testing';
import { AddressesService } from './addresses.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { prismaMock } from 'src/test/prisma.mock';

describe('AddressesService', () => {
  let service: AddressesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressesService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<AddressesService>(AddressesService);
  });

  it('should create an address successfully', async () => {
    prismaMock.client.findFirst.mockResolvedValue({ id: 1 });
    prismaMock.address.create.mockResolvedValue({
      id: 1,
      street: 'Rua X',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01000-000',
      clientId: 1,
    });

    const result = await service.create({
      street: 'Rua X',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01000-000',
      clientId: 1,
    });

    expect(result).toHaveProperty('id');
    expect(result.street).toEqual('Rua X');
  });

  it('should throw if client does not exist when creating address', async () => {
    prismaMock.client.findFirst.mockResolvedValue(null);

    await expect(
      service.create({
        street: 'Rua Y',
        neighborhood: 'Bairro Y',
        city: 'Cidade Y',
        state: 'ST',
        zipCode: '99999-999',
        clientId: 999,
      }),
    ).rejects.toThrow('Cliente não encontrado');
  });
});
