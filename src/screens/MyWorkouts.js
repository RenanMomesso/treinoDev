import React, {useState} from 'react';
import styled from 'styled-components/native';
import  {connect}  from  'react-redux';
import Workout from '../components/Workout'




const Container = styled.SafeAreaView`
 flex:1;
`;

const WorkoutList = styled.FlatList`
    flex:1; 
    padding:20px;
`;
const Page = (props) => {
    return (
        <Container>
            <WorkoutList
                data={props.myWorkouts}
                renderItem={({item})=>
                    <Workout
                        data={item}
                        editAction={()=>editWorkout(item)}
                        delAction={()=>props.delWorkout(item)}
                    />
                }
                keyExtractor={item=>item.id}
            />
        </Container>
    );
};


Page.navigationOptions = ({navigation}) => {

    const ButtonArea = styled.TouchableHighlight`
    width:30px;
    height:30px;
    justify-content:center;
    align-items:center;
    `;

    const ButtonImage = styled.Image`
    width:25px;
    height:25px;
    `;

    const AddWorkButton = ({onPress})=>{
        return(
            <ButtonArea onPress={onPress}>
                <ButtonImage source={require('../assets/add.png')}/>
            </ButtonArea>
        );
    }

    const btnButton = () => {
        navigation.navigate('EditWorkout')
    }
  
    return {
        title:'Meus Treinos',
        headerRight:<AddWorkButton onPress={btnButton} underlayColor="transparent"/>,
        headerRightContainerStyle:{
            marginRight:10,
        }
        

    }
}

const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        myWorkouts:state.userReducer.myWorkouts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delWorkout:(Workout)=>dispatch({type:'DEL_WORKOUT',payload:{workout}})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);