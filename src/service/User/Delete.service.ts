import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

interface IdProps {
    id: string
}

@Injectable()
export class DeleteUserService {
    private prisma = new PrismaService

    async deleteUser(props: IdProps) {
        await this.prisma.user.delete({
            where: {
                id: props.id
            }
        })
    }
}