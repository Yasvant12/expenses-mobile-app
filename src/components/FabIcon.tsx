import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Colors from '../utils/Colors';
import {Dimensions} from 'react-native';
import {red100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// import { FontAwesome } from '@expo/vector-icons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

interface FabiconProps {
  onPress: () => void; // Define the prop type for onPres
  fabStyle:any;
}

const Fabicon: React.FC<FabiconProps> = ({onPress,fabStyle}) => {
  return (
    <View style={styles.container}>
        <FAB
          style={fabStyle}
          color={'#ffffff'}
          icon="plus"
          mode={'elevated'}
          onPress={onPress}
          label="Add Expenses"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    zIndex: 10,
  },
  // fab: {
  //   position: 'absolute',
  //   width: width / 2.5,
  //   right: 0,
  //   top: height / 4.5,
  //   backgroundColor: Colors.HALF_BLUE,
  //   // color: 'red',
  // },
});

export default Fabicon;
