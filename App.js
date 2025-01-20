import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View,Text,Platform
} from 'react-native';
import {colors} from './src/utils/colors'
import {Focus} from './src/features/focus'
import {Timer} from './src/features/timer'
import {FocusHistory} from './src/features/FocusHistory.js'


export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)
  const [history, setHistory] = useState([])
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
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.darkBlue,
    paddingTop: Platform.OS == 'Andriod' ? statusbar.currentHeight : 0
  },
});
