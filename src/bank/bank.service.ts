import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from './entities/bank.entity';
import { AccountService } from 'src/account/account.service';
import { UserService } from 'src/user/user.service';
import { GeneralDto, ResultDto } from 'src/general.dto';
import { Account } from 'src/account/entities/account.entity';
import { Console } from 'console';

@Injectable()
export class BankService {

  constructor(
    @InjectRepository(Bank)
    private readonly _bankRepository:Repository<Bank>,
    @InjectRepository(Account)
    private readonly _accountRepository: Repository<Account>,
    @Inject(UserService)
    private readonly _userService: UserService,
    
    ){}



  create(createBankDto: CreateBankDto) {
    return 'This action adds a new bank';
  }




async  check(general :GeneralDto ):Promise <ResultDto> {
    //check bank
    let result_b=await this._bankRepository.findOne({where:{bank:general.bank_id}});
    if(!result_b){
      throw new HttpException('No bank founds', HttpStatus.NOT_FOUND);
    }
    
const result_s_bank = await this._accountRepository.findOne({where:{card_number:general.source}});
const result_t_bank = await this._accountRepository.findOne({where:{card_number:general.target}});


if(general.source==general.target){
  throw new HttpException('No allowed similar card', HttpStatus.NOT_ACCEPTABLE);
}

if(!result_s_bank||!result_t_bank){
  throw new HttpException('No card founds', HttpStatus.NOT_FOUND);
}

let result_s_bank_password =await this._accountRepository.findOne({where:{password:general.password}});

if(!result_s_bank_password){
  throw new HttpException('incorrect password', HttpStatus.NOT_ACCEPTABLE);
}

if(result_s_bank.balance<general.balance){
  throw new HttpException('No balance enough', HttpStatus.NOT_ACCEPTABLE);
}



result_s_bank.balance  = ( result_s_bank.balance) - (general.balance);

console.log("result_s_bank.balance")

await this._accountRepository.update(result_s_bank.account,{...result_s_bank});
 


result_t_bank.balance=result_t_bank.balance + general.balance;
await this._accountRepository.update(result_t_bank.account,{...result_t_bank});




let result = new ResultDto();
result.state =true;
result.balance=result_s_bank.balance;

    return result;
  }





  findOne(id: number) {
    return `This action returns a #${id} bank`;
  }

  update(id: number, updateBankDto: UpdateBankDto) {
    return `This action updates a #${id} bank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bank`;
  }
}
