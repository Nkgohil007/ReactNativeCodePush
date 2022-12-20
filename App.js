import React, {useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import codePush from 'react-native-code-push';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './src/CounterSlice';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  console.log(count);
  useEffect(() => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);
  const onPress = () => dispatch(increment());
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{height: '100%', width: '100%'}}
        resizeMode={'contain'}
        source={require('./assets/owl.jpeg')}
      />

      <Text style={{color: 'black', fontSize: 30}}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default codePush(codePushOptions)(App);
