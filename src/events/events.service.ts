import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
//import { User } from "src/users/schemas/users.schema";
import { CreateEventDto } from "./dto/create-events-dto";
import { UpdateEventDto } from "./dto/update-events-dto";
import { Events, EventsDocument } from "./schemas/events.schema";

@Injectable()
export class EventsService {
  // constructor(
  //   @Inject("Event_MODEL")
  //   private NewModel: Model<News>,
  //   private userService: UserService,
  // ) {}
  constructor(@InjectModel(Events.name) private EventModel: Model<EventsDocument>) {}

  async create(createEventDto: CreateEventDto): Promise<Events | any> {
    const createEvent = new this.EventModel(createEventDto);
    //await createEvent.populate("participants");
    return createEvent.save();
  }
  async show(_id: ObjectId): Promise<Events | any> {
    return this.EventModel.findById(_id).populate("participants").exec();
    //return this.EventModel.findById(_id).populate("users").exec();
  }
  async showAll(page: number, limit: number): Promise<any> {
    const data = await this.EventModel.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ startDate: "asc" })
      .populate("participants")
      .exec();

    const count = await this.EventModel.count();
    return { data: data, total: count };
    //return this.EventModel.find().populate("users").exec();
  }

  async showAllTotal(): Promise<any> {
    return this.EventModel.find().sort({ title: "desc" }).exec();
    //return this.EventModel.find().populate("users").exec();
  }
  // async paginate(options: IPaginationOptions): Promise<Pagination<Events>> {
  //   const qb = this.EventModel.createQueryBuilder("q");
  //   return paginate<Events>(qb, options);
  // }
  async update(_id: ObjectId, updateEventDto: UpdateEventDto): Promise<Events> {
    await this.EventModel.findOneAndUpdate(_id, updateEventDto).exec();
    return this.EventModel.findById(_id).exec();
  }
  async delete(_id: ObjectId): Promise<Events> {
    return this.EventModel.findOneAndDelete(_id).exec();
  }
  async search(keyWord: any, limit: number, page: number): Promise<any> {
    const data = await this.EventModel.find({
      $or: [
        { title: { $regex: keyWord, $options: "i" } },
        // { phoneNumber: { $regex: keyWord, $options: "i" } },
      ],
    })
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ startDate: "asc" })
      .populate("participants")
      .exec();
    const count = await this.EventModel.find({
      $or: [
        { title: { $regex: keyWord, $options: "i" } },
        // { phoneNumber: { $regex: keyWord, $options: "i" } },
      ],
    })
      .count()
      .exec();
    return { data: data, total: count };
  }
}
