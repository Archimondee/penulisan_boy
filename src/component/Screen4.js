import React, {Component} from 'react';
import {View,Text,Image,ScrollView,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';
import {Container, Content, Header, Body, Left, Right} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class Screen4 extends Component {
    render() {
        return(
            <Container>
                <Header style ={{backgroundColor: 'red'}}>
                        <Left>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Ionicons name='ios-arrow-back' size={30} color='black' />
                            </TouchableOpacity>        
                        </Left>
                        <Body>
                        <Text style={{color: 'white',alignItems:'center',justifyContent:'center',fontSize: 30, 
                        fontWeight: 'bold', marginTop: 10 }}> Battle Spell </Text>
                        </Body>
                    </Header>           
                <ImageBackground source={require('./img/yy.jpg')}
                style={styles.containere}>
                <Content>
                <ScrollView>
                <View style={styles.containeraa}>
                        <Image style= {styles.spell} 
                    source = {require ('./img/battlespell/spell2.png')} />
                    </View>
                        <Image style= {styles.spell} 
                    source = {require ('./img/battlespell/spell1.png')} />                
                        <Image style= {styles.spell} 
                    source = {require ('./img/battlespell/spell3.png')} />
                        <Image style= {styles.spell} 
                    source = {require ('./img/battlespell/spell4.png')} />
                    <Image style= {styles.spell} 
                    source = {require ('./img/battlespell/spell5.png')} />
                    <Image style= {styles.spell} 
                    source = {require ('./img/battlespell/spell6.png')} />
                    
                </ScrollView>
                </Content>
                </ImageBackground>
                </Container>
                
            );
    }
}
const styles =StyleSheet.create({

    containere: {
        alignItems: 'center',
        justifyContent:'center',
        flexGrow :1,
        width: null,
        height: null,
        backgroundColor :'rgba(0,0,0,0)',
    },
    containeraa: {
        flex: 1,
        alignItems: 'center',
        flexGrow: 1,
        margin: 5,
    },
    spell :{
        width: 350,
        height: 240,
        marginRight :5,
        marginLeft :5,

    }

});