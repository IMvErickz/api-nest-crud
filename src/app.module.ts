import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './service/prisma.service';
import { RegisterUser } from './service/User/Register.service';
import { UserController } from './controller/user.controller';
import { UserIdService } from './service/User/UserId.service';
import { DeleteUserService } from './service/User/Delete.service';
import { UpdateUserService } from './service/User/Update.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService, RegisterUser, UserIdService, DeleteUserService, UpdateUserService],
})
export class AppModule { }
