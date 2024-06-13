import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    setUser({ name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.description}>Let’s log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Log in" onPress={handleLogin} color="#2980b9" />
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton} key="apple">
          <Image
            source={require('../assets/apple.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} key="google">
          <Image
            source={require('../assets/google.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} key="facebook">
          <Image
            source={require('../assets/facebook.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        Haven’t an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  
  title: {
    fontSize: 32,
    color: '#2c3e50',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    color: '#34495e',
    marginBottom: 10,
  },
  description: {
    color: '#7f8c8d',
    marginBottom: 40,
  },
  input: {
    width: '50%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  orText: {
    margin: 20,
    color: '#7f8c8d',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
      },
  socialButton: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
      },
  logo: {
    width: 70,
    height: 50,
  },
  registerText: {
    marginTop: 20,
    color: '#7f8c8d',
  },
  registerLink: {
    color: '#2980b9',
  },
});

export default Login;
