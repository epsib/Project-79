import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from 'react-native';
import StarMap from './StarMap';

class Home extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <SafeAreaView style={{marginTop:Platform.OS==="android"?StatusBar.currentHeight:0}}/>
                <ImageBackground source={require('../assets/stars.gif')} style={styles.bg}>
                    
                 <Text style={styles.title}>Stellar App</Text>
                 <View><Image style={styles.titleimg}source={require('../assets/main-icon.png')}></Image></View>
                 <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate("SpaceCrafts")}}>
                     <Text style={styles.btntext}>Space Crafts</Text>
                     <Image source={require('../assets/spacecraft.png')} style={styles.img}></Image>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate("StarMap")}}>
                     <Text style={styles.btntext}>Star Map</Text>
                     <Image source={require('../assets/star_map.png')} style={styles.img}></Image>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={styles.btn} onPress={()=>{this.props.navigation.navigate("DailyPic")}}>
                     <Text style={styles.btntext}>Daily Pictures</Text>
                     <Image source={require('../assets/photo.png')} style={styles.img}></Image>
                 </TouchableOpacity>



                </ImageBackground>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg:{flex:1, resizeMode:'cover'},
    title:{fontSize:30, textAlign:'center', fontWeight:'bold', color:'white' },
    btn:{alignItems:'center', width:200, height:100, marginTop:100, backgroundColor:'rgba(161, 217, 255, 1)', borderWidth:2, borderColor:'white', borderRadius:100},
    btntext:{color:'black', fontWeight:'bold'},
    img:{width:75, height:75, marginTop:-1},
    titleimg:{alignItems:'center', justifyContent:'center', width:100,height:100, marginLeft:50, marginBottom:-70}
})
export default Home;