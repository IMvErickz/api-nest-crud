import { PrismaService } from "../prisma.service";

interface UpdateProps {
    id: string,
    name: string,
    email: string,
    password: string
}

export class UpdateUserService {
    private prisma = new PrismaService()

    async updateUser(props: UpdateProps) {
        await this.prisma.user.update({
            where: {
                id: props.id
            },
            data: {
                name: props.name,
                email: props.email,
                password: props.password
            }
        })
    }
}