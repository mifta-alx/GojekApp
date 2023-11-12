import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MessageQuestion, Sms } from 'iconsax-react-native'

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 24, paddingVertical: 20, borderBottomColor: '#f5f5f5', borderBottomWidth: 0.0001, elevation: 0.2 }}>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 700 }}>Chat</Text>
            </View>
            <View style={{ paddingHorizontal: 24, paddingVertical: 20 }}>
                <Text style={{ color: '#000', fontSize: 12, fontWeight: 600 }}>Quick actions</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, gap: 30 }}>
                <View style={{ gap: 5, alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#F06400', borderRadius: 100, paddingVertical: 8, paddingHorizontal: 8 }}>
                        <Sms size={30} color='white' variant='Bold' />
                    </View>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: 400 }}>Inbox</Text>
                </View>
                <View style={{ gap: 5, alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#00AA13', borderRadius: 100, paddingVertical: 8, paddingHorizontal: 8 }}>
                        <MessageQuestion size={30} color='white' variant='Bold' />
                    </View>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: 400 }}>Help tickets</Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 24, paddingVertical: 20 }}>
                <Text style={{ color: '#000', fontSize: 12, fontWeight: 600 }}>Your chats</Text>
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1)'
    }
})