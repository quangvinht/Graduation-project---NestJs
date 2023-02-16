/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./users/users.module";

import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { EventsModule } from "./events/events.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://vinh:teo0966533714@cluster0.zl2ae4t.mongodb.net/graduation-project"),
    UserModule,
    AuthModule,
    ProfileModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
