import { Document, Schema, model } from 'mongoose';

export interface IPokemon extends Document {
  name: string;
  type: string;
  level: Number;
}

const schema = new Schema<IPokemon>(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      type: {
        type: String,
        required: true,
        unique: true,
      },
      level: {
        type: Number,
        required: true,
        select: false, 
      },
    },
    {
      timestamps: true,
    }
);
  
export default model<IPokemon>('pokemon', schema);