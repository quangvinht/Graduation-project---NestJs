/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { HydratedDocument } from "mongoose";
import { ObjectId } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;
  @Prop()
  userName: string;

  @Prop()
  identifyCard: string;

  @Prop()
  birthDate: string;

  @Prop()
  phoneNumber: string;

  @Prop({ unique: [true, "Duplicate email"] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  avatarUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// export const UserSchema = new mongoose.Schema({
//   // _id: Schema.Types.ObjectId,

//   userName: String,

//   identifyCard: String,

//   birthDate: String,

//   phoneNumber: String,

//   email: String,

//   accountName: String,

//   password: String,

//   workDate: String,

//   position: String,

//   salary: String,

//   status: String,

//   lastSignupDate: String,

//   avatarUrl: String,

//   //news: [{ type: Schema.Types.ObjectId, ref: "New" }],

//   //recruits: [{ type: Schema.Types.ObjectId, ref: "Recruit" }],
// });
