import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RH} from '../../helpers/Responsive';
import BackgroundTimer from 'react-native-background-timer';
export default function SendSms() {
  const [countdown, setCountdown] = useState(120);
  const [showCountdown, setShowCountdown] = useState(true);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setCountdown(secs => {
        if (secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  };

  useEffect(() => {
    if (showCountdown) startTimer();
    else BackgroundTimer.stopBackgroundTimer();

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [showCountdown]);
  useEffect(() => {
    if (countdown === 0) BackgroundTimer.stopBackgroundTimer();
  }, [countdown]);

  const showTimer = () => {
    let mins = Math.floor((countdown / 60) % 60);
    let secs = Math.floor(countdown % 60);
    let showMins = mins < 10 ? `0${mins}` : mins;
    let showSecs = secs < 10 ? `0${secs}` : secs;
    return {
      showMins,
      showSecs,
    };
  };

  return (
    <View style={styles.SmsContainer}>
      {countdown !== 0 && (
        <Text style={styles.smsText}>
          Отпарвить код снова{' '}
          <Text style={styles.timer}>
            через {showTimer().showMins}:{showTimer().showSecs}
          </Text>
        </Text>
      )}
      {countdown === 0 && (
        <Text style={styles.timer}> Отпарвить код снова</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  SmsContainer: {
    alignItems: 'center',
    marginTop: RH(328),
  },
  smsText: {
    color: '#828282',
    fontSize: 16,
    fontWeight: '300',
  },
  timer: {
    color: '#565FFF',
    fontSize: 16,
  },
});
