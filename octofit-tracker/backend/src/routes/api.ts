import { Router } from 'express'
import { getWorkouts, createWorkout } from '../controllers/workoutController'

const router = Router()

router.get('/workouts', getWorkouts)
router.post('/workouts', createWorkout)

export default router
