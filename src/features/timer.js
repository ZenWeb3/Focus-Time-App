import React, {useState} from 'react'
import { Text, View, StyleSheet, Vibration} from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { spacing } from '../utils/sizes'
import {Countdown} from '../components/countdown'
import { RoundedButton } from '../components/roundedButton'
import {colors} from '../utils/colors'
import { Timing } from './timing'
import { useKeepAwake } from 'expo-keep-awake';

    const ONE_SECOND_IN_MS = 1000;
  
    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS
    ];
export const Timer = ({focusSubject, clearSubject}) => {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(0.1)

    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN)
        setProgress(1)
        setIsStarted(false)
        reset()
    }
    return(
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown 
                minutes={minutes}
                isPaused={!isStarted}
                onProgress={setProgress}
                onEnd={onEnd}
                />
                <View style={{paddingTop: spacing.xxl}}>
                    <Text style={styles.title}>Focusing On: </Text>
                    <Text style={styles.task}> {focusSubject}</Text>
                </View>
            </View>
            <View style={{paddingTop: spacing.xxl}}/>
            <View style={{paddingTop: spacing.sm}}>
                <ProgressBar
                    color={colors.progressBar}
                    style={{height: 10, backgroundColor: colors.progressBar}}
                    progress={progress}
                />
            </View>
            <View style={styles.timingWrapper}>
                <Timing onChangeTime={setMinutes}/>
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && (
                    <RoundedButton title='start' onPress={() => {setIsStarted(true)}}/>
                )}
                {isStarted && (
                    <RoundedButton title='pause' onPress={() => {setIsStarted(false)}}/>
                )}
            </View>
            <View style={styles.clearSubjectWrapper}>
                <RoundedButton size={50} title='-' onPress={clearSubject}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countdown: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timingWrapper:{
        flex: 0.1,
        paddingTop:spacing.lg
    },
    clearSubjectWrapper: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        color: colors.white,
        fontSize: spacing.md,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    task: {
        color: colors.white,
        textAlign: 'center'
    }
});