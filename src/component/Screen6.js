import React, {Component} from 'react';
import {View,Text,Image,ScrollView,StyleSheet,ImageBackground,TouchableOpacity,Button} from 'react-native';
import {Container, Content, Header, Body, Left, Right} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Screen6 extends Component {
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
                        fontWeight: 'bold', marginTop: 10 }}> Buff & Jungle </Text>
                        </Body>
                    </Header>             
                <ImageBackground source={require('./img/yy.jpg')}
                style={styles.container}>
                <Content>
                <ScrollView>
                <View style={styles.containera}>
                    <ImageZoom cropHeight={250} cropWidth={370} imageHeight={240} imageWidth={360}>
                        <Image style= {styles.monster} 
                    source = {require ('./img/buff_jungle/monstjung.png')} />
                    </ImageZoom>
                    <ImageZoom cropHeight={80} cropWidth={80} imageHeight={70} imageWidth={70}>
                        <Image style= {styles.monsterjungle} 
                    source = {require ('./img/buff_jungle/giantmouth.png')} />
                    </ImageZoom>
                    <Text style={{color: 'white'}}>(i) </Text>
                    <Text style={{color: 'white'}}> Giant Mouth</Text>
                    <ImageZoom cropHeight={80} cropWidth={80} imageHeight={70} imageWidth={70}>
                        <Image style= {styles.monsterjungle} 
                    source = {require ('./img/buff_jungle/ghosmage.png')} />
                    </ImageZoom>
                    <Text style={{color: 'red'}}>(ii) </Text>
                    <Text style={{color: 'white'}}> Ghost Mage</Text>
                    <ImageZoom cropHeight={80} cropWidth={80} imageHeight={70} imageWidth={70}>
                        <Image style= {styles.monsterjungle} 
                    source = {require ('./img/buff_jungle/goblin.png')} />
                    </ImageZoom>
                     <Text style={{color: 'green'}}>(iii) </Text>
                     <Text style={{color: 'white'}}> Goblin</Text>
                    </View>
                    <Text style={styles.baseText}>Monster jungle plaing lemah. Mereka adalah target 
                    yang empuk untuk hero kamu di saat kamu sedang tidak ada di lane, karena mereka 
                    memberikan sejumlah Gold dan Experience yang lumayan. Mereka juga memberikan buff 
                    singkat yang menyembuhkan Hero kamu untuk sementara.
                    Regen Buff - Memulihkan HP dan Mana selama 2 detik{'/n'}{'/n'}
                    Muncul pertama kali pada 30 detik pertama{'/n'}
                    Waktu muncul kembali 120 detik setelh monster mati</Text>
                    <View style={styles.containera}>
                    <ImageZoom cropHeight={250} cropWidth={370} imageHeight={240} imageWidth={360}>
                        <Image style= {styles.monster} 
                    source = {require ('./img/buff_jungle/mapspin.png')} />
                    </ImageZoom>
                    <Image style= {styles.monsterjungle} 
                    source = {require ('./img/buff_jungle/reaper.png')} />
                     <Text style={{color: 'yellow'}}>(iv) </Text>
                     <Text style={{color: 'white'}}> Reaper</Text>
                     <Image style= {styles.monsterjungle} 
                    source = {require ('./img/buff_jungle/Spinner.png')} />
                     <Text style={{color: 'purple'}}>(v) </Text>
                     <Text style={{color: 'white'}}> Spiner</Text>
                     </View>   
                    <Text style={styles.baseText}>Reaper & Spinner adalah dua monster jungle yang 
                    memberikan buff yang kuat kepada hero yang membunuhnya, di samping tambahan Gold 
                    dan Experience. Yang membuat mereka spesial adalah buff ini bergantung pada role 
                    hero yang menerimanya, jadi hero dengan role berbeda akan mendapatkan buff yang 
                    berbeda pula.{'/n'}{'/n'} Tambahan: Spinner ditemani oleh Spider yang dikategorikan 
                    sebagai monster jungle normal{'/n'}{'/n'} Role Buff - Mendapatkan buff sesuai dengan 
                    role Hero yang mendapatkannya, berdurasi 120 detik</Text>

                    <View style={styles.button1}>
                    <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Tujuh')}
                    title ='Info Buff' color ='red'/>
                    </View>
                    <Text style={styles.baseText}>klik di sini untuk melihat info buff</Text>

                    <View style={styles.containera}>
                    <ImageZoom cropHeight={250} cropWidth={370} imageHeight={240} imageWidth={360}>
                        <Image style= {styles.monster} 
                    source = {require ('./img/buff_jungle/mapgold.png')} />
                    </ImageZoom>
                    <Image style= {styles.monsterjungle} 
                    source = {require ('./img/buff_jungle/gold.png')} />
                    <Text style={{color: 'gold'}}>(vi) </Text>
                    <Text style={{color: 'white'}}>Crab</Text>
                    </View>
                    <Text style={styles.baseText}>Crab adalah monster jungle yang unik, karena selain 
                    memberikan bonus Gold dan Experience saat dibunuh, dia juga memberikan buff bonus 
                    pertambahan Gold selama beberapa waktu kepada hero yang membunuhnya. Karena itulah 
                    monster ini sangat sering diincar oleh semua player dalam game dan mereka hampir 
                    selalu diserang setiap muncul.{'/n'}{'/n'}
                    Gold Buff - Mendapatkan 10 Gold setiap 2 detik selama 30 detik {'/n'}{'/n'}
                    Muncul pertama kali pada 60 detik pertama{'/n'}
                    Waktu muncul kembali 180 detik setelh monster mati</Text>
                    <ImageZoom cropHeight={250} cropWidth={370} imageHeight={240} imageWidth={360}>
                        <Image style= {styles.monster} 
                    source = {require ('./img/buff_jungle/mapturt.png')} />
                    </ImageZoom>
                    <ImageZoom cropHeight={250} cropWidth={370} imageHeight={240} imageWidth={360}>
                        <Image style= {styles.monster} 
                    source = {require ('./img/buff_jungle/turt_lord.png')} />
                    </ImageZoom>
                    <Text style={styles.baseText}>Turtle dan Lord adalah monster terkuat di dalam game, 
                    mereka sangat sulit untuk dikalahkan dan dapat menimbulkan damage yang sangat besar 
                    ke Hero kamu. Tapi keduanya memberikan bonus Gold dan Experience yang sangat besar 
                    kepada seluruh tim yang berhasil mengalahkannya, oleh karena itu kedua monster ini 
                    sering menjadi pusat teamfight karena kedua tim saling berebut kesempatan untuk 
                    mengalahkan mereka.{'/n'}{'/n'} 
                    Turtle hanya akan ada di map selama 6 menit, dan setelah itu akan digantikan oleh Lord 
                    yang lebih kuat. Turtle dan Lord akan muncul dan hidup kembali di lokasi yang random 
                    antara dua pula tempat mereka muncul, dengan pengecualian saat Lord muncul pertama kali 
                    dan langsung menggantikan posisi Turtle.</Text>
 
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
        justifyContent:'center',
        flexGrow: 1,
        margin: 5,    
    },
    monster :{
        width: 360,
        height: 240,
        margin: 5,
    },
    baseText:{
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,  
    },
    monsterjungle :{
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
    monsterText:{
        fontSize: 14,
        textAlign: 'center',
        color: 'red',
        margin: 5,
    },    
    button1:{
        shadowColor : 'white',
        flexDirection: 'row',
        margin : 5,
        alignItems: 'center',
        justifyContent:'center',
        
    },
});