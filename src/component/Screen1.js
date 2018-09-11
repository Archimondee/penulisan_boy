import React, {Component} from 'react';
import {View,Text,Button,Image,StyleSheet,Animated,ImageBackground,ScrollView, Dimensions} 
from 'react-native';
import {Header, Left, Right, Body, Container, Content, } from 'native-base';
import ImageZoom from 'react-native-image-pan-zoom';


export default class Screen1 extends Component {
    render() {
        return(
            <Container>

                    <Header style ={{backgroundColor: 'red'}}>
                        <Body>
                        <Text style={{color: 'white',alignItems:'center',justifyContent:'center',fontSize: 30,
                         fontWeight: 'bold', margin: 20, marginTop:30 }}> Mobile Legend Guide </Text>
                        </Body>
                    </Header>
                    <ImageBackground source={require('./img/yy.jpg')}
            style={styles.container}>
                <Content>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                    source={require('./img/logonew.png')}
                    />
                <View style={styles.button1}>
                    <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Dua')}
                    title ='Turrnt & Minion' color ='red'/>
                </View>
                <View style={styles.button2}>
                     
                    <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Tiga')}
                    title ='Set Emblem' color ='red'/>
                </View>
                <View style={styles.button3}>
                    <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Empat')}
                    title ='Battle Spell' color ='red' resize= '70'/>
                </View>
                <View style={styles.button4}>
                    <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Delapan')}
                    title ='Tips & Trick' color ='red'/>
                </View>
                <View style={styles.button5}>
                    <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Enam')}
                    title ='Buff & Monster Hutan' color ='red'/>
                </View>                 
                </View>
                    <View style={styles.formContainer}>
                    </View>
                   
            
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

    logoContainer:{
        alignItems: 'center',
        flexGrow: 2,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        
    },
    logo: {
        width: 300,
        height: 280
    },
    button1:{
        shadowColor : 'white',
        flexDirection: 'row'
        
    },
    button2:{
        shadowColor : 'white',
        marginTop: 10,
        
    },
    button3:{
        shadowColor : 'white',
        marginTop: 10,
        
    },
    button4:{
        shadowColor : 'white',
        marginTop: 10,
        
    },
    button5:{
        shadowColor : 'white',
        marginTop: 10,
        marginBottom: 50,
        
    },
});