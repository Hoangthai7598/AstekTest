import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  Name: undefined;
  Email: {name: string};
};

export type TEmailScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Email'
>;
export type TNameScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Name'
>;
export type THomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Home'
>;
