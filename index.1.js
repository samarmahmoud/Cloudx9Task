import React, { Component } from 'react';
import {
  View,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Header, RoundImage } from '../../common';
import { connect } from 'react-redux';
import { styles } from './styles';
import { Button } from '../../common';
import { APIConstans } from '../../../actions/APIConstans';
import { strings } from '../../../Global/Localization/Strings';
import { Colors } from '../../../Global/colors';
import { DeletItem } from '../../../actions/CartAction'
import NavigationService from '../../../Navigations/NavigationService'
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {EmptyCar} from '../../../Assets/Svg'
class Cart extends Component {
  state = {
    totalTaxes: 0,
    OrderItems: this.props.cartItem,
    received_Type: [{
      label: 'Delivery', value: 0
    },
    {
      label: 'Pickup', value: 1
    },],
    SelectedreceivedType: 0
  }
  calculateTaxes() {
    total = 0;
    for (let i = 0; i < this.props.cartItem.length; i++) {
      total += parseFloat(this.props.cartItem[i].totalprice.addtionalPrice) + parseFloat(this.props.cartItem[i].totalprice.ItemPrice)
    }

    return total;
  }
  calculateToatal = () => {

    totalAmount = 0
    for (let i = 0; i < this.props.cartItem.length; i++) {
      totalAmount += parseFloat(this.props.cartItem[i].totalprice.ItemPrice) + parseFloat(this.props.cartItem[i].totalprice.addtionalPrice)
      totalAmount += (totalAmount * parseFloat(this.props.restaurant.sales_taxes) / 100)
    }
    if (this.state.SelectedreceivedType == 0) {
      totalAmount += parseFloat(this.props.restaurant.delivery_fee)
    }

    return totalAmount.toFixed(2)
  }
  renderItem(item, index) {
    cartItem=item.item
    image = cartItem.mainImage === undefined ? cartItem.image : cartItem.mainImage
    itemName = cartItem.name == undefined ? cartItem.item : cartItem.name
    return (
      <View style={styles.RowContainter} >
        <View style={styles.ContainerStyle}>

          <View style={{ flexDirection: 'row', width: '100%' ,  marginTop: 10,}}>
            <RoundImage source={{ uri: APIConstans.IMAGE_PATH + image }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.TextName}>{itemName}</Text>
              <Text style={[styles.Text, { width: '30%' }]}>{cartItem.description}</Text>
              <View style={{ marginTop:10,flexDirection:'row',width: '40%',flexWrap:'wrap'}}>
              {item.options.length > 0 &&

                <Text style={styles.TextName}>{"Options  "}</Text>
              }
              </View>
              {item.options.map((opt) => {
                return (
                  <View style={{flexDirection:'row'}}>
                   <Text style={[styles.Text]}>{opt.name+ " : "}</Text>
                  {opt.optionList.map((obj,key) => {
                    return (
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.Text]}>{obj.label}</Text>
                        {key!=(opt.optionList.length-1)&&
                        <Text style={[styles.Text]}>{", "}</Text>
                        }
                      </View>

                    )
                  })}
                  </View>)
              })}
            
              <View style={{ flexDirection: 'row' ,marginTop:10}}>
                <View style={{ justifyContent: 'center', margin: 5 }}>
                  <Text style={styles.TextName}>{"Quantity"}</Text>
                  <Text style={styles.Text}>{item.quanty}</Text>
                </View>
                <View style={{ justifyContent: 'center', margin: 10 }}>
                  <Text style={styles.TextName}>{"Price"}</Text>
                  <Text style={styles.Text}>
                    {(item.totalprice.ItemPrice).toFixed(2) + ' $'}
                  </Text>
                </View>
                <View style={{ justifyContent: 'center', margin: 10 }}>
                  <Text style={styles.TextName}>{"Additional Price"}</Text>
                  <Text style={styles.Text}>
                    {(item.totalprice.addtionalPrice).toFixed(2) + ' $'}
                  </Text>
                </View>
              </View>
            </View>
          
          </View>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            <Button
              button={{ width: '40%', backgroundColor: Colors.AppColor }}
              color={{ color: Colors.WhiteColor }}
              title={'Edit'}
              onPress={() => { this.props.navigation.navigate('ItemDetails', { Item: cartItem, quanty: item.quanty,options: item.options,edit:true}) }}
            />
            <Button
              button={{ width: '40%', backgroundColor: Colors.AppColor }}
              color={{ color: Colors.WhiteColor }}
              title={'Delete'}
              onPress={() => {
                Alert.alert(
                  '',
                  `Are you sure you want to delete ${this.props.cartItem[index].item.name} from your order?`,
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    { text: 'OK', onPress: () => this.props.DeletItem(index) },
                  ],
                  { cancelable: false },
                );

                // this.setState({
                //   OrderItems:this.state.OrderItems.filter(o=>o!==item)
                // })
              }}
            />
          </View>
        </View>
      </View>

    );
  }
  render() {
    console.log("cartItem", this.props.cartItem);

    return (
      <View style={styles.container}>
        <Header
          menuIcon={true}
          BackButton={false}
          onPressLeft={() => this.props.navigation.toggleDrawer()}
        />
        {this.props.cartItem.length > 0 && (
          <ScrollView contentContainerStyle={{paddingBottom:'5%'}} showsVerticalScrollIndicator={false}>
            <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom:'5%', marginTop: '2%' ,backgroundColor:'#ddd'}}
              data={this.props.cartItem}
              ItemSeparatorComponent={() => {
                return <View style={{ height: 12 }} />;
              }}
              renderItem={({ item, index }) => this.renderItem(item, index)}
              keyExtractor={index => index.toString()}
    
            />


            <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-around', alignSelf: 'center' }}>
              <RadioForm formHorizontal={true} animation={true}>
                {this.state.received_Type.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.SelectedreceivedType === i}
                      onPress={value => {
                        this.setState({ SelectedreceivedType: value }, () => {
                          console.log(this.state.SelectedreceivedType);

                        })

                      }}
                      borderWidth={1}
                      buttonInnerColor={Colors.AppColor}
                      buttonOuterColor={'#000'}
                      buttonSize={13}
                      buttonOuterSize={18}
                      buttonStyle={{}}
                      buttonWrapStyle={{ marginLeft: 10 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={value => this.setState({ SelectedreceivedType: value })}
                      labelStyle={{ fontSize: 16, color: Colors.DarkColor }}
                      labelWrapStyle={{ marginLeft: 10 }}
                    />
                  </RadioButton>
                ))}
              </RadioForm>

            </View>

            <View
              style={{
                alignItems: 'center',
                marginTop: '1%',
                justifyContent: 'space-between',
              }}>
              <View
                style={[
                  { width: '95%', padding: '3%', backgroundColor:Colors.WhiteColor, alignSelf: 'center' }
                ]}>
                {this.state.SelectedreceivedType == 0 &&
                  <Text style={[styles.Text, { color: Colors.DarkColor, fontSize: 16 }]}>
                    {'Delivery Fees : ' + this.props.restaurant.delivery_fee + ' $'}
                  </Text>
                }
                <Text style={[styles.Text, { color: Colors.DarkColor, fontSize: 16 }]}>
                  {'Sales Taxes : ' +
                    parseFloat
                      ((this.calculateTaxes() *
                        (parseFloat(this.props.restaurant.sales_taxes) / 100)

                      ).toFixed(2)).toString() +
                    ' $'}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.Text, { color: Colors.DarkColor, fontSize: 16 }]}>{'Ready in'}</Text>
                  <Text style={[styles.Text, { marginLeft: '1%', color: Colors.DarkColor, fontSize: 16 }]}>
                    {this.props.restaurant.order_time + ' minutes'}
                  </Text>
                </View>
                {this.state.SelectedreceivedType == 0 &&
                  <View
                    style={{ flexDirection: 'row', alignItems: 'space-between' }}>
                    <Text style={[styles.Text, { color: Colors.DarkColor, fontSize: 16 }]}>{'Delivery time'}</Text>
                    <Text style={[styles.Text, { marginLeft: '1%', color: Colors.DarkColor, fontSize: 16 }]}>
                      {this.props.restaurant.minimum_delivery + ' minutes'}
                    </Text>
                  </View>
                }
              </View>
            </View>

          
        
        
          <View >
             
              
            <View style={[{ width: '80%', padding: '3%', backgroundColor: '#2e7d32', alignSelf: 'center', alignItems: 'center' }]}>
              {console.log(this.calculateToatal())}

              <Text style={{ color: Colors.WhiteColor, fontSize: 18 }} >
                {"Total Price " + this.calculateToatal().toString() + ' $'}
              </Text>
            </View>
            <Button
              button={{ width: '90%', backgroundColor: Colors.AppColor, alignSelf: 'center' }}
              color={{ color: Colors.WhiteColor }}
              title={"Proceed to payment "}
              disabled={this.props.restaurant.delivery == 1 ? false : true}
              onPress={() => {
                if (this.props.user != null) {
                  this.props.navigation.navigate('confirmOrder', { receivedType: this.state.SelectedreceivedType == 0 ? 1 : 2 })
                }
                else {
                  NavigationService.navigate('Login')
                }

              }}
            />
          </View>
          
          </View>
           </ScrollView>
        )}
        {this.props.cartItem.length == 0 &&
          <View style={{ alignItems: 'center', marginTop: '20%', alignSelf: 'center' }}>
            <EmptyCar />
            <Text style={[styles.Text, { fontSize: 20, marginTop: 30 , lineHeight: 20}]}>{"Your cart is empty. Let's fill it"}</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')}>
              <Text style={[styles.Text, { fontSize: 18, marginTop: 20, color: Colors.AppColor }]}>{"Menu"}</Text>
            </TouchableOpacity>

          </View>
        }

      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartItem: state.Cart.CartItems,
    quanty: state.Cart.quntity,
    totalPrice: state.Cart.price,
    options:state.Cart.options,
    restaurant: state.User.restaurantInfo,
    user: state.User.userId,
  };
};

export default connect(
  mapStateToProps,
  { DeletItem },
)(Cart);
