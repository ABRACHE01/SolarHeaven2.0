import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartmentDto {
    @IsNotEmpty({ message: 'department name is required' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'department description is required' })
    @IsString()
    description: string;

}

