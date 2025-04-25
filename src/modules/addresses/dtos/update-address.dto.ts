import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './create-address.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
  @ApiPropertyOptional({ example: 'Rua Nova' })
  street?: string;

  @ApiPropertyOptional({ example: 'Bairro Novo' })
  neighborhood?: string;

  @ApiPropertyOptional({ example: 'Nova Cidade' })
  city?: string;

  @ApiPropertyOptional({ example: 'RJ' })
  state?: string;

  @ApiPropertyOptional({ example: '22000-000' })
  zipCode?: string;

  @ApiPropertyOptional({ example: 2 })
  clientId?: number;
}
