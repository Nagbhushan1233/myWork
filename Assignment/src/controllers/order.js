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
    constructor(props) {
        super(props)
        this.state={
            products:[]
        }
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

    componentDidMount() {
        fetch('https://uat.grandiose.ae/rest/V1/products/6291030200070', {
            method:'GET',
            credentials: 'include',
            headers: {
                Authorization:"Bearer 3ogqzxcpd6teaww79puqjiibgbcy11a1",
                'Content-Type': "application/json"
            },
            
        }).then(resp => resp.json())
        .then(json => {
            const productArray = [json];
            this.setState({products:productArray})
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.products}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            onPress={() => {
                                item.index = index;
                                this.props.navigation.navigate('orderTracking', item)
                            }}
                        >
                            <View style={styles.orderItemView}>
                                {
                                    this.state.products && <Image
                                    style={styles.orderImage}
                                    source={
                                        {
                                            uri: `https://uat.grandiose.ae/media/catalog/product` + this.state.products[index].media_gallery_entries[0].file, 
                                            headers: {
                                                Authorization: 'Bearer 3ogqzxcpd6teaww79puqjiibgbcy11a1'
                                            }
                                        }
                                    } />

                                }
                                <View style={styles.orderDetailsView}>
                                    <Text style={styles.orderTitle}>{item.name}</Text>
                                    <Text style={styles.price}>{item.sku}</Text>
                                    <Text style={styles.orderId}>{'$ '+item.price}</Text>
                                </View>
                                <Image source={require('../assets/arrow.png')} style={styles.arrow} />
                            </View>
                        </TouchableOpacity>
                    }
                    ItemSeparatorComponent={this.renderSeparator}
                    style={{ marginTop: 5 }}
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
        width:200,
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