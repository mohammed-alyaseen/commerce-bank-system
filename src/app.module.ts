import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankModule } from './bank/bank.module';
import { AccountModule } from './account/account.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    
    
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_NAME'),
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
            //     logging: configService.get<boolean>('DB_LOGGING'),
        }),
    }),
    
    BankModule, AccountModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
