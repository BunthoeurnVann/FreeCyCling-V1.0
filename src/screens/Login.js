import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
class Login extends Component{
    render(){
        return(
            <View>
                 <Text>Login</Text>
                <Button
                title={'Login'}
                onPress={()=>this.props.navigation.navigate('BottomNavigation')}
                />
                <Button
                title={'SignUp'}
                onPress={()=>this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}
export default Login;