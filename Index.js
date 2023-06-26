import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';

const Splash = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.mainContainer}>
        <Image
          style={{height: width / 2, width: width}}
          resizeMode="contain"
          source={require('../../assets/cardriving.png')}
        />
        <Text style={styles.Heading}>Welcome Back !</Text>
        <Text style={styles.subHeading}>
          Continue to pick of rides at low prices.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={[styles.Button, {width: width - 30}]}>
        <Text style={styles.btnText}>Lets Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Heading: {
    color: colors.TextColor,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },
  subHeading: {
    color: colors.TextColor,
    fontSize: 14,
    fontWeight: '300',
  },
  Button: {
    height: 40,
    backgroundColor: colors.BtnColor,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 100,
  },
  btnText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
