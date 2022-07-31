import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Auth({ navigation }) {

	const handleMasuk = () => {
		navigation.navigate('Login')
	}

	return (
		// <SafeAreaView>
			<View style={styles.screen}>
				<View style={styles.header}>
					<Image source={require('../assets/SignIn.png')} resizeMode='contain' />
				</View>
				<View style={styles.textSection}>
					<View style={styles.titleWrap}>
						<Image style={{ marginRight: 10 }} source={require('../assets/people-SignIn.png')} />
						<Text>Konsultasi & Pengaduan</Text>
					</View>
					<Text style={styles.text1}>Selamat Datang !</Text>
					<Text style={{ color: '#828282' }}>
						Silahkan pilih tombol masuk untuk {"\n"}mengetahui data kanal anda ..
					</Text>
				</View>
				<View style={styles.buttonWrapper}>
					<View>
					<TouchableHighlight style={styles.touchableButton} onPress={handleMasuk}>
							<Text style={styles.buttonLight}>Lanjut</Text>
						</TouchableHighlight>
					</View>
					<View>
						<TouchableHighlight style={styles.touchableButton} onPress={handleMasuk}>
							<Text style={styles.buttonPrimary}>Masuk</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		// </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: '#F8F9FA',
		padding: 40
	},
	header: {
		flex: 1 / 2,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	textSection: {
		flex: 1 / 4,
		justifyContent: 'flex-end'
	},
	titleWrap: {
		flexDirection: 'row',
		marginBottom: 10
	},
	text1: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 22,
		color: '#454545'
	},
	buttonWrapper: {
		flex: 1 / 4,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	},
	touchableButton: {
		borderRadius: 6,
	},

	buttonLight: {
		backgroundColor: '#ffffff',
		paddingVertical: 10,
		paddingHorizontal: 25,
		borderRadius: 6,
		letterSpacing: 1,
		color: '#adb5bd',
		fontWeight: '500',
		elevation: 2,
	},
	buttonPrimary: {
		backgroundColor: '#4166F5',
		paddingVertical: 10,
		paddingHorizontal: 25,
		borderRadius: 6,
		color: 'white',
		letterSpacing: 1,
		fontWeight: '500',
		elevation: 2,
	}
})