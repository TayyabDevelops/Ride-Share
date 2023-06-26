import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import CustomButton from '../../components/customButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from '../../utils/moderateScale';
import InputFields from '../../components/inputFields';

const Dashboard = () => {
  const {height, width} = Dimensions.get('window');
  const [noofsheet, setNoOfSheet] = useState('');
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Image
            style={{width: width, height: width / 2, marginTop: 30}}
            resizeMode="contain"
            source={require('../../assets/cardriving.png')}
          />
          <Text style={styles.Heading}>Find your ride </Text>
          <View style={[styles.LocationView, {width: width - 30}]}>
            <View style={styles.View1}>
              <View>
                <View style={styles.greenCircle} />
                <View style={styles.LocationLine} />
                <View
                  style={[styles.greenCircle, {backgroundColor: '#BABABA'}]}
                />
              </View>
              <View style={{width: '85%'}}>
                <TextInput
                  style={{width: '100%', fontSize: moderateScale(16)}}
                  placeholderTextColor={'grey'}
                  placeholder="Your Location"
                />
                <View style={styles.midLine} />
                <TextInput
                  style={{width: '100%', fontSize: moderateScale(16)}}
                  placeholderTextColor={'grey'}
                  placeholder="Where to go?"
                />
              </View>
            </View>
          </View>

          <View
            style={[
              styles.TextInputView,
              {
                width: width - 30,
              },
            ]}>
            <AntDesign
              style={{paddingLeft: 10}}
              name="calendar"
              size={20}
              color={'black'}
            />
            <TextInput
              style={styles.TextInput1}
              keyboardType="numeric"
              placeholderTextColor={colors.grey}
            />

            <Text>Today?</Text>
          </View>

          <InputFields
            value={noofsheet}
            iconName={'user'}
            iconType={'feather'}
            setValue={setNoOfSheet}
            placeholder={'No of sheet'}
          />
          <CustomButton title={'Search'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  mainContainer: {
    flex: 1,
  },
  Heading: {
    left: 20,
    fontSize: 18,
    fontWeight: '600',
    color: colors.TextColor,
    marginTop: 30,
  },
  LocationView: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  View1: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  greenCircle: {
    height: 13,
    width: 13,
    backgroundColor: '#469D64',
    borderRadius: 100,
  },
  LocationLine: {
    height: 40,
    borderWidth: 0.5,
    alignSelf: 'center',
    borderColor: 'black',
  },
  midLine: {width: '100%', borderBottomWidth: 0.5, borderColor: 'black'},
  TextInputView: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.grey,
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'white',
  },
  TextInput: {
    width: '100%',
    marginLeft: 8,
  },
  TextInput1: {
    width: '70%',
    marginLeft: 8,
  },
});
