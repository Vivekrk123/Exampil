import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";

const ThirdScreen = ({ navigation }) => {
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const register = async () => {
    const response = await fetch(
      "https://exampil-66667-default-rtdb.firebaseio.com/PersonalDetails.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          dob,
          email,
          address,
          city,
          state,
        }),
      }
    );
    const resData = await response.json();
    console.log(resData);
    navigation.navigate("FourthScreen");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.details}>Personal Info</Text>
      </View>
      <View>
        <Text style={styles.names}>FULL NAME</Text>
        <TextInput
          style={styles.fields}
          placeholder="claire hudson"
          value={name}
          onChangeText={setname}
        />
        <Text style={styles.names}>DATE OF BIRTH</Text>
        <TextInput
          style={styles.fields}
          placeholder="DD/MM/YY"
          value={dob}
          onChangeText={setdob}
        />
        <Text style={styles.names}>EMAIL</Text>
        <TextInput
          style={styles.fields}
          placeholder="clarie_hudson@gmail.com"
          value={email}
          onChangeText={setemail}
        />
        <Text style={styles.names}>ADDRESS</Text>
        <TextInput
          style={styles.fields}
          placeholder="4th street,allwyn Colony,KPHB"
          value={address}
          onChangeText={setaddress}
        />
        <Text style={styles.names}>CITY</Text>
        <TextInput
          style={styles.fields}
          placeholder="Hyderabad"
          value={city}
          onChangeText={setcity}
        />
        <Text style={styles.names}>STATE</Text>
        <TextInput
          style={styles.fields}
          placeholder="Telangana"
          value={state}
          onChangeText={setstate}
        />
        <TouchableOpacity onPress={register}>
          <View style={styles.next}>
            <Image
              source={require("../assets/Vector.png")}
              style={styles.vector}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  details: {
    fontSize: 28,
    fontWeight: 700,
    height: 43,
    margin: 10,
  },
  names: {
    fontSize: 14,
    width: 80,
    height: 20,
    fontWeight: 600,
  },
  fields: {
    width: 312,
    height: 38,
    borderColor: "rgba(0, 0, 0, 0.61)",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  next: {
    backgroundColor: "rgba(235, 0, 0, 0.7)",
    width: 53,
    height: 53,
    borderRadius: 27,
    marginHorizontal: 130,
    marginTop: 20,
  },
  vector: {
    marginHorizontal: 18,
    marginTop: 18,
  },
});
