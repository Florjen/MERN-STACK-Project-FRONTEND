import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
const WorkoutDetails = ({workout}) =>{
const {dispatch} = useWorkoutsContext()
const {user} = useAuthContext()
const handleClick = async () =>{
if(!user) {
    return
}

   const response = await fetch('/api/workouts/'+ workout._id,{
    method:'DELETE',
    'Content-Type':'application/json',
    'Authorization':`Bearer ${user.token}`
   
   })
   const json = await response.json()
   if(response.ok) {
    dispatch({type:'DELETE_WORKOUT',payload:json})

   }
}





return(
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load: {workout.load}</strong></p>
        <p><strong>Reps: {workout.reps}</strong></p>
        <p><strong>Load: {workout.createdAt}</strong></p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
    </div>
)

}

export default WorkoutDetails