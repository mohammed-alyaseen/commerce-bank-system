import { Account } from "src/account/entities/account.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bank {
    @PrimaryGeneratedColumn()
    bank: number;

    @Column()
    name: string;


    @OneToMany(() => Account, (account) => account.id_bank)
    account:Account[];

   // @Column()
    //create_date: Date
}
