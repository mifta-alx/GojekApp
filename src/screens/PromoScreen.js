import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PromoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 24, paddingVertical: 20, borderBottomColor: '#f5f5f5', borderBottomWidth: 0.0001, elevation: 0.2 }}>
        <Text style={{ color: '#000', fontSize: 20, fontWeight: 700 }}>Promo</Text>
      </View>
    </View>
  )
}

export default PromoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)'
  }
})