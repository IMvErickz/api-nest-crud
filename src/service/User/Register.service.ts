import { Body, Post, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { randomUUID } from "crypto";

interface UserProps {
    name: string
    email: string
    password: string
}

@Injectable()

export class RegisterUser {
    prisma = new PrismaService()
    async createUser(userProps: UserProps) {
        await this.prisma.user.create({
            data: {
                name: userProps.name,
                email: userProps.email,
                password: userProps.password,
                id: randomUUID()
            }
        })


    }

}