import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do cliente' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'joao@email.com', description: 'E-mail único' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '11999999999', description: 'Telefone com DDD' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: 'Masculino', description: 'Gênero do cliente' })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({
    example: '12345678901',
    description: 'CPF ou CNPJ. Deve ser único.',
  })
  @IsNotEmpty()
  @Length(11, 14)
  taxPayerId: string;
}
