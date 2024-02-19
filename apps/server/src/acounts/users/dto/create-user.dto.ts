import { Role } from "src/acounts/auth/enums/role.enum";

export class CreateUserDto {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  
  role: Role;
}
