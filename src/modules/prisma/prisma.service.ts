
import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class PrismaService extends PrismaClient {
  constructor(
    private readonly configService : ConfigService
  ) {
    const connectionString = configService.get<string>('DATABASE_URL')
    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
  }
}