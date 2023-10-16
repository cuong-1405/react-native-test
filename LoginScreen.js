import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = async () => {
    // Lưu thông tin đăng nhập vào AsyncStorage
    await AsyncStorage.setItem("username", this.state.username);
    await AsyncStorage.setItem("password", this.state.password);

    // Thực hiện các bước đăng nhập, ví dụ: gửi yêu cầu đăng nhập đến máy chủ

    // Chuyển đến màn hình chính sau khi đăng nhập thành công
    this.props.navigation.navigate("HomeTabs");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Đăng nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="Tên người dùng"
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Button title="Đăng nhập" onPress={this.handleLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
