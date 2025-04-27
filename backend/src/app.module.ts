import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { TechstackModule } from './techstack/techstack.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => {
        const uri = process.env.MONGO_URI;
        if (!uri) {
          throw new Error ("MONGO_URI não está definido no .env");
        }
        return {uri};
      },
    }),
    AuthModule,
    ProjectModule,
    UserModule,
    AboutModule,
    ContactModule,
    TechstackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}