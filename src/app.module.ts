import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; // Thêm ConfigModule
import { UserModule } from './user/user.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true, 
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,  
      ssl: {
        rejectUnauthorized: false,
      },
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
