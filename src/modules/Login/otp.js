import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import CountDown from 'react-native-countdown-component';
import {useNavigation} from '@react-navigation/native';

export default function otp() {
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = useState(false);

  const navigation = useNavigation();

  const inputEl = useRef(null);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.headerTitle}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Enter the 6-digit code sent to your mobile number
        </Text>
        <View style={styles.otpWrapper}>
          <OTPTextView
            ref={inputEl}
            containerStyle={styles.otpContainer}
            textInputStyle={styles.otpTextInput}
            handleTextChange={val => setOtp(val)}
            inputCount={6}
            keyboardType="numeric"
            tintColor="#ffffff"
          />
        </View>
        <View>
          <CountDown
            size={30}
            until={30}
            onFinish={() => setCounter(true)}
            digitStyle={{backgroundColor: 'white'}}
            digitTxtStyle={{color: 'grey'}}
            separatorStyle={{color: '#fff'}}
            timeToShow={['S']}
            timeLabels={{s: null}}
            showSeparator
          />
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity disabled={counter ? false : true}>
            <Text
              style={[
                styles.btnResend,
                {
                  color: `${counter ? 'black' : 'grey'}`,
                },
              ]}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnVerifyWrapper}>
          <TouchableOpacity style={styles.btnVerify}>
            <Text style={styles.textBtnVerify}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3ede6b',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  otpContainer: {
    marginVertical: 15,
  },
  otpWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  btnWrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  btnResend: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8a9af8',
    textTransform: 'uppercase',
  },
  btnVerify: {
    backgroundColor: '#3ede6b',
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnVerifyWrapper: {
    alignItems: 'center',
    marginVertical: 10,
  },
  textBtnVerify: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
