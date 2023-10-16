import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import PostItem from "./PostItem";
import { TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
const HomeScreen = ({ navigation }) => {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const chooseImage = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    // ImagePicker.showImagePicker(options, (response) => {
    //   // if (response.didCancel) {
    //   //   console.log("User cancelled image picker");
    //   // } else if (response.error) {
    //   //   console.log("ImagePicker Error: ", response.error);
    //   // } else {
    //   const source = { uri: response.uri };
    //   setPostImage(source);
    // });
  };

  const handlePost = () => {
    if (postText || postImage) {
      const newPost = {
        id: Date.now().toString(),
        text: postText,
        image: postImage,
        likes: 0,
        comments: 0,
      };
      setPosts([newPost, ...posts]);
      setPostText("");
      setPostImage(null);
    }
  };
  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleComment = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, comments: post.comments + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleShare = (postId) => {};
  // ... (rest of your functions, e.g., handlePost, handleLike, etc.)

  return (
    <View style={styles.container}>
      {/* Post Section */}
      <View style={styles.postSection}>
        <View style={styles.thoughtContainer}>
          <TextInput
            value={postText}
            onChangeText={setPostText}
            placeholder="Bạn đang nghĩ gì ?"
            style={styles.postInput}
          />
        </View>
        {postImage && (
          <Image source={postImage} style={styles.postImagePreview} />
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.chooseImageButton}
            onPress={chooseImage}
          >
            <Text style={styles.buttonText}>Chọn ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.buttonText}>Đăng bài</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts List */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem
            post={item}
            onLike={() => handleLike(item.id)}
            onComment={() => handleComment(item.id)}
            onShare={() => handleShare(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  thoughtContainer: {
    marginBottom: 50,
    borderWidth: 1,
    borderColor: "#ccc", // Màu khung
    borderRadius: 5, // Độ cong của góc khun
  },
  chooseImageButton: {
    backgroundColor: "#FF5733", // Màu cam
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5, // khoảng cách giữa hai nút
    alignItems: "center",
  },
  postButton: {
    backgroundColor: "#33B8FF", // Màu xanh dương
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5, // khoảng cách giữa hai nút
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default HomeScreen;
