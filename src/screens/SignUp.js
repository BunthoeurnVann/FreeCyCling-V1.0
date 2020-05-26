import React, {Component} from 'react';
import { View, Text, Button} from 'react-native';
class Register extends Component{
    render(){
        return(
            <View>
                <Text>SignUp</Text>
                <Button
                title={'SignUp'}
                onPress={()=>this.props.navigation.navigate('Proceed')}
                />
                <Button
                title={'Login'}
                onPress={()=>this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}
export default Register;