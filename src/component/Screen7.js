import React, {Component} from 'react';
import {View,Text,Image,ScrollView,StyleSheet,ImageBackground, TouchableOpacity} 
from 'react-native';
import {Container, Content, Header, Body, Left, Right} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default class Screen7 extends Component {
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
                        <Text style={{color: 'white',alignItems:'center',justifyContent:'center',fontSize: 30, fontWeight: 'bold', marginTop: 10 }}> 
                        Info Buff </Text>
                        </Body>
                    </Header>
                <ImageBackground source={require('./img/yy.jpg')}
                style={styles.container}>
                <Content>
                    <ScrollView>
                    <View style={styles.containera}>
                    <Text style={styles.base}>Daftar Role Buff</Text>
                    <Image style= {styles.minion} source = {require ('./img/rollbuff/fighter.png')}/>
                    
                    <Text style={styles.baseText}>Fighter </Text> 
                    <Text style={styles.baseText}>Skill Cooldown berkurang sebanyak 15%.
                    Skill yang mengenai musuh dapat mengurangi movement speednya sebanyak 10% selama 2 detik.</Text>
                    <Image style= {styles.minion} source = {require ('./img/rollbuff/marksman.png')}/>
                    <Text style={styles.baseText}>Marskman</Text>
                    <Text style={styles.baseText}>Menambah Physical Attack sebanyak 10%.
                    Serangan biasa dapat mengurangi movement speed musuh sebanyak 20% selama 2 detik.</Text>
                    <Image style= {styles.minion} source = {require ('./img/rollbuff/Assasin.png')}/>
                    <Text style={styles.baseText}>Assasin</Text> 
                    <Text style={styles.baseText}>Skill Cooldown berkurang sebanyak 10%.
                    Mengurangi biaya Energy sebesar 20% dan Mana sebesar 50%.
                    Meningkatkan Physical dan Magic Penetration sebesar 15 poin.</Text>
                    <Image style= {styles.minion} source = {require ('./img/rollbuff/Tank.png')}/>
                    <Text style={styles.baseText}>Tank</Text> 
                    <Text style={styles.baseText}>Mengurangi biaya Mana untuk seluruh skill sebesar 50%.
                    Meningkatkan Physical dan Magic Resistance sebanyak 15%.</Text>
                    <Image style= {styles.minion} source = {require ('./img/rollbuff/Mage.png')}/>
                    <Text style={styles.baseText}>Mage</Text> 
                    <Text style={styles.baseText}>Skill Cooldown berkurang sebanyak 20%, mengurangi biaya Mana sebesar 50%.
                    Meningkatkan Magic Attack sebesar 11-25 poin (ditentukan level hero yang menerima buff).</Text>
                    <Image style= {styles.minion} source = {require ('./img/rollbuff/support.png')}/>
                    <Text style={styles.baseText}>Support</Text> 
                    <Text style={styles.baseText}>Skill Cooldown berkurang sebanyak 10%.
                    Meningkatkan Mana regeneration sebesar 50 poin dan efek Healing sebesar 15%.</Text>
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
    containera: {
        flex: 1,
        alignItems: 'center',
        flexGrow: 1,
        margin: 5,    
    },
    baseText:{
        alignItems: 'center',
        justifyContent:'center',
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        
    },
    base:{
        alignItems: 'center',
        justifyContent:'center',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop:10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },        
    minion :{
        width: 70,
        height: 70,
        margin: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },

});