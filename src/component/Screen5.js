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
                        fontWeight: 'bold', marginTop: 10 }}> Tier Rank </Text>
                        </Body>
                    </Header>                
                <ImageBackground source={require('./img/yy.jpg')}
                style={styles.container}>
                <Content>
                <ScrollView>
                <View style={styles.containeraa}>
                    <Image style= {styles.satu} 
                    source = {require ('./img/tier/warrior_elite.png')} />
                    <Image style= {styles.satu} 
                    source = {require ('./img/tier/master_grand.png')} />
                    <Image style= {styles.satu} 
                    source = {require ('./img/tier/epic_leg.png')} />
                    <Image style= {styles.satu} 
                    source = {require ('./img/tier/myticglo.png')} />
                    </View>
                </ScrollView>
                </Content>
                </ImageBackground>
                </Container>
                
            );
    }
}
const styles =StyleSheet.create({

    container: {
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
    satu :{
        width: 350,
        height: 240,
        marginRight: 5,
        marginLeft:5,
    },
});