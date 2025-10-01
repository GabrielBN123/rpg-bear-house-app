import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MagiaItem({ magia }){
    return (
        <View style={{ padding: 10 ,borderBottomWidth:1 }}>
            <Text> {magia.name} </Text>
            <Text> {magia.description} </Text>
        </View>
    );
}