import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartmentDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'department name is required' })
    @IsString()
    name: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: 'department description is required' })
    @IsString()
    description: string;

}

