import React, {useState, useCallback} from 'react';
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../theme';
import {Button} from '../../components/button';
import {Config} from '../../config/Config';
import {useDispatch} from 'react-redux';
import * as styles from './styles';
import {userLogin} from '../../redux/actions/AuthActions';

export const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = password => password.trim() !== '';

  const handleInputChange = useCallback(
    (setter, validator, setError) => text => {
      setter(text);
      if (validator(text)) setError('');
    },
    [],
  );

  const authentication = async () => {
    let loginBody = new FormData();
    loginBody.append('email', email);
    loginBody.append('password', password);
    setLoading(true);
    try {
      const res = await dispatch(userLogin(loginBody));
      console.log(res);
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = () => {
    setEmailError('');
    setPasswordError('');
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }
    if (!validatePassword(password)) {
      setPasswordError('Password cannot be empty.');
      valid = false;
    }
    if (valid) {
      authentication();
    }
  };

  const renderForgotPassword = () => (
    <Text style={styles.subText()}>Forgot Password?</Text>
  );

  const renderSocialMediaIcons = () => (
    <View style={styles.iconsContainer()}>
      <TouchableOpacity style={styles.icon()}>
        <Image source={images.imgFacebook} style={styles.iconImage()} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon()}>
        <Image
          source={images.imgApple}
          style={styles.iconImage()}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon()}>
        <Image
          source={images.imgApple}
          style={styles.iconImage()}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.rootContainer()}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.upperContainer(insets)}>
        <Text style={styles.title()}>Pliē</Text>
        <Image source={images.imgIcon} style={styles.imageStyle()} />
      </View>
      <View style={styles.lowerContainer()}>
        <View style={styles.inputsContainer()}>
          <Text style={styles.label()}>Email</Text>
          <TextInput
            style={styles.textInput()}
            placeholder="email@email.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={handleInputChange(
              setEmail,
              validateEmail,
              setEmailError,
            )}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? (
            <Text style={styles.errorText()}>{emailError}</Text>
          ) : null}

          <Text style={styles.label()}>Password</Text>
          <TextInput
            style={styles.textInput()}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={handleInputChange(
              setPassword,
              validatePassword,
              setPasswordError,
            )}
            secureTextEntry
          />
          {passwordError ? (
            <Text style={styles.errorText()}>{passwordError}</Text>
          ) : null}

          {renderForgotPassword()}
        </View>

        <View style={styles.buttonContainer()}>
          <Button
            title={loading ? <ActivityIndicator color="#FFF" /> : 'Sign In'}
            btnStyle={styles.buttonStyle()}
            onPress={handleSignIn}
            disabled={loading}
          />
          <Text style={styles.linkText()}>
            Not a member?
            <Text style={styles.link()}> Sign Up Here</Text>
          </Text>
        </View>

        {renderSocialMediaIcons()}
      </View>
    </View>
  );
};
