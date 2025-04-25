import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { prismaMock } from 'src/test/prisma.mock'; // caminho até seu mock

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it('should create a client successfully', async () => {
    const mockData = {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '11999999999',
      gender: 'Masculino',
      taxPayerId: '12345678900',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      addresses: [],
    };

    prismaMock.client.create.mockResolvedValue(mockData);

    const result = await service.create({
      name: mockData.name,
      email: mockData.email,
      phone: mockData.phone,
      gender: mockData.gender,
      taxPayerId: mockData.taxPayerId,
    });

    expect(result).toEqual(mockData);
    expect(prismaMock.client.create).toHaveBeenCalledTimes(1);
  });

  it('should throw if trying to update non-existing client', async () => {
    prismaMock.client.findFirst.mockResolvedValue(null);

    await expect(service.update(999, { name: 'Novo Nome' })).rejects.toThrow(
      'Cliente não encontrado',
    );
  });
});
