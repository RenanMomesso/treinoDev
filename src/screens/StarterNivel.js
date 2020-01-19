import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    background-color:#FFF;
    margin-left:30px;
    margin-right:30px;
    margin-top:50px; 
`;

const HeaderText = styled.Text`
font-size:15px
color:#333;
text-align:center;
margin-bottom:30px;;
`;
const BoldText = styled.Text`
font-weight:bold;`;

const NextButton = styled.Button``;

const LevelArea = styled.View`
width:100%;

`;



const Page = (props) => {

    let funnyPhrase = '';
    switch(props.workoutDays.length){
        case 1:
            funnyPhrase = 'Só 1 dia não vai adiantar muito, mas ...';
            break;
        case 2:
            funnyPhrase = '2 dias ta ficando bom';
            break;   
        case 3:
            funnyPhrase = '3 é já ta ficando melhor';
            break; 
        case 4:
            funnyPhrase = 'legal, 4 dias vai ficar top';
            break;  
        case 5:
            funnyPhrase = 'aooo moramba';
            break;  
        case 6:
            funnyPhrase = 'não descansa não monstro?';
            break;
        case 7:
            funnyPhrase = 'que isso THE ROCK';
            break;                    
    }
    const setMyLevel = (l) => {
props.setLevel(l);
props.navigation.setParams({level:l});
    }


    return (
        <Container>
            <HeaderText>{funnyPhrase}</HeaderText>
            <HeaderText><BoldText>Qual o seu nível hoje?</BoldText></HeaderText>
        

           <LevelArea>
               <DefaultButton underlayColor="#CCC" bgcolor={props.level=='beginner'?'#A5E8BC':false} onPress={()=>setMyLevel('beginner')}   style={{marginBottom:20}}>
                   <Text>Iniciante / Frango</Text>
               </DefaultButton>
               <DefaultButton  underlayColor="#CCC"  bgcolor={props.level=='intermediate'?'#A5E8BC':false}   onPress={()=>setMyLevel('intermediate')}    style={{marginBottom:20}}>
                   <Text>Intermediário / Me viro bem</Text>
               </DefaultButton>
               <DefaultButton underlayColor="#CCC"  bgcolor={props.level=='advanced'?'#A5E8BC':false}  onPress={()=>setMyLevel('advanced')}  style={{marginBottom:20}}>
                   <Text>Avançado / Primo do The RoCk</Text>
               </DefaultButton>
           </LevelArea>
        </Container>
    );
};

Page.navigationOptions = ({navigation}) => {

    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.level) {
            alert('Você precisa escolher uma opção');
            return;
        }
        navigation.navigate('StarterRecommendations');
    }

    return {
        title:'',
        headerRight: <NextButton  title="Proximo" onPress={nextAction}/>,
        headerRightContainerStyle:{
            marginRight:10
        }

    }
}

const mapStateToProps = (state) => {
    return {
        level:state.userReducer.level,
        workoutDays:state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       setLevel:(level)=>dispatch({type:'SET_LEVEL', payload:{level}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);