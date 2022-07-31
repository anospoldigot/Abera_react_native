import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// Image
import headerImage from '../assets/home/header.png';
import Surveyor from '../assets/home/surveyor.png';
import Chatbot from '../assets/home/chatbot.png';
import News from '../assets/home/news.png';

const screenWidth = Dimensions.get('window').width
import BannerCarousel from '../component/Carousel';



const imagesRaw = [
    {
        imagesrc: headerImage,
    },
    {
        imagesrc: headerImage,
    },
];


export default function Home() {


    return (
        <SafeAreaView>
            <View>
                <BannerCarousel imagesRaw={imagesRaw}/>
                <View>
                    <View style={styles.title}>
                        <Image style={{ marginRight: 10}} source={require('../assets/home/people.png')} />
                        <Text>Konsultasi & Pengaduan</Text>
                    </View>
                </View>
                <View style={styles.grid}>
                    <View style={styles.col}>
                        <Image style={styles.colIcon} source={Surveyor} />
                        <Text>Form Pengaduan</Text>
                    </View>
                    <View style={styles.col}>
                        <Image style={styles.colIcon} source={Chatbot} />
                        <Text>Konsultasi</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Informasi</Text>
                        <View style={styles.cardContent}>
                            <Image style={{marginRight: 15}} source={News} />
                            <View style={{ flexShrink: 1 }}>
                                <Text style={styles.cardTitle}>
                                    Peluncurun Jaringan 5G
                                </Text>
                                <Text style={{ fontSize: 10}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum nibh lectus, nec congue turpis dictum eget. Ut vel ultricies lorem. Sed porttitor ornare diam id molestie. Nulla blandit dui in mi feugiat, at mollis eros convallis. 
                                </Text>
                                <Text style={styles.allButton}>
                                    ALL
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    imageHeader: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
    },
    title: {
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 15,
        marginVertical: 15,
        borderRadius: 20,
        flexDirection: 'row'
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15
    },
    colIcon: {
        marginBottom: 10
    },
    col: {
        elevation: 4,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: (screenWidth / 2) - 30
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: '600',
        color: '#707070'
    },
    card: {
        backgroundColor: 'white',
        width: screenWidth - 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    cardTitle: {
        color: '#4166F5',
        fontWeight: 'bold',
        fontSize: 20
    },
    cardContent: {
        flexDirection: 'row',
    }, 
    allButton: {
        alignSelf: 'flex-end',
        backgroundColor: 'royalblue',
        color: 'white',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 10
    }
})