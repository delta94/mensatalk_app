import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import {SignUpUserInterface} from '../../types';
import FormInput from './FormInput';
import Title from '../utils/TextElement';
import Logo from '../utils/Logo';

export interface SignUpFormProps {
  onSignUp: (signUpUser: SignUpUserInterface) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({onSignUp}: SignUpFormProps) => {
  const validateForm = () => {
    const dummyUser: SignUpUserInterface = {
      username: '',
      email: '',
      password: '',
    };
    onSignUp(dummyUser);
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Logo />

        <View style={styles.form}>
          <FormInput placeholderText={'Username'} secure={false} />
        </View>
        <View style={styles.form}>
          <FormInput placeholderText={'E-Mail'} secure={false} />
        </View>
        <View style={styles.form}>
          <FormInput placeholderText={'Password'} secure={true} />
        </View>
        <View style={styles.form}>
          <FormInput placeholderText={'Confirm Password'} secure={true} />
        </View>
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.createButtonContainer}
            onPress={validateForm}>
            <Title text={'LET ME IN'} style={styles.createButtonText} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFC',
    justifyContent: 'flex-end',

    paddingBottom: 20,
  },
  form: {
    marginHorizontal: 25,
    marginVertical: 4,
  },
  createButtonContainer: {
    backgroundColor: '#5CBACB',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  createButtonText: {
    height: 60,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#FAFCFC',
  },
});

export default SignUpForm;
