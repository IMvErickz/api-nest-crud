import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

interface UserIdProps {
    id: string
}

@Injectable()
export class UserIdService {
    private prisma = new PrismaService()

    async userId(props: UserIdProps) {
        return await this.prisma.user.findMany({
            where: {
                id: props.id
            },
            select: {
                name: true,
                email: true,
                password: true,
                avatar_url: true
            }
        })
    }
}