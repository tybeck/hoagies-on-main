import type {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {
  DrawerScreenProps,
} from '@react-navigation/drawer';

export enum MainNavigation {
  Main = 'Main',
}

export enum DrawerNavigation {
  Home = 'Home',
  Products = 'Products',
  Location = 'Location',
  ContactUs = 'ContactUs',
  SignIn = 'SignIn',
}

export type RootStackParamList = {
  Main: Partial<NavigatorScreenParams<RootDrawerParamList>>;
};

export type RootDrawerParamList = {
  Home: undefined;
  Products: {
    categories?: string;
  };
  Location: undefined;
  ContactUs: undefined;
  SignIn: undefined;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;

export type AllScreenProps = NavigationProp<
  RootDrawerParamList,
  keyof RootDrawerParamList
>;
export type HomeScreenProps = NavigationProp<RootDrawerParamList, 'Home'>;
export type ProductsScreenProps = NavigationProp<
  RootDrawerParamList,
  'Products'
>;

export type MainScreenProps = NavigationProp<RootStackParamList, 'Main'>;
