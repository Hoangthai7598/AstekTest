import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {TEmailScreenProps} from '../../models/HomeStackModels';
import {useLoginMutation} from '../../services/auth';
const schema = yup
  .object({
    email: yup.string().email('Not a email').required('Email is required'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const EmailScreenController = ({navigation}: TEmailScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [login, {isLoading, data, error}] = useLoginMutation();

  //email: hoangthai7598@gmail.com

  const onSubmit = (data: FormData) => {
    login({
      email: data.email,
      password: '123456a@A',
      returnSecureToken: true,
    });
  };

  React.useEffect(() => {
    if (data) {
      navigation.navigate('Home');
    }
  }, [data]);

  return {
    control,
    handleSubmit,
    onSubmit,
    isLoading,
    data,
    error,
    errors,
  };
};

export default EmailScreenController;
