import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateBankDto {
    @ApiProperty()
 @IsNotEmpty()
 id_order: string

}
