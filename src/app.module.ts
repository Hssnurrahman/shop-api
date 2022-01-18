import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://shopapi:shopapi@shopapi.m2xr5.mongodb.net/ShopApi?retryWrites=true&w=majority',
      { useFindAndModify: false },
    ),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
