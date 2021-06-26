import React from 'react';
import { Alert, StyleSheet, Text, View, ImageBackground, TouchableOpacity, Linking, Image } from 'react-native';
import axios from 'axios'


class DailyPic extends React.Component{
    constructor(){
      super();
      this.state={
          apod:{}
      }
    }

    componentDidMount(){this.getAPOD()}

    getAPOD=()=>{
       axios.get("https://api.nasa.gov/planetary/apod?api_key=Lat7cRkHrhNp1jwz0VU16gzYu9h0AyT26BOPiWll")
       .then(response=>{this.setState({apod:response.data})})
       .catch(error=>{Alert.alert(error.message)})
    }
    render(){
        if (Object.keys(this.state.apod).length===0){
            return(<Text>Loading...</Text>)
        }
        else{
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ImageBackground source={require('../assets/space.gif')} style={styles.bimg}>
                <Text style={{color:'white'}}>Astronomy Pic of the Day</Text>
                <Text style={styles.title}>{this.state.apod.title}</Text>
                <TouchableOpacity  onPress={()=> Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>            
                   <View><Text style={{color:'white'}}>Pic of the Day</Text><Image source={require('../assets/play-video.png')} style={{width:50, height:50, alignSelf:'center', marginTop:30}}/></View>
                </TouchableOpacity>
                <View style={{backgroundColor:'white', marginTop:30}}><Text style={{textAlign:'center', }}>{this.state.apod.explanation}</Text></View>
                </ImageBackground>
            </View>
        )
        }
    }
}

const styles = StyleSheet.create({
    bimg:{flex:1, resizeMode:'cover'},
    title:{fontSize:30, textAlign:'center', fontWeight:'bold', color:'white'}
})

export default DailyPic;