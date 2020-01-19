import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex:1;
   
    align-items:center;
    background-color:#FFF;
    margin:0 30px;
`;

const HeaderText = styled.Text`
font-size:22px
color:#333;
margin-top:50px;
margin-bottom:50px;



`;


const NameInput = styled.TextInput`
border:1px solid #CCC;
width:100%;
height:50px;
border-radius:10px;
font-size:16px;
padding:10px;
`;



const NextButton = (props) => {

    const nextAction = () => {
        if(!props.navigation.state.params || !props.navigation.state.params.name) {
            alert("Você precisa de um nome!");
            return;
        }
        props.navigation.navigate('StarterDias');
    }
    return (
        <Button title="Proximo" onPress={nextAction} />
    )
}


const Page = (props) => {

    const nextAction = () => {
        if(!props.name) {
            alert("Você precisa de um nome!");
            return
        }
        props.navigation.navigate('StarterDias');
    }

    const handleChangeName = (t) => {
        props.setName(t);
        props.navigation.setParams({name:t});
    }
    

    return (
        <Container>
            <HeaderText>Qual é o seu nome? </HeaderText>
            <NameInput 
            value={props.name}
            onChangeText={handleChangeName}
            autoFocus={true}
            autoCapitalize="words"
            onSubmitEditing={nextAction}

            />
        </Container>
    );
};

Page.navigationOptions = ({navigation}) => {

  

    return {
        title:'',
        headerRight: <NextButton navigation={navigation}/>,
        headerRightContainerStyle:{
            marginRight:10
        }

    }
}

const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name)=>dispatch({type:'SET_NAME', payload:{name}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);