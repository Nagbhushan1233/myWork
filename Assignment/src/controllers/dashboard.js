import React from "react"
import {
    View,
    TouchableOpacity,
    Image,
    Text
} from "react-native"
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        title: "Dashboard",
        headerRight: <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image
                source={require('../assets/logout.png')}
                style={{ width: 25, height: 25, marginRight: 8 }}
            /></TouchableOpacity>
    });
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#003f5c' }}>
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('orders')}}
                    style={{width:100,
                        height:100,
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        borderWidth:2,
                        borderRadius:5,
                        borderColor:'#fff',
                    alignItems:'center'}}>
                    <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:15}}>Orders</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Dashboard;