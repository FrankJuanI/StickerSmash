import { StyleSheet, Image } from "react-native";
export const ImageViewer = ({ placeholderImageSource }) => {
  return <Image source={placeholderImageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    height: 440,
    width: 320,
    borderRadius: 18,
  },
});
