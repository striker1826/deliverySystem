import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { IAuthRepository } from './auth.IRepository';
import { AuthRepository } from './auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    JwtService,
    AuthService,
    { provide: IAuthRepository, useClass: AuthRepository },
  ],
  exports: [IAuthRepository],
})
export class AuthModule {}
