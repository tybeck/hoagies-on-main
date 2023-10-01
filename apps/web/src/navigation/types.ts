import type {CompositeNavigationProp, NavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import type {DrawerScreenProps, DrawerNavigationProp} from '@react-navigation/drawer';
import type {StackNavigationProp} from '@react-navigation/stack';

export enum MainNavigation {
  Main = 'Main',
  SignIn = 'SignIn',
}

export enum DrawerNavigation {
  Home = 'Home',
  Products = 'Products',
  Location = 'Location',
  ContactUs = 'ContactUs',
}

export type RootStackParamList = {
  Main: Partial<NavigatorScreenParams<RootDrawerParamList>>;
  SignIn: undefined;
};

export type RootDrawerParamList = {
  Home: undefined;
  Products: {
    categories?: string;
  };
  Location: undefined;
  ContactUs: undefined;
};

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> = DrawerScreenProps<
  RootDrawerParamList,
  T
>;

export type AllScreenProps = NavigationProp<RootDrawerParamList, keyof RootDrawerParamList>;
export type HomeScreenProps = NavigationProp<RootDrawerParamList, 'Home'>;
export type ProductsScreenProps = NavigationProp<RootDrawerParamList, 'Products'>;

export type MainScreenProps = NavigationProp<RootStackParamList, 'Main'>
export type SignInScreenProps = NavigationProp<RootStackParamList, 'SignIn'>;