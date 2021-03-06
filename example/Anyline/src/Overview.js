/**
 * Created by jonesBoi on 14.03.17.
 */
import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

export default function Overview({
                                   openAnyline,
                                   checkCameraPermissionAndOpen
                                 }) {


  const platformPermissionCheck = (Platform.OS === 'android') ? checkCameraPermissionAndOpen : openAnyline;

  return (
      <View style={styles.container}>

        <Text style={styles.text}>ENERGY</Text>
        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  Energy Auto Analog/Digital Meter Scanner'}
                  color="#0099FF"
                  onPress={() => {
                    platformPermissionCheck('AUTO_ANALOG_DIGITAL_METER')
                  }}/>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  Energy Analog Meter Scanner'} color="#0099FF"
                  onPress={() => {
                    platformPermissionCheck('ANALOG_METER')
                  }}/>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  Energy Digital Meter Scanner'} color="#0099FF"
                  onPress={() => {
                    platformPermissionCheck('DIGITAL_METER')
                  }}/>
        </View>
        <Text style={styles.text}>OCR</Text>

        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  IBAN Scanner'} color="#0099FF"
                  onPress={() => {
                    platformPermissionCheck('IBAN')
                  }}/>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  Voucher Code Scanner'} color="#0099FF"
                  onPress={() => {
                    platformPermissionCheck('VOUCHER')
                  }}/>

        </View>
        <Text style={styles.text}>OTHER</Text>

        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  Barcode Scanner'} color="#0099FF"
                  onPress={() => {
                    platformPermissionCheck('BARCODE')
                  }}/>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  MRZ Scanner'} color="#0099FF"
                  onPress={() => {
                    platformPermissionCheck('MRZ')
                  }}/>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  Document Scanner'} color="#0099FF"
                  onPress={() => {
                    platformPermissionCheck('DOCUMENT')
                  }}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#303030',
    marginTop: '40%',
    marginBottom: '20%'
  },
  buttons: {
    margin: 5
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25
  }

});
