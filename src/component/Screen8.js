import React, {Component} from 'react';
import {View,Text,Image,ScrollView,StyleSheet,ImageBackground, TouchableOpacity,Button} 
from 'react-native';
import {Container, Content, Header, Body, Left, Right} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Screen8 extends Component {
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
                        fontWeight: 'bold',marginTop: 10 }}> Tips & Trick </Text>
                        </Body>
                    </Header>
                <ImageBackground source={require('./img/yy.jpg')}
                style={styles.container}>
                <Content>
                    <ScrollView>
                    <View style={styles.containera}>
                    <ImageZoom cropHeight={210} cropWidth={310} imageHeight={200} imageWidth={300}>
                        <Image style= {styles.map} source = {require ('./img/tips_trick/logotips.png')}/>
                    </ImageZoom>
                    
                    </View>
                    <Text style={styles.baseText}>Dalam permainan Mobile Legend ada beberapa faktor 
                    yang dapat mempermudah dalam memperoleh kemenangan, berikut ini adalah beberapa faktor 
                    yang dapat di lakukan player untuk mempermudah dalam memperoleh kemenangan:
                    </Text>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>1. Pastikan Internet Stabil</Text></Text>
                    <Text style={styles.baseText}>
                    Sebagai game online yang banyak dimainkan di seluruh dunia, Mobile Legends memerlukan koneksi internet yang kencang dan stabil. 
                    Pasalnya jika Ping koneksi kamu di atas 200, maka akan lag dan bisa membuat kamu kalah saat bermain.
                    </Text>
                    <Image style= {styles.minion} source = {require ('./img/tips_trick/1fix.png')}/>
                    </View>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>2. Memiliki Tim</Text></Text>
                    <Text style={styles.baseText}>
                    Salah satu faktor yang dapat mempermudah dalam mendapat kemenangan adalah bermain bersama Tim 
                    kalian bisa mencari teman dan membuat tim, karna permainan mobile legend membutuhkan kerjasama dalam Tim,
                    jadi jika kalian kompak bermain bersama tim maka akan mempermudah dalam mendapatkan kemenangan. 
                    </Text>
                    <ImageZoom cropHeight={210} cropWidth={310} imageHeight={200} imageWidth={300}>
                        <Image style= {styles.map} source = {require ('./img/tips_trick/2.png')}/>
                    </ImageZoom>
                    
                    </View>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>3. Pilih Role Hero yang Tepat</Text></Text>
                    <Text style={styles.baseText}>
                    Memilih role hero atau hero juga dapat mempengaruhi kemenangan dalam permainan, kita harus memilih hero dan role yang Tepat
                    yang sesuai dengan kita atau dengan Tim kita.
                    </Text>
                    <ImageZoom cropHeight={180} cropWidth={330} imageHeight={170} imageWidth={320}>
                        <Image style= {styles.altar} source = {require ('./img/tips_trick/3.png')}/>
                    </ImageZoom>
                    
                    </View>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>4. Rotasi Penggunaan Hero</Text></Text>
                    <Text style={styles.baseText}>
                    Sebagai player mobile legend kita harus menguasai beberapa hero , karna semakin kita banyak menguasai hero yang berbeda 
                    kita akan lebih di untungkan dan kita juga tidak akan kewalahan jika dalam mode draft atau turnamen, hero favoritmu terkena ban. 
                    Jika kamu menguasai lebih dari tiga hero saja, akan menjadi keuntungan tersendiri!
                    </Text>
                    <ImageZoom cropHeight={210} cropWidth={310} imageHeight={200} imageWidth={300}>
                        <Image style= {styles.map} source = {require ('./img/tips_trick/4.png')}/>
                    </ImageZoom>
                    </View>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>5. Memilih Set Emblem yang tepat</Text></Text>
                    <Text style={styles.baseText}>
                    Emblem adalah semacam rune yang kamu pasang pada hero untuk membantumu dalam pertempuran. Emblem mungkin terkesan sepele efeknya, 
                    tapi setiap kenaikan sedikit status heromu itu akan sangat membantu! Pastikan kamu memakai emblem yang tepat untuk heromu. 
                    Memang terdapat set emblem untuk masing-masing tipe hero (fighter, mage, jungle, dll). 
                    Tetapi ada baiknya kamu melakukan riset emblem yang cocok untuk gaya permainanmu.
                    </Text>
                    </View>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>6. Memilih Battle Spell yang tepat</Text></Text>
                    <Text style={styles.baseText}>
                    Setiap Hero memiliki Ability atau Spell yang berbeda, sesuai karakternya masing-masing. Jadi, memilih spell dengan tepat juga dapat 
                    mempermudah dalam memenangkan permainan Mobile Legends, pastikan kamu memilih Hero, Emblem dan Spell yang tepat.
                    </Text>
                    </View>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>7. Memilih Item yang tepat</Text></Text>
                    <Text style={styles.baseText}>
                    Pemilihan Item yang tepat akan mempengaruhi jalannya permainan ,beli Item yang sesuai untuk Hero milikmu. 
                    Ada baiknya kamu kumpulkan uang yang kamu dapatkan untuk membeli Item yang mahal dan kuat. 
                    karena bonus yang diberikan dari item yang memiliki level tinggi akan memberikan dampak yang lebih besar contoh:
                    </Text>
                    <Image style= {styles.minion} source = {require ('./img/tips_trick/bf.png')}/>
                    <Text style={styles.minionText}>Item Attack</Text>
                    <Image style= {styles.minion} source = {require ('./img/tips_trick/gw.png')}/>
                    <Text style={styles.minionText}>Item Magic</Text>
                    <Image style= {styles.minion} source = {require ('./img/tips_trick/ba.png')}/>
                    <Text style={styles.minionText}>Item Armor</Text>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>8. Jangan Egois</Text></Text>
                    <Text style={styles.baseText}>
                    Faktor ini merupakan salah satu hal yang perlu di perhatikan, karna kerap para pemain sering kali egois dalam pengambilan keputusan
                    ingat ! bahwa ini adalah pertarungan antar tim yang memerlukan kerjasama, buang sikap egois dan bermain bersama tim kalian. 
                    </Text>
                    </View>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>9. Mengikuti META</Text></Text>
                    <Text style={styles.baseText}>
                    Meta (Most Effektive Tactic Available) merupakan strategi yang harus di ikuti karna dalam permainan moba META akan selalu berubah 
                    seiring berjalannya waktu, di setiap divisi rank pada mobile legend META berbeda-beda tidak sama karna tingkat kesulitannya juga berbeda.
                    </Text>
                    </View>
                    <View style={styles.button1}>
                    <Button style={styles.button} onPress={()=>this.props.navigation.navigate('Lima')}
                    title ='Divisi Rank' color ='red'/>
                    </View>
                    <Text style={styles.baseText}>klik di sini untuk melihat Divisi Rank</Text>
                    <View style={styles.containera}>
                    <Text style={styles.baseText}><Text style={{color: 'red'}}>10. Fokus Menghancurkan Tower</Text></Text>
                    <Text style={styles.baseText}>
                    tujuan utama dari game Mobile Legends ini adalah menghancurkan tower lawan. Karena itu, seranglah tower lawan selagi ada kesempatan. 
                    Percuma banyak membunuh Hero lawan jika akhirnya ternyata tower arenamu hancur duluan. 
                    siapa yang cepat menghancurkan Tower dialah yang akan menang.
                    </Text>
                    <ImageZoom cropHeight={210} cropWidth={310} imageHeight={200} imageWidth={300}>
                        <Image style= {styles.map} source = {require ('./img/tips_trick/9.png')}/>
                    </ImageZoom>
                    </View>
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
        width: 350,
        height: 280,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },
    altar :{
        width: 320,
        height: 170,
        margin: 5,
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