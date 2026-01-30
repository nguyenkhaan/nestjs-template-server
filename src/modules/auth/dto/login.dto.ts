import { OmitType } from '@nestjs/mapped-types';
import { RegisterDTO } from 'src/modules/auth/dto/register.dto';

export class LoginDTO extends OmitType(RegisterDTO, ['name'] as const) {}
