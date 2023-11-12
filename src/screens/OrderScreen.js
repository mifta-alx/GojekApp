import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowCircleDown2 } from 'iconsax-react-native'

const OrderScreen = () => {
  return (
      <View style={styles.container}>
          <View style={{ paddingHorizontal: 24, paddingVertical: 20, borderBottomColor: '#f5f5f5', borderBottomWidth: 0.0001, elevation: 0.2, justifyContent:'space-between', flexDirection:'row'}}>
              <Text style={{ color: '#000', fontSize: 20, fontWeight: 700 }}>Pesanan</Text>
              <ArrowCircleDown2 color='#929292' size={30} variant='Bold'/>
          </View>
      </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1)'
    }
})