import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PostItem = ({ post, onLike, onComment, onShare }) => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <Image
        source={{ uri: "https://your-avatar-url.com" }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>Nguyễn Văn Cường</Text>
        <Text style={styles.time}>1 giờ trước</Text>
      </View>
    </View>

    {/* Content */}
    <Text style={styles.content}>{post.text}</Text>
    {post.image && <Image source={post.image} style={styles.postImage} />}

    {/* Footer */}
    <View style={styles.footer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onLike}>
        <Icon name="thumbs-up" size={20} color="#000" />
        <Text>{post.likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={onComment}>
        <Icon name="comment" size={20} color="#000" />
        <Text>{post.comments}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={onShare}>
        <Icon name="share" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  // ... (styles from the previous example, add or modify as needed)
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  name: {
    fontSize: 18, // Increased font size
    fontWeight: "bold", // Make it bold
    color: "blue", // Change color to blue
  },
  time: {
    fontSize: 14, // Reduced font size
    color: "gray", // Change color to gray
  },
});

export default PostItem;
