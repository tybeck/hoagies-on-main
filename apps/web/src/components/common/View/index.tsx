import {Platform, ViewProps} from 'react-native';
import {RuleSet} from 'styled-components/dist/types';
import {FC} from 'react';

import {OS} from '@hom/types';

import 'styled-components/native';
import 'styled-components';

type Element = {
  ref?: any;
  children?: any;
};
export type View = <T extends Record<string, any>>(
  strings: TemplateStringsArray,
  ...args: (RuleSet<object> | string | boolean | number | ((props: T) => any))[]
) => FC<
  T &
    ViewProps &
    Element &
    Omit<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      'ref'
    >
>;

export const getView = async (): Promise<View> => {
  if (Platform.OS === OS.web) {
    const {default: styled} = await import('styled-components');
    return styled.div as View;
  }
  const {default: styled} = await import('styled-components/native');
  return styled.View as View;
};
