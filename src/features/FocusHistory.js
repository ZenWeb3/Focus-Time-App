import React from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({focusedHistory}) => {
    if(!focusedHistory || !focusedHistory.length) return null;
    const renderItem = ({item}) => <Text style={styles.focusedItem}>{item}</Text>
    return (
        <View>
            <Text style={styles.title}>Historylhkfzdyszxdfjhblk</Text>
            <FlatList
                data={focusedHistory}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles =StyleSheet.create({
    title: {
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight: 'bold',
        padding: spacing.md
    },
    focusedItem: {
        color: colors.white,
        fontSize: fontSizes.md,
        paddingLeft: spacing.md
    }
})