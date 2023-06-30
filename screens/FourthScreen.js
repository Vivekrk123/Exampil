import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";
import React, { useState } from "react";
import { Component } from "react";
import { storedetails } from "../util/http";

const FourthScreen = ({ navigation }) => {
  const [college, setcollege] = useState("");
  const [tenthpercent, settenthpercent] = useState("");
  const [eleventh, seteleventh] = useState("");
  const [twelve, settwelve] = useState("");
  const [exam, setexam] = useState("");
  class exampicker extends Component {
    state = { user: "" };
    updateUser = (user) => {
      this.setState({ user: user });
    };
  }
  const register = async () => {
    const response = await fetch(
      "https://exampil-66667-default-rtdb.firebaseio.com/academicDetails.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          college,
          tenthpercent,
          eleventh,
          twelve,
          exam,
        }),
      }
    );
    const resData = await response.json();
    console.log(resData);
    navigation.navigate("Final");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.details}>Academics</Text>
      </View>
      <View>
        <Text style={styles.names}>COLLEGE/INSTITUTE</Text>
        <TextInput
          style={styles.fields}
          value={college}
          onChangeText={setcollege}
        />
        <Text style={styles.names}>10th Percentage</Text>
        <TextInput
          style={styles.fields}
          value={tenthpercent}
          onChangeText={settenthpercent}
        />
        <Text style={styles.names}>11th Percentage</Text>
        <TextInput
          style={styles.fields}
          value={eleventh}
          onChangeText={seteleventh}
        />
        <Text style={styles.names}>12th Percentage</Text>
        <TextInput
          style={styles.fields}
          value={twelve}
          onChangeText={settwelve}
        />
        <Text style={styles.names}>Exam</Text>
        <TextInput style={styles.fields} value={exam} onChangeText={setexam} />
        <View style={styles.button}>
          <TouchableOpacity onPress={register}>
            <Text style={styles.buttontext}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FourthScreen;

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
    width: 500,
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
  button: {
    width: 312,
    height: 56,
    borderRadius: 5,
    backgroundColor: "rgba(235, 0, 0, 0.7)",
    marginTop: 20,
    marginLeft: 5,
  },
  buttontext: {
    fontSize: 20,
    padding: 12,
    height: 54,
    fontWeight: 700,
    color: "rgba(255, 255, 255, 1)",
    marginHorizontal: 95,
  },
});
