import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
class Proceed extends Component{
    render(){
        return(
            <View>
                <Text>Proceed</Text>
                <Button
                title={'Proceed'}
                onPress={()=>this.props.navigation.navigate('BottomNavigation')}
                />
            </View>
        )
    }
}
export default Proceed;