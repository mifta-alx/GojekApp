import React from 'react';
import { Text, View, Image } from 'react-native';
import {
    SearchNormal1,
    User,
    Wallet2,
    ArrowUp,
    Document,
    MoreCircle,
    Home,
    DiscountShape,
    MessageText1,
    ClipboardText,
    Add,
    Star1,
} from 'iconsax-react-native';
export default function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    borderBottomEndRadius: 15,
                    borderBottomStartRadius: 15,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999,
                }}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <View
                        style={{
                            backgroundColor: '#F5F5F5',
                            flex: 1,
                            borderRadius: 25,
                            borderWidth: 1,
                            borderColor: '#ced4da',
                            alignItems: 'center',
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            gap: 10,
                        }}>
                        <SearchNormal1 size={24} variant="Linear" color="#495057" />
                        <Text style={{ color: '#495057' }}>
                            Cari Layanan, makanan, & tujuan
                        </Text>
                    </View>
                    <View
                        style={{
                            padding: 10,
                            borderRadius: 100,
                            borderWidth: 1.5,
                            borderColor: '#ced4da',
                        }}>
                        <User size={24} variant="Bold" color="#00AA13" />
                    </View>
                </View>
            </View>
            <Image
                style={{ height: 280, width: '100%', marginBottom: 60 }}
                source={{
                    uri: 'https://images.unsplash.com/photo-1607929680208-0528b0039b43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
                }}
            />
            <View
                style={{
                    borderRadius: 20,
                    backgroundColor: 'white',
                    position: 'absolute',
                    zIndex: 999,
                    left: 20,
                    right: 20,
                    top: 240,
                    paddingHorizontal: 20,
                    paddingVertical: 14,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,

                    elevation: 2,
                }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View
                        style={{
                            backgroundColor: '#F5F5F5',
                            borderRadius: 25,
                            padding: 5,
                            justifyContent: 'center',
                        }}>
                        <Wallet2 size={24} variant="Bold" color="#00AED6" />
                    </View>
                    <View>
                        <Text style={{ color: 'black', fontWeight: 800 }}>Rp29.303</Text>
                        <Text style={{ color: '#444648', fontWeight: 500 }}>0 Coins</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ArrowUp size={24} variant="Bold" color="#00AED6" />
                        <Text style={{ color: 'black', fontWeight: 500 }}>Bayar</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Document size={24} variant="Bold" color="#00AED6" />
                        <Text style={{ color: 'black', fontWeight: 500 }}>Riwayat</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MoreCircle size={24} variant="Bold" color="#00AED6" />
                        <Text style={{ color: 'black', fontWeight: 500 }}>Lainnya</Text>
                    </View>
                </View>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: 800, color: '#000000', fontSize: 20, marginBottom: 10 }}>
                    Kasih rating dulu, yuk!
                </Text>
                <View
                    style={{
                        backgroundColor: 'fff',
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        borderWidth: 0.5,
                        borderRadius: 20
                    }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Add
                            size={30}
                            color="#000"
                            variant="Linear"
                            style={{ transform: [{ rotate: '45deg' }] }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <Image
                            style={{ width: 80, height: 100 }}
                            source={{
                                uri: 'https://images.unsplash.com/photo-1607929680208-0528b0039b43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
                            }}
                        />
                        <View>
                            <Text style={{ fontWeight: 600, color: '#000', fontSize: 18 }}>
                                Kasih rating ke driver?
                            </Text>
                            <Text style={{ fontWeight: 400, color: '#000' }}>
                                Domino's Pizza - Dinoyo Malang
                            </Text>
                            <Text style={{ fontWeight: 400, color: '#000' }}>08 Okt 19:27</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}
                            >
                                <Star1 color='#ced4da' variant='Linear' size={30} />
                                <Star1 color='#ced4da' variant='Linear' size={30} />
                                <Star1 color='#ced4da' variant='Linear' size={30} />
                                <Star1 color='#ced4da' variant='Linear' size={30} />
                                <Star1 color='#ced4da' variant='Linear' size={30} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* <View style={{ bottom: 10, right: 40, left: 40, position: 'absolute' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View
                        style={{
                            alignItems: 'center',
                            gap: 5,
                        }}>
                        <Home variant="Bold" size={30} color="#00AA13" />
                        <Text style={{ color: '#444648', fontSize: 12, fontWeight: 600 }}>
                            Beranda
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', gap: 5 }}>
                        <DiscountShape variant="Bold" size={30} color="#444648" />
                        <Text style={{ color: '#444648', fontSize: 12, fontWeight: 400 }}>
                            Promo
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', gap: 5 }}>
                        <ClipboardText variant="Bold" size={30} color="#444648" />
                        <Text style={{ color: '#444648', fontSize: 12, fontWeight: 400 }}>
                            Pesanan
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', gap: 5 }}>
                        <MessageText1 variant="Bold" size={30} color="#444648" />
                        <Text style={{ color: '#444648', fontSize: 12, fontWeight: 400 }}>
                            Chat
                        </Text>
                    </View>
                </View>
            </View> */}
        </View>
    );
}
