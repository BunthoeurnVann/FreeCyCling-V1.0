import React, {Component} from 'react';
import { View, Text } from 'react-native';
class Home extends Component{
    render(){
        return(
            <View>
                <Text onPress={()=>this.props.navigation.navigate('SignUp')}>SignUp</Text>
                <Text onPress={()=>this.props.navigation.navigate('Login')}>Login</Text>
            </View>
        )
    }
}
export default Home;