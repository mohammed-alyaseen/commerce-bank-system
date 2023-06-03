import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {



    @ApiProperty()
    @IsNotEmpty()  
     f_name:string;

     @ApiProperty()
    @IsNotEmpty()
    l_name:string;

    @ApiProperty()
    @IsNotEmpty()
    gender:string;
}
