import React from "react"
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native"
class Orders extends React.Component {
    constructor(props){
        super(props)
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "transparent",
                }}
            />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { "title": 'iPhone 7', "orderId": "OID987654321", "price": "₹50,0000" },
                        { "title": 'Redme Note7 Pro', "orderId": "OID567891011", "price": "₹12,000" },
                        { "title": 'Samsung Galaxy F41', "orderId": "OID432156789", "price": "₹14,000" },
                    ]}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                        onPress={()=>{
                            item.index = index;
                            this.props.navigation.navigate('orderTracking',item)
                        }}
                        >
                            <View style={styles.orderItemView}>
                                {
                                    index == 0 ? <Image
                                        source={require('../assets/iPhone7.png')}
                                        style={styles.orderImage} /> : (index == 1 ? <Image
                                            source={require('../assets/redmenote7.png')}
                                            style={styles.orderImage} /> : <Image
                                            source={require('../assets/samsungF41.png')}
                                            style={styles.orderImage} />)

                                }
                                <View style={styles.orderDetailsView}>
                                    <Text style={styles.orderTitle}>{item.title}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                    <Text style={styles.orderId}>{item.orderId}</Text>
                                </View>
                                <Image source={require('../assets/arrow.png')} style={styles.arrow} />
                            </View>
                        </TouchableOpacity>
                    }
                    ItemSeparatorComponent={this.renderSeparator}
                    style={{marginTop:5}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
    },
    orderItemView: {
        margin: 5,
        backgroundColor: '#fff',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center'
    },
    orderImage: {
        width: 100,
        height: 100,
        margin: 8
    },
    orderTitle: {
        color: '#000',
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
    },
    orderDetailsView: {
        flexDirection: 'column',
    },
    arrow: {
        width: 25,
        height: 25,
        position: 'absolute',
        end: 0
    }
})
export default Orders;