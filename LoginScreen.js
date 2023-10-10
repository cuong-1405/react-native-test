import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch the saved login info when the app loads
    const fetchLoginInfo = async () => {
      const savedUsername = await AsyncStorage.getItem("username");
      const savedPassword = await AsyncStorage.getItem("password");
      if (savedUsername && savedPassword) {
        setUsername(savedUsername);
        setPassword(savedPassword);
      }
    };
    fetchLoginInfo();
  }, []);

  const handleLogin = async () => {
    // Perform login actions here, e.g., validation, API calls, etc.
    // If login is successful:
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("password", password);
    navigation.replace("HomeTabs");
  };

  return (
    <View>
      <Image
        source={{ uri: "https://your-image-url.com" }}
        style={{ width: 100, height: 100 }}
      />
      <Text>Username:</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
