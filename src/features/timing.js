import React from 'react';
import { View , StyleSheet} from 'react-native';
import { RoundedButton } from '../components/roundedButton';

export const Timing = ({onChangeTime}) => {
    return(
        <View style={styles.timingButton}>
            <RoundedButton title='10' size={75} onPress={() => onChangeTime(10)}/>
            <RoundedButton title='20' size={75} onPress={() => onChangeTime(20)}/>
            <RoundedButton title='30' size={75} onPress={() => onChangeTime(30)}/> 
        </View>
    )
} 

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 15,
    }
})