import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './styles';
import {TNameScreenProps} from '../../models/HomeStackModels';

const schema = yup
  .object({
    name: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;
const NameScreen = ({navigation}: TNameScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    navigation.navigate('Email', {name: data.name});
  };
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
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default NameScreen;
