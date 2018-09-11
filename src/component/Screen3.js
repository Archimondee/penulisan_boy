import React, {Component} from 'react';
import {View,Text,Image,Button,ScrollView,StyleSheet,ButtonGroup,ImageBackground,TouchableOpacity} from 'react-native';
import {Container, Content, Header, Body, Left, Right} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import ImageZoom from 'react-native-image-pan-zoom';


export default class Screen3 extends Component {
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
                        fontWeight: 'bold', marginTop: 10 }}> Set Emblem </Text>
                        </Body>
                    </Header>
                <ImageBackground source={require('./img/q.jpg')}
                style={styles.container}>
                <Content>
                <ScrollView>
                <View style={styles.containeraa}>
                    <ImageZoom cropHeight={200} cropWidth={370} imageHeight={200} imageWidth={350} >
                        <Image style= {styles.Starshards} 
                    source = {require ('./img/za.jpg')} />
                    </ImageZoom>
                        
                </View>
                <Text style={styles.baseText}>
                <Text><Text style={{color: 'red'}}>(i)</Text> Daftar Emblem dengan levelnya. 4 Emblem pertama gratis dibuka untuk 
                pemain, sementara untuk membuka Emblem ke-5 dan ke-6 memerlukan 
                200 Magic Dust/Diamond, dan Emblem ke-7 hingga ke-9 memerlukan 500
                Magic Dust/Diamond. {'\n'}{'\n'}
                <Text style={{color: 'red'}}>(ii)</Text>Daftar bonus atribut yang diberikan oleh Emblem yang dipilih. Tekan tombol
                 hijau di tengah untuk menaikkan level Emblem tersebut bila memiliki biaya yang cukup.{'\n'}{'\n'}
                 <Text style={{color: 'red'}}>(iii)</Text> Informasi detail Emblem yang dipilih. Bonus atribut maksimum yang diberikan, 
                 bonus tambahan di level berikutnya, serta bonus atribut setiap level kelipatan 10.{'\n'}{'\n'}
                 <Text style={{color: 'red'}}>(iv)</Text> Halaman talent yang digunakan pada emblem yang terpilih, gunakan tiket untuk 
                 menambah halaman yang dimiliki hingga 3 halaman maksimum. Halaman kedua membutuhkan 
                 100 tiket dan halaman ketiga membutuhkan 200 tiket. Starlight Member akan mendapatkan 
                 tambahan 1 halaman gratis.{'\n'}{'\n'}
                 <Text style={{color: 'red'}}>(v)</Text> Poin talent yang dimiliki, bertambah 1 poin setiap 5 level Emblem berikutnya 
                 (dimulai dari level 15). Maksimum poin yang dimiliki adalah 7 poin pada level 45.{'\n'}{'\n'}
                 <Text style={{color: 'red'}}>(vi)</Text> Daftar talent Tier 1 dan Tier 2, setiap talent dapat dinaikkan hingga level 3.
                 Talent Tier 1 baru akan terbuka setelah Emblem mencapai level 15, dan Tier 2 baru 
                 akan terbuka setelah menggunakan 3 poin pada talent Tier 1. Talent Tier 1 dan Tier 
                 2 masing-masing mendapatkan jatah maksimum 3 poin.{'\n'}{'\n'}
                 <Text style={{color: 'red'}}>(vii)</Text> Dafter talent Tier 3, kamu hanya bisa menggunakan 1 poin talent disini. 
                 Talent Tier 3 baru akan terbuka bila emblem sudah mencapai Level 20, 30, dan seterusnya.
                </Text>
                </Text>
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

    containeraa:{
        alignItems: 'center',
        flexGrow: 1,
        margin: 5,
        
    },
    Starshards: {
        width: 350,
        height: 200,
    },
    baseText:{
        fontSize: 14,
        textAlign: 'justify',
        color: 'white',
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        

    },
});