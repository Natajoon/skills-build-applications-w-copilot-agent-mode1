import { Request, Response } from 'express'
import Workout from '../models/workout'

export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 })
    res.json(workouts)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workouts' })
  }
}

export const createWorkout = async (req: Request, res: Response) => {
  try {
    const { title, duration } = req.body
    const workout = new Workout({ title, duration })
    await workout.save()
    res.status(201).json(workout)
  } catch (err) {
    res.status(400).json({ error: 'Failed to create workout' })
  }
}
