import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { ObjectId } from "mongoose";
//import { User } from "src/users/schemas/users.schema";
import { CreateEventDto } from "./dto/create-events-dto";
import { UpdateEventDto } from "./dto/update-events-dto";
import { EventsService } from "./events.service";
import { Events } from "./schemas/events.schema";

@Controller("event")
export class EventsController {
  constructor(private eventsService: EventsService) {}
  @Get("/all/:_id")
  showEvent(@Param() _id: ObjectId): Promise<Events> {
    return this.eventsService.show(_id);
  }
  @Get("")
  showAllEvents(
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Events[]> {
    return this.eventsService.showAll(page, limit);
  }
  @Get("/all")
  total(): Promise<any> {
    return this.eventsService.showAllTotal();
  }
  @Get("/search/:keyWord")
  searchEvent(
    @Param("keyWord") keyWord: any,
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Events[]> {
    return this.eventsService.search(keyWord, limit, page);
  }
  @Post()
  storeEvent(@Body() creteEventDto: CreateEventDto): Promise<Events> {
    return this.eventsService.create(creteEventDto);
  }
  @Patch("/all/:_id")
  updateEvent(@Param() _id: ObjectId, @Body() updateEventDto: UpdateEventDto): Promise<Events> {
    return this.eventsService.update(_id, updateEventDto);
  }
  @Delete("/all/:_id")
  deleteEvent(@Param() _id: ObjectId): Promise<Events> {
    return this.eventsService.delete(_id);
  }
}
