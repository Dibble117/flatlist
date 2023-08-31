import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Row({ person }) {
    return (
        <Text>{person.lastname}, {person.firstname}</Text>
    );
}