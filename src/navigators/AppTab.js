import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CustomTabBar from '../components/CustomTabBar'; 

import HomeStack from './HomeStack';
import TmpScreen from '../screens/TmpScreen';
//import WorkoutStack from './WorkoutStack';
import MyWorkoutStack from './MyWorkoutStack';

export default createBottomTabNavigator({
    HomeStack,
    
  //  WorkoutStack,
    MyWorkoutStack
}, {
    tabBarComponent:(props)=>(
        <CustomTabBar
            {...props}
            items={[
                {
                    type:'regular',
                    text:'Inicio',
                    icon:require('../assets/home.png'),
                    route:'HomeStack'
                },
                {
                    type:'big', 
                    icon:require('../assets/dumbbell.png'), 
                    route:'WorkoutStack'
                },
                {
                    type:'regular', 
                    text:'Meus treinos', 
                    icon:require('../assets/myworkouts.png'),
                    route:'MyWorkoutsStack'
                }
            ]}
        />
    )
});