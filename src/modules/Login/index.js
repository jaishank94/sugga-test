import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const [telNum, setTelNum] = useState('');
  const [keyboardPos, setKeyBordPos] = useState('position');

  const navigation = useNavigation();

  const inputEl = useRef(null);

  const onSumbit = () => {
    navigation.navigate('Otp');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={() => setKeyBordPos(keyboardPos)}>
        <SafeAreaView style={styles.headerWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to Sugga</Text>
          </View>
        </SafeAreaView>
        <Animatable.View animation="fadeInUpBig" style={styles.animContent}>
          <View>
            <Text style={styles.title}>Enter your mobile number</Text>
            <PhoneInput
              textInputProps={{maxLength: 10}}
              ref={inputEl}
              defaultValue={telNum}
              defaultCode="IN"
              layout="second"
              withShadow
              containerStyle={styles.country}
              textContainerStyle={{
                paddingVertical: 0,
                borderLeftWidth: 1,
                borderColor: '#ccc',
              }}
              onChangeText={val => setTelNum(val)}
              onChangeCountry={val => setCountryCode(val)}
            />
          </View>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: `${
                    telNum.length === 10 ? '#3ede6b' : '#ccc'
                  }`,
                },
              ]}
              disabled={telNum.length === 10 ? false : true}
              onPress={onSumbit}>
              <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '55%',
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
  },
  headerWrapper: {
    backgroundColor: '#3ede6b',
  },
  animContent: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: -60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#989898',
    paddingBottom: 10,
    paddingTop: 20,
  },
  country: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 20,
    fontWeight: '500',
  },
  btnWrapper: {
    alignItems: 'center',
    marginVertical: 30,
  },
});
