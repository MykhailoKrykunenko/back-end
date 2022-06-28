import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'test@gmail.com', description: 'Email користувача' })
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'Пароль' })
  readonly password: string;
}
