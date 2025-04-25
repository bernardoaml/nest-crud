import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({ example: 'Rua das Palmeiras', description: 'Nome da rua' })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ example: 'Centro', description: 'Nome do bairro' })
  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @ApiProperty({ example: 'São Paulo', description: 'Nome da cidade' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ example: 'SP', description: 'Estado' })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({ example: '01000-000', description: 'Código postal (CEP)' })
  @IsNotEmpty()
  @IsString()
  zipCode: string;

  @ApiProperty({ example: 1, description: 'ID do cliente ao qual o endereço pertence' })
  @IsNotEmpty()
  @IsInt()
  clientId: number;
}
