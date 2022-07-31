import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'

import Carousel from 'react-native-snap-carousel';


export default function BannerCarousel ({ imagesRaw }){
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const images = imagesRaw.map((item) => {
        const source = Image.resolveAssetSource(require('../assets/home/header.png'));
        const scaleFactor = source.width / windowWidth
        console.log(source)
        return {
            imagesrc: item.imagesrc,
            height: source.height / scaleFactor
        }
    })

    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(images);
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }) => (
        <View>
            <Image source={item.imagesrc}
                style={{
                    width: '100%',
                    height: item.height,
                }}
            />
        </View>
    ), []);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
                layout="default"
                ref={ref}
                data={carouselItems}
                sliderWidth={100}
                itemWidth={windowWidth}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
                autoplay={true}
                loop={true}
                autoplayInterval={5000}
                activeSlideAlignment={'center'}
            />
        </View>
    );
};