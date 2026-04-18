import { Injectable } from '@nestjs/common';
import { User } from '../../types/usersType';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'user' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'user' },
        { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'admin' },
        { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'user' },
        { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', role: 'user' }
    ];

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User {
        return this.users.find(user => user.id === id) as User;
    }

    create(userCreate: CreateUserDto): User {
        const newUser = { ...userCreate, id: this.users.length + 1 };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, userUpdate: UpdateUserDto): User {
        const index = this.users.findIndex(user => user.id === id);
        this.users[index] = { ...this.users[index], ...userUpdate };
        return this.users[index];
    }

    delete(id: number): string {
        this.users = this.users.filter(user => user.id !== id);
        return "User deleted successfully";
    }
}