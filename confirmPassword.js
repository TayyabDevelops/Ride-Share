import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../theme/colors';
import CustomButton from '../../../components/customButton';
import InputFields from '../../../components/inputFields';

const ConfirmPassword = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passhide, setPassHide] = useState(false);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Image
            style={{width: width, height: width / 2, marginTop: 30}}
            resizeMode="contain"
            source={require('../../../assets/cardriving.png')}
          />
          <Text style={styles.Heading}>Confirm your password</Text>
          <Text style={styles.subHeading}>
            It must have at least 8 characters, 1 letter{'\n'}1 number and 1
            special characters
          </Text>

          <InputFields
            value={password}
            iconName={'lock'}
            iconType={'ant-design'}
            setValue={setPassword}
            placeholder={'Enter Password'}
            eye
          />

          <InputFields
            value={confirmPassword}
            iconName={'lock'}
            iconType={'ant-design'}
            setValue={setConfirmPassword}
            placeholder={'Enter Password'}
            eye
          />

          <CustomButton
            title={'SignUp Confirm'}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          <View style={styles.Login}>
            <Text style={styles.Text}>Already a member?</Text>
            <Text
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.LoginText}>
              Login
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmPassword;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  mainContainer: {
    flex: 1,
  },
  Heading: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.TextColor,
    left: 20,
    marginVertical: 20,
  },
  subHeading: {
    fontWeight: '500',
    color: colors.TextColor,
    left: 20,
    fontSize: 14,
  },
  TextInputView: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.grey,
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  TextInput: {
    width: '76%',
    marginLeft: 8,
  },
  Login: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'black',
    fontSize: 14,
  },
  LoginText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
});
