const initialState = {
    name:'',
    level:'',
    workoutDays:[],
    myWorkouts:[],
    lastWorkout:'',
    dailyProgress:['2019-09-13', '2019-09-12']
};

export default (state = initialState, action ) => {
    

    let myWorkouts = [...state.myWorkouts];
    let dailyProgress = [...state.dailyProgress];

        switch(action.type) {
            case 'SET_NAME':
                return{...state, name:action.payload.name};
                break;
            case 'SET_WORKOUTDAYS':
                    return {...state, workoutDays:action.payload.workoutDays};
                    break; 
            case 'SET_LEVEL':
                return {...state, level:action.payload.level};
                break;
            case 'ADD_WORKOUT':
                if(myWorkouts.findIndex(i=>i.id==action.payload.workout.id)<0){
                    myWorkouts.push(action.payload.workout);
                }   
                return {...state, myWorkouts:myWorkouts}; 
                break;
                case 'DEL_WORKOUT':
                   myWorkouts = myWorkouts.filter(i=>i.id!=action.payload.workout.id);  
                    return {...state, myWorkouts:myWorkouts}; 
                    break;  
                case 'ADD_PROGRESS':
                    if(!dailyProgress.includes(action.payload.date)){
                        dailyProgress.push(action.payload.date);
                    }       
                    return {...state, dailyProgress};
                    break;
                case 'DEL_PROGRESS':
                    dailyProgress = dailyProgress.filter(i=>i!=action.payload.date);
                    return {...state, dailyProgress};
                    break;    
        }
        

        return state;
}