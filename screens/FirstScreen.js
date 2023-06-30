import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const FirstScreen = ({ navigation }) => {
  const [phonenumber, setphonenumber] = useState("");
  const [code, setcode] = useState("");
  const [VerificationId, setVerificationId] = useState("");
  const recaptchaVerifier = useRef(null);
  const sendVerification = () => {
    try {
      let pno = "+91" + phonenumber;
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(pno, recaptchaVerifier.current)
        .then(setVerificationId);
      console.log(pno);
      console.log(VerificationId);
    } catch (err) {
      console.log(err);
    }
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      VerificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setcode("");
        Alert.alert("Login Successful. Welcome to Dashboard");
        navigation.navigate("ThirdScreen");
      })
      .catch((error) => {
        alert(error);
      });
    //Alert.alert("Login Successful. Welcome to Dashboard");
    //navigation.navigate("ThirdScreen");
  };
  return (
    <View>
      <View>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.enter}>
          By entering a valid phone number,you can easily log in and get access
        </Text>
      </View>
      <View style={styles.numberfield}>
        <View>
          <Text style={styles.nineone}>+91</Text>
        </View>
        <View>
          <TextInput
            value={phonenumber}
            onChangeText={setphonenumber}
            style={styles.mobileno}
            autoCompleteType="tel"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <TextInput
        keyboardType="numeric"
        value={code}
        onChangeText={setcode}
        style={styles.numberfield}
        placeholder="Enter OTP here"
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={sendVerification}>
          <Text style={styles.buttontext}>Request OTP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={confirmCode}>
          <Text style={styles.buttontext}>Confirm OTP</Text>
        </TouchableOpacity>
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  login: {
    fontSize: 32,
    fontWeight: 700,
    height: 43,
    margin: 10,
  },
  enter: {
    fontWeight: 400,
    fontSize: 14,
    height: 40,
    margin: 7,
    color: "rgba(0, 0, 0, 0.61)",
  },
  numberfield: {
    width: 312,
    height: 56,
    borderColor: "rgba(0, 0, 0, 0.61)",
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    flexDirection: "row",
    fontSize: 20,
    paddingLeft: 10,
  },
  nineone: {
    fontSize: 20,
    fontWeight: 40,
    borderRightColor: "rgba(0, 0, 0, 0.61)",
    borderRightWidth: 1,
    padding: 12,
    height: 54,
  },
  mobileno: {
    fontSize: 20,
    padding: 12,
    height: 54,
  },
  button: {
    width: 312,
    height: 56,
    borderRadius: 5,
    backgroundColor: "rgba(235, 0, 0, 0.7)",
    margin: 20,
  },
  buttontext: {
    fontSize: 20,
    padding: 12,
    height: 54,
    fontWeight: 700,
    color: "rgba(255, 255, 255, 1)",
    marginHorizontal: 75,
  },
});
