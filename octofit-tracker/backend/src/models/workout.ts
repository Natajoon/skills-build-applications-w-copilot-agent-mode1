import mongoose, { Document, Schema } from 'mongoose'

export interface IWorkout extends Document {
  title: string
  duration: number
  date: Date
}

const WorkoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now }
})

export default mongoose.model<IWorkout>('Workout', WorkoutSchema)
