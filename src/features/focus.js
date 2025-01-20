import React, {useState} from "react"
import {View, Text, StyleSheet} from 'react-native'
import { colors } from "../utils/colors"
import {TextInput} from 'react-native-paper'
import { RoundedButton } from '../components/roundedButton'
import { spacing } from "../utils/sizes"
export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null)
    return(
    <View style={styles.container}> 
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.textInput}
            label='What would you like to focus on ?'
            onChangeText={setSubject}/>
            <View styles={styles.buttonContainer}>
                <RoundedButton title='+' size={50} onPress={() => addSubject(subject)}/>
            </View>
        </View>
    </View>
)}

const styles = StyleSheet.create({
    container: {
    },
    inputContainer: {
        padding: spacing.lg,
        justifyContent: 'top',
        flexDirection: 'row'
    },
    textInput: {
        flex: 0.95,
        marginRight: spacing.sm
    },
    buttonContainer: {
        justifyContent: 'center',
    },
    text: {
        color: colors.white
    }
})