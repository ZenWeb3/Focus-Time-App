import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet,Platform } from 'react-native';
import {colors} from './src/utils/colors'
import {Focus} from './src/features/focus'
import {Timer} from './src/features/timer'
import {FocusHistory} from './src/features/FocusHistory.js'
import  Toast  from 'react-native-toast-message';
import * as Notifications from 'expo-notifications';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)
  const [history, setHistory] = useState([])

  useEffect(() => {
    const requestPermissions = async () => {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        console.log('Notification permissions not granted!');
        return;
      }
      console.log('Notification permissions granted!');
    };

    requestPermissions();
    
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }, []);

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Focus Time 🏆',
        body: 'You’ve completed your focus session!',
        sound: 'default',
      },
      trigger: { seconds: 1 },
    });
    
  };
  return (

    <SafeAreaView style={styles.container}>
      {
        !currentSubject ? ( 
          <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history}/>
          </>        
        ):(
        <Timer
          focusSubject={currentSubject}
          onEndTimer={(subject) => {
            setHistory([...history, subject])
            scheduleNotification()
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.darkBlue,
    paddingTop: Platform.OS == 'andriod' ? StatusBar.currentHeight : 0
  },
});
