import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {RH, RW} from '../../helpers/Responsive';
import UserIntro from '../../helpers/UserIntro';
import UserInfoBtn from '../../components/Login/UserInfoBtn';
import LevelSelect from '../../helpers/LevelSelect';
import Continue from '../../helpers/Continue';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {PhoneComponentProps} from './LoginScreen';
import HeaderName from '../../components/Login/HeaderName';
import UserDoB from '../../components/Login/UserInfo/UserDoB';
import UserHeight from '../../components/Login/UserInfo/UserHeight';

export default function LoginUserInfo({navigation}: PhoneComponentProps) {
  const bottomSheet = useRef();
  const [date, setDate] = useState(new Date());
  const [userHeight, setUserHeight] = useState(175);
  const [step, setStep] = useState(1);

  return (
    <View style={styles.container}>
      <HeaderName navigation={navigation} color={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.intro}>
          <UserIntro />
        </View>

        <UserInfoBtn
          bottomSheet={bottomSheet}
          name="Возраст"
          value={0}
          sm={false}
          kg={false}
          textValue=""
          setStep={setStep}
        />
        <UserInfoBtn
          textValue=""
          bottomSheet={bottomSheet}
          name="Рост"
          value={'0.0'}
          sm
          kg={false}
          setStep={setStep}
        />
        <UserInfoBtn
          bottomSheet={bottomSheet}
          name="Текущий вес"
          value={0}
          sm
          kg
          textValue=""
          setStep={setStep}
        />
        <UserInfoBtn
          bottomSheet={bottomSheet}
          name="Цель:"
          textValue={'Похудение'}
          value=""
          sm={false}
          kg={false}
          setStep={setStep}
        />
        <BottomSheet
          sheetBackgroundColor={'white'}
          hasDraggableIcon
          ref={bottomSheet}
          height={600}>
          {step === 1 && <UserDoB date={date} setDate={setDate} />}
          {step === 2 && (
            <UserHeight userHeight={userHeight} setUserHeight={setUserHeight} />
          )}
        </BottomSheet>
        <View style={{marginVertical: 32}}>
          <LevelSelect />
        </View>
        <TouchableOpacity style={{marginBottom: 50}}>
          <Continue />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
  },
  intro: {
    marginTop: RH(25),
    marginBottom: RH(30),
  },
});
