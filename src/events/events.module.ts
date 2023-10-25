/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";

//import { UserModule } from "src/users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { EventsSchema, Events } from "./schemas/events.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Events.name, schema: EventsSchema }])],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
