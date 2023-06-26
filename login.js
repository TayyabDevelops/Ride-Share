import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
 
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CustomButton from '../../../components/customButton';
import Octicons from 'react-native-vector-icons/Octicons';
import InputFields from '../../../components/inputFields';

const Login = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          <Text style={styles.Heading}>Comfortable rides in mintue</Text>

          <InputFields
            value={email}
            iconName={'user'}
            iconType={'feather'}
            setValue={setEmail}
            placeholder={'Enter Email'}
          />

          <InputFields
            value={password}
            iconName={'lock'}
            iconType={'ant-design'}
            setValue={setPassword}
            placeholder={'Enter Password'}
            eye
          />

          <CustomButton
            title={'Login'}
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />
          <View style={styles.Login}>
            <Text style={styles.Text}>New Member?</Text>
            <Text
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={styles.LoginText}>
              SignUp
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
    left: 12,
    marginVertical: 20,
  },
  subHeading: {
    fontWeight: '500',
    color: colors.TextColor,
    left: 12,
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
