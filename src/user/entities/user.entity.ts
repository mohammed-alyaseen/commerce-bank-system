import { Account } from "src/account/entities/account.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    user: number;

    @Column()
    f_name:string;

    @Column()
    l_name:string;

    @Column()
    gender:string;

    @OneToMany(() => Account, (account) => account.id_user)
    account_bank :Account[]

}
