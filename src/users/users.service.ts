import { Injectable } from '@nestjs/common';
import { User } from '../../types/usersType';

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

    create(user: User): User {
        const newUser = { ...user, id: this.users.length + 1 };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, user: User): User {
        const index = this.users.findIndex(user => user.id === id);
        this.users[index] = user;
        return user;
    }

    delete(id: number): string {
        this.users = this.users.filter(user => user.id !== id);
        return "User deleted successfully";
    }
}