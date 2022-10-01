import React from "react"
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList
} from "react-native"
class OrderTracking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderDetails: this.props.navigation.state.params
        }
    }
    componentDidMount() {
        let customAttributes = this.props.navigation.state.params.custom_attributes;
        let imageAttribute = customAttributes.filter(element => {
            return element.attribute_code == "image";
        });
        let YOUR_IMAGE_URI = `https://uat.grandiose.ae/media/catalog/product` + imageAttribute[0].value;
        this.setState({
            productImageURI: YOUR_IMAGE_URI
        })
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "grey",
                }}
            />
        );
    };
    getItemTitle(attributeCode) {
        switch (attributeCode) {
            case 'meta_title':
                return "Name";
                break;
            case 'cost':
                return "Cost";
                break;
            case 'qty_per_uom':
                return "Quantity";
                break;
            case 'erp_item_no':
                return "Item No";
                break;
            case 'ts_country_of_origin':
                return "Country";
                break;
            case 'pack_weight_info':
                return "Package Weight Info";
                break;
            default:
                break;
        }
    }
    renderItemView(item) {
        if (this.getItemTitle(item.attribute_code)) {
            return (
                <View style={styles.attributeView}>
                    <Text style={styles.itemTitle}>{this.getItemTitle(item.attribute_code)}</Text>
                    <Text style={styles.itemValue}>{item.value}</Text>
                </View>
            )
        } else return null;

    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#003f5c'
            }}>
                <Image
                    style={styles.orderImage}
                    source={
                        {
                            uri: this.state.productImageURI ? this.state.productImageURI : "",
                            headers: {
                                Authorization: 'Bearer 3ogqzxcpd6teaww79puqjiibgbcy11a1'
                            }
                        }
                    } />
                {/*<View style={{ flexDirection: 'row', margin: 8, justifyContent: 'space-between' }}>
                    <Text style={styles.orderTitle}>{this.state.orderDetails.name}</Text>
                    <Text style={styles.orderId}>{this.state.orderDetails.sku}</Text>
                </View>
                <Text style={{
                    alignSelf: 'center',
                    color: 'red',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>{"$ " + this.state.orderDetails.price}</Text>*/}
                <FlatList
                    data={this.state.orderDetails.custom_attributes}
                    renderItem={({ item, index }) => this.renderItemView(item)}
                    ItemSeparatorComponent={this.renderSeparator}
                    style={{ marginTop: 5, backgroundColor: "transparent" }}
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
    attributeView: {
        flexDirection: "row",
        //justifyContent: "space-between",
        backgroundColor:"#fff",
        alignItems:'center',
        height:60
    },
    orderImage: {
        width: 300,
        height: 300,
        margin: 8,
        alignSelf: 'center'
    },
    itemTitle: {
        color: '#000',
        fontSize: 15,
        fontWeight:"bold",
        marginLeft:8,
        marginRight:15,
        alignContent:"center"
    },
    itemValue: {
        color: '#000',
        fontSize: 15,
        marginBottom: 2,
        marginRight:8,
    }
})
export default OrderTracking;