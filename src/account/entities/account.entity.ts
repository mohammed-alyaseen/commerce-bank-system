import { Bank } from "src/bank/entities/bank.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
     account: number;

     @Column()
     card_number: number;

    @Column()
    password:string;

    
    @Column()
    balance:number;

    @Column()
    currence:string;

    @Column( )
    type:string;

    @ManyToOne(() => User, (user) => user.account_bank,)
    id_user :User;

    @ManyToOne(() => Bank, (bank) => bank.account,)
    id_bank:Bank
    
    


}
