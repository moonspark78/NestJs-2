import { 
    IsEnum, 
    IsNotEmpty, 
    IsOptional, 
    IsString, 
    MaxLength, 
    MinLength 
} from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name is required' })
    @MinLength(3, { message: 'Name must be at least 3 characters long' })
    @MaxLength(20, { message: 'Name must be at most 20 characters long' })
    name?: string;
    @IsString({ message: 'Email must be a string' })
    @IsNotEmpty({ message: 'Email is required' })
    email?: string
    @IsOptional()
    @IsEnum(['admin', 'user'], { message: 'Role must be either admin or user' })
    role?: 'admin' | 'user'; 
}
