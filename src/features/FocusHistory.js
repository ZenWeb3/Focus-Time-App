import React from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({history}) => {
    if(!history || !history.length) return null;
    const renderItem = ({item}) => <Text style={styles.focusedItem}>- {item}</Text>
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Things we've focused on: </Text>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles =StyleSheet.create({
    container :{
        padding: spacing.md,
        flex: 1
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight: 'bold',
    },
    focusedItem: {
        color: colors.white,
        fontSize: fontSizes.md,
        paddingTop: spacing.sm
    }
})