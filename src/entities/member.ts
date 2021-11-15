import { model, Schema } from 'mongoose';

export interface IMember {
  name: string;
  lastname: string;
  birthdate: string;
  sex: string;
  comments: string;
  email: string;
  cellphone: Number;
  homephone: Number;
  address: string;
  status: Boolean;
  picture: string;
  emergencyContact: string;
  relationship: string;
  contactEmail: string;
  contactCellPhone: Number;
  contactHomePhone: Number;
  medicalInformation: string;
  age: Number;
}

const schema = new Schema<IMember>({
  name: {type: String, required: true},
  lastname: {type: String, required: true},
  birthdate: {type: String, required: true},
  sex: String,
  comments: String,
  email: String,
  cellphone: Number,
  homephone: Number,
  address: String,
  status: Boolean,
  picture: String,
  emergencyContact: String,
  relationship: String,
  contactEmail: String,
  contactCellPhone: Number,
  contactHomePhone: Number,
  medicalInformation: String,
  age: Number
});

//export const Member: Model<IMember> = model('Members', MemberSchema)
export const Member = model<IMember>('Members', schema);
