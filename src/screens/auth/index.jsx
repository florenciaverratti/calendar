import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { signIn, signUp } from '../../store/actions';

import { COLORS } from '../../constants/themes/';
import { styles } from './style';
import { useDispatch } from 'react-redux';

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? 'Login' : 'Register';
  const message = isLogin ? "Don't you have an account?" : 'Do you have an account?';
  const messageAction = isLogin ? 'Login' : 'Register';

  const onHandlerSubmit = () => {
    dispatch(isLogin ? signIn(email, password) : signUp(email, password));
  };
  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior='padding'
      enabled>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your email"
          placeholderTextColor={COLORS.gray}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your password"
          placeholderTextColor={COLORS.gray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          color={COLORS.primaryDark}
          title={messageAction}
          onPress={onHandlerSubmit}
          disabled={!email || !password}
        />
        <View style={styles.prompt}>
          <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;