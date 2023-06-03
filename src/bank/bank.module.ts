import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from './entities/bank.entity';
import { AccountModule } from 'src/account/account.module';
import { UserModule } from 'src/user/user.module';
import { Account } from 'src/account/entities/account.entity';

@Module({
  imports:[UserModule,AccountModule,TypeOrmModule.forFeature([Bank,Account])],
  controllers: [BankController],
  providers: [BankService],
  exports:[BankService],
})
export class BankModule {}
