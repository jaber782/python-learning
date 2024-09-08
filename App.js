import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const App = () => {
  // const [loaded] = useFonts({
  //   theSmile: require("./assets/fonts/The Smile.otf"),
  // });
  // if (!loaded) {
  //   return null;  // }
  const defaultImage = require('./assets/user.png');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Request permission to access media library
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }

    // Launch image library to pick an image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  // const [image, setImage] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   try {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [1, 1],
  //       quality: 1,
  //     });

  //     console.log(result); // Debugging line

  //     if (!result.canceled) {
  //       setImage(result.assets[0].uri); // Updated to use result.assets
  //     }
  //   } catch (error) {
  //     console.error(error); // Debugging line
  //   }
  // };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>
            Open up App.js to start working on your app!he sun was shining
            brightly in the sky. The birds were singing their sweet melodies. A
            gentle breeze rustled through the trees. The smell of freshly cut
            grass filled the air. Children were laughing and playing in the
            park. The sound of a nearby stream provided a soothing background
            noise. A group of friends were having a picnic on a blanket. The
            warm weather made it a perfect day to be outside. A couple was
            walking hand in hand, enjoying the scenery. It was a beautiful day
            to be alive.
          </Text>
          <View style={styles.container2}>
            <Image source={{ uri: image }} style={styles.image} />
            <FontAwesome
              name="upload"
              size={38}
              color={"black"}
              style={styles.icon}
              onPress={pickImage}
            />
          </View>
          {/* <Image source={require('./assets/user.png')} style={styles.image} /> */}

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:10
  },
  container2: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    height: 190,
    width: 190,
    borderRadius: 95,
    borderWidth: 15,
    borderColor: "gray",
    position: "relative",
    marginTop:20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginLeft: 35,

    // borderWidth:14 ,
    // borderColor: "blue"
  },
  icon: {
    position: "relative",
    top: 40,
    right: 15,
    zIndex: 1,
  },
});

export default App;
