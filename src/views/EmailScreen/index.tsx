import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Controller} from 'react-hook-form';
import styles from './styles';
import {TEmailScreenProps} from '../../models/HomeStackModels';
import EmailScreenController from './EmailScreen.Controller';

const EmailScreen = (props: TEmailScreenProps) => {
  const {control, data, error, handleSubmit, isLoading, onSubmit, errors} =
    EmailScreenController(props);

  //email: hoangthai7598@gmail.com

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.inputStyles}
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>{errors.email.message}</Text>}
      {error && <Text>{JSON.stringify(error)}</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default EmailScreen;
