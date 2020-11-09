import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = () => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           
            <Ionicons size={25} name={'ios-star'}/>   
            <Text>Home Page</Text>
        </View>
    )
}
export default Home;