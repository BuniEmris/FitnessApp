import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {RH, RW} from '../../../helpers/Responsive';
import UserHeightText from '@helpers/Icons/UserHeightText';
import Done from '@helpers/Icons/Done';
import RNListSlider from 'react-native-list-slider';
import LinearGradient from 'react-native-linear-gradient';
type OwnProps = {
  userHeight: any;
  setUserHeight: any;
};

export default function UserHeight({userHeight, setUserHeight}: OwnProps) {
  const onChanged = (val: any) => {
    setUserHeight(val);
  };
  return (
    <View>
      <View style={styles.doB}>
        <UserHeightText />
      </View>
      <View style={styles.doBPicker}>
        <View>
          <Text>Value: {userHeight}</Text>
        </View>
        <ScrollView>
          <RNListSlider
            scrollEnabled={true}
            arrayLength={300}
            initialPositionValue={175}
            value={userHeight}
            onValueChange={onChanged}
          />
        </ScrollView>
      </View>
      <View style={styles.doBPicker}>
        <LinearGradient
          colors={['#F2521F', '#FF8D4E']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </LinearGradient>
      </View>

      {/* <TouchableOpacity style={styles.btn}>
        <Done />
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  doB: {
    marginTop: RH(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  doBPicker: {
    marginTop: RH(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: RW(287),
    height: RH(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
