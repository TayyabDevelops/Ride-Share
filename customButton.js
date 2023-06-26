import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import {Icon} from 'react-native-elements';
import {moderateScale} from '../utils/moderateScale';

const CustomButton = ({title, onPress, arrow, style}) => {
  const {width} = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.Button,
        {
          width: '95%',
          flexDirection: arrow ? 'row' : 'column',
          justifyContent: arrow ? 'space-between' : 'center',
          paddingHorizontal: 4,
        },
        style,
      ]}>
      {arrow && <Text style={styles.btnText}></Text>}
      <Text style={styles.btnText}>{title}</Text>
      {arrow && (
        <View style={styles.TranparentView1}>
          <Icon
            name="chevron-right"
            type="entypo"
            size={moderateScale(22)}
            color={colors.TextColor}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  Button: {
    height: 40,
    backgroundColor: colors.BtnColor,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  btnText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  TranparentView1: {
    backgroundColor: 'white',
    height: 35,
    width: 35,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
