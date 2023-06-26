import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../theme/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../../components/customButton';
import InputFields from '../../../components/inputFields';

const SignUp = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateofbirth, setDateOfBirth] = useState('');
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.mainContainer}>
          <View style={styles.midContainer}>
            <Image
              style={{width: width, height: width / 2, marginTop: 30}}
              resizeMode="contain"
              source={require('../../../assets/cardriving.png')}
            />
          </View>
          <Text style={styles.Heading}>Signup to continue </Text>
          <InputFields
            value={name}
            iconName={'user'}
            iconType={'feather'}
            setValue={setName}
            placeholder={'Enter your name'}
          />
          <InputFields
            value={name}
            iconName={'email'}
            iconType={'fontisto'}
            setValue={setEmail}
            placeholder={'Enter your email'}
          />
          <InputFields
            value={dateofbirth}
            iconName={'calendar'}
            iconType={'ant-design'}
            setValue={setDateOfBirth}
            placeholder={'Enter your date of birth'}
          />
          <InputFields
            value={number}
            iconName={'mobile1'}
            iconType={'ant-design'}
            setValue={setNumber}
            placeholder={'Enter your mobile no'}
          />
          <CustomButton
            style={{marginTop: 20}}
            arrow
            title={'Continue'}
            onPress={() => navigation.navigate('ConfirmPassword')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  mainContainer: {
    flex: 1,
  },
  midContainer: {
    alignItems: 'center',
  },
  Heading: {
    left: 20,
    fontSize: 18,
    fontWeight: '600',
    color: colors.TextColor,
    marginTop: 40,
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
    width: '100%',
    marginLeft: 8,
  },
  Button: {
    height: 40,
    backgroundColor: colors.BtnColor,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  btnText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  ButtonInsideView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  TranparentView: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
    borderRadius: 100,
  },
  TranparentView1: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
