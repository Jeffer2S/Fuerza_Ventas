import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-us-west-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.stqypnljlmrasbdamtjd',
      password: 'Zk9RFEVegf4tIKHl',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
    }),
  ],
})
export class ConnectionModule {}
