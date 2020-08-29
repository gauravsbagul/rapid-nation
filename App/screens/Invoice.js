import React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../Asset/images/images';
import { AppStyles } from '../AppStyles/Styles';
import Button from '../components/Button';

const Invoice = () => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Text
        style={[
          AppStyles.semiBold,
          { marginTop: 30, textAlign: 'center', marginBottom: 30 },
        ]}>
        Invoice
      </Text>
      <Image
        source={images.invoice}
        style={{ width: '95%', height: '60%', alignSelf: 'center' }}
      />
      <Button title="Done" style={{ marginTop: 100 }} />
    </View>
  );
};
export default Invoice;
