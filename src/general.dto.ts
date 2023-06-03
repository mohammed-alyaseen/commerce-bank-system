import { ApiProperty } from "@nestjs/swagger";

export   class GeneralDto {

    @ApiProperty()
    bank_id:number;
      @ApiProperty()
      source:number;
      @ApiProperty()
       target:number;
       @ApiProperty()
      balance:number;
      @ApiProperty()
       password:string;
  
}

export   class ResultDto {

state:boolean;
balance:number;
  
}