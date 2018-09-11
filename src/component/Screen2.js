import React, {Component} from 'react';
import {View,Text,Image,ScrollView,StyleSheet,ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import {Container, Content, Header, Body, Left, Right} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import ImageZoom from 'react-native-image-pan-zoom';

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
                        fontWeight: 'bold',marginTop: 10 }}> Turrent & Minion </Text>
                        </Body>
                    </Header>
                <ImageBackground source={require('./img/yy.jpg')}
                style={styles.container}>
                <Content>
                    <ScrollView>
                    <View style={styles.containera}>
                    <ImageZoom 
                        cropWidth={250}
                        cropHeight={250}
                        imageWidth={250}
                        imageHeight={250}
                        >
                        <Image style= {styles.map} source = {require ('./img/turrent/map.jpg')}/>
                    </ImageZoom>
                    
                    </View>
                    <Text style={styles.baseText}>Menghancurkan Turret dan Altar milik musuh adalah 
                    tujuan utama dalam game ini, menghancurkan Altar musuh akan membuat tim kamu meraih 
                    kemenangan. Pastikan untuk memprioritaskan untuk menghancurkan Turret dan Tower sebelum 
                    mencari hero untuk dibunuh. Turret dan Altar akan menerima damage yang sangat kecil dari 
                    Hero bila tidak ada minion mereka di sekitarnya. Turret dan Altar juga menyerang dengan 
                    True Damage, dan damage tersebut akan bertambah untuk setiap serangan ke hero yang sama, 
                    jadi berhati-hatilah saat kamu masuk ke jarak tembaknya.
                    </Text>
                    <View style={styles.containera}>
                    <ImageZoom
                        cropHeight={250}
                        cropWidth={320}
                        imageWidth={320}
                        imageHeight={250}
                    >
                        <Image style= {styles.map} source = {require ('./img/turrent/tow.png')} />
                    </ImageZoom>
                    
                    <ImageZoom
                        cropHeight={200}
                        cropWidth={350}
                        imageWidth={'100%'}
                        imageHeight={'100%'}
                    >
                        <Image style= {styles.altar} source = {require ('./img/turrent/altar.png')} />
                    </ImageZoom>
                    </View>
                    
                    <Text style={styles.baseText}>Minion adalah pasukan yang menyerang lewat ketiga jalur 
                    menuju markas musuh. Mereka adalah pendukung tim mereka saat menyerang, memancing 
                    serangan dari Turret dan Altar, dan sebagai sumber Gold dan Experience untuk Hero.{"/n"}{"/n"}
                    Minion sangat penting dalam penyerangan markas musuh, karena tanpa mereka Turret 
                    dan Altar akan menerima damage yang sangat kecil dari Hero.</Text>
                    <View style={styles.containera}>
                    <Image style= {styles.minion} source = {require ('./img/turrent/infantry.png')}/>
                    <Text style={styles.minionText}>Infantry</Text>
                    </View>
                    <Text style={styles.baseText}>Minion yang menyerang dari jarak dekat. HPnya banyak, 
                    tapi damagenya kecil. Mereka berfungsi sebagai tank dalam pasukan minion, dan yang 
                    pertama diserang Turret</Text>
                    <View style={styles.containera}>
                    <Image style= {styles.minion} source = {require ('./img/turrent/lancer.png')}/>
                    <Text style={styles.minionText}>Lancer</Text>
                    </View>
                    <Text style={styles.baseText}>Minion yang menyerang dari jarak jauh. HPnya kecil, 
                    tapi damagenya lebih besar. Mereka berfungsi sebagai penyerang utama dalam pasukan 
                    minion, dan menembak Hero musuh yang tidak ditemani minionnya.</Text>
                    <View style={styles.containera}>
                    <Image style= {styles.minion} source = {require ('./img/turrent/cannon.png')}/>        
                    <Text style={styles.minionText}>Cannon</Text>
                    </View>
                    <Text style={styles.baseText}>Minion yang memiliki HP dan damage paling besar, 
                    dan juga dengan jarak tembak paling jauh. Tapi attack speednya kecil. Mereka 
                    berfungsi sebagai sumber damage utama kepada Turret dan Altar musuh dalam pasukan minion.{"/n"}{"/n"}
                    Cannon baru akan muncul setelah 3 menit dan 45 detik dalam game.</Text>
                    
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
    map :{
        width: 300,
        height: 200,
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
    tower :{
        resizeMode:'cover',
        height:350,
        width:280,
        
    },
    altar :{
         width: 350,
         height: 200,
        resizeMode:'cover',
        margin: 10,
        marginTop:10,
        paddingTop:10
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
    minionText:{
        fontSize: 14,
        textAlign: 'center',
        color: 'red',
        margin: 5,
    },
});