import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Feather, AntDesign, Ionicons, MaterialIcons, Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "dehaze",
        gradient: ["#636363", "#a2ab58"]
    },Thunderstorm: {
        iconName: "thunderstorm-outline",
        gradient:["#fffc00", "#141517"]
    }, Drizzle: {
        iconName:"cloud-drizzle",
        gradient:["#7303c0", "#03001e"]
    }, Rain: {
        iconName:"rainy-outline",
        gradient:["#qcb5e0", "#000046"]
    }, Snow: {
        iconName:"ios-snow-outline",
        gradient:["#e0eafc", "#cfdef3"]
    }, Clear: {
        iconName:"sunny-outline",
        gradient:["#005c97", "#363795"]
    }, Clouds: {
        iconName:"cloudo",
        gradient:["#1e3c72", "#2a5298"]
    },  Mist: {
        iconName:"weather-fog",
        gradient:["#485563", "#29323c"]
    }, Dust: {
        iconName:"fog",
        gradient:["#606c88", "3f4c6b"]
    }
};

export default function Weather({ temp,condition }) {
    return (
    <LinearGradient colors={[weatherOptions[condition].gradient} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={style.halfContainer}>
            <Feather size={90} name={weatherOptions[condition].iconName}color="white"/>
            <AntDesign size={90} name={weatherOptions[condition].iconName}color="white"/>
            <Ionicons size={90} name={weatherOptions[condition].iconName}color="white"/>
            <MaterialIcons size={90} name={weatherOptions[condition].iconName}color="white"/>
            <Fontisto size={90} name={weatherOptions[condition].iconName}color="white"/>
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer}} >
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>           
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    );
}

Weather.propTypes =  {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize:40,
        color:"white"
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title : {
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom: 10
    },
    subtitle : {
        color:"white",
        fontWeight:"600",
        fontSize: 22
    },
    textContainer : {
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});