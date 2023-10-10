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
import ImagePicker from "react-native-image-picker";

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

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setPostImage(source);
      }
    });
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
        <TextInput
          value={postText}
          onChangeText={setPostText}
          placeholder="Bạn đang nghĩ gì ?"
          style={styles.postInput}
        />
        {postImage && (
          <Image source={postImage} style={styles.postImagePreview} />
        )}
        <Button title="Choose Image" onPress={chooseImage} />
        <Button title="Post" onPress={handlePost} />
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
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postSection: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  postInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  postImagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});

export default HomeScreen;
