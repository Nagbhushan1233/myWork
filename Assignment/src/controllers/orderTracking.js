import React from "react"
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native"
class OrderTracking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderDetails: this.props.navigation.state.params
        }
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#003f5c'
            }}>
                {
                    this.state.orderDetails.index == 0 ? <Image
                        source={require('../assets/iPhone7.png')}
                        style={styles.orderImage} /> : (this.state.orderDetails.index  == 1 ? <Image
                            source={require('../assets/redmenote7.png')}
                            style={styles.orderImage} /> : <Image
                            source={require('../assets/samsungF41.png')}
                            style={styles.orderImage} />)

                }
                <View style={{ flexDirection: 'row', margin: 8, justifyContent: 'space-between' }}>
                    <Text style={styles.orderTitle}>{this.state.orderDetails.title}</Text>
                    <Text style={styles.orderId}>{this.state.orderDetails.orderId}</Text>
                </View>
                <Text style={{
                    alignSelf: 'center',
                    color: 'red',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>{this.state.orderDetails.price}</Text>
                <Image source={require('../assets/orderStatus.png')}
                    style={{ width: 300, height: 200, marginTop: 10, alignSelf: 'center', resizeMode: 'contain' }} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
    },
    orderImage: {
        width: 300,
        height: 300,
        margin: 8,
        alignSelf: 'center'
    },
    orderTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    orderId: {
        color: 'grey',
        fontSize: 13,
        marginBottom: 2
    },
    price: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2
    }
})
export default OrderTracking;