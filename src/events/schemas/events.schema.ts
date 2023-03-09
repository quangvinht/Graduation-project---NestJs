/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose";
//import { Schema } from "mongoose";

import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/schemas/users.schema";
import { Transform, Type } from "class-transformer";

export type EventsDocument = HydratedDocument<Events>;

@Schema()
export class Events {
  @Transform(({ value }) => value.toString())
  _id: mongoose.ObjectId;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  note: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  type: string;

  @Prop()
  status: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  //@Type(() => User)
  participants: User[];
}

export const EventsSchema = SchemaFactory.createForClass(Events);

// export const NewSchema = new mongoose.Schema({
//   //_id: mongoose.Schema.Types.ObjectId,

//   title: String,

//   workList: String,

//   detailWork: String,

//   note: String,

//   postDate: String,

//   poster: String,

//   images: Array<string>,

//   users: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// });
