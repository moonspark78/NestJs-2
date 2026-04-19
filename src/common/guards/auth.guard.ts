import { 
    Injectable, 
    UnauthorizedException,  
    CanActivate,  
    ExecutionContext 
} from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest()<Request>();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException("No token provided");
        }

        return true;
    }
}