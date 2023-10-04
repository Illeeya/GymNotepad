import mongoose, { Schema } from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    workoutId: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    series: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    bar: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const workoutSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    ownerId: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    exercises: [exerciseSchema],
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
