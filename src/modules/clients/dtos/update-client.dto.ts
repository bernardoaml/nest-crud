import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @ApiPropertyOptional({ example: 'João Atualizado' })
  name?: string;

  @ApiPropertyOptional({ example: 'atualizado@email.com' })
  email?: string;

  @ApiPropertyOptional({ example: '11988887777' })
  phone?: string;

  @ApiPropertyOptional({ example: 'Outro' })
  gender?: string;

  @ApiPropertyOptional({ example: '98765432100' })
  taxPayerId?: string;
}
