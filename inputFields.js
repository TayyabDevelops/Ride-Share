import React, {useState} from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../theme/colors';
import {Icon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');

const InputFields = ({
  value,
  setValue,
  placeholder,
  iconName,
  iconType,
  eye,
}) => {
  const [eyeV, setEyeV] = useState(false);
  return (
    <View
      style={[
        styles.TextInputView,
        {
          width: width - 30,
          borderColor: colors.grey,
          paddingRight: 8,
        },
      ]}>
      <Icon
        name={iconName}
        type={iconType}
        style={{paddingLeft: 10}}
        size={20}
        color={'black'}
      />
      <TextInput
        style={[
          styles.TextInput,
          {
            width: !eye ? '90%' : '85%',
          },
        ]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        secureTextEntry={eyeV}
      />
      {eye && (
        <Icon
          onPress={() => {
            setEyeV(!eyeV);
          }}
          name={!eyeV ? 'eye-slash' : 'eye'}
          type={'font-awesome'}
          style={{paddingLeft: 10}}
          size={20}
          color={'black'}
        />
      )}
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  TextInputView: {
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  TextInput: {
    marginLeft: 8,
  },
});
