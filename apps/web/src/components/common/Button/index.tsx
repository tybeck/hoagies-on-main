import React, {FC} from 'react';
import {Pressable, ViewStyle, View} from 'react-native';
import styled from 'styled-components/native';

import {ColorName} from '@hoagies-on-main/shared';

import {Theme} from '@hom/theme';
import {isElectron} from '@hom/support';
import {ButtonComponent, ButtonProps} from '@hom/svg';

import {Typography, TypographyProps} from '../Typography';

interface Props {
  text: string;
  buttonProps?: ButtonProps;
  typographyProps: Omit<TypographyProps, 'text'>;
  fill?: ColorName;
  style?: ViewStyle;
  onPress?: () => void;
}

const ButtonView = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 8px 24px;
  width: ${() => (isElectron() ? 'calc(100% + 1px)' : '100%')};
`;

const Button: FC<Props> = ({
  style,
  text,
  fill,
  typographyProps,
  buttonProps,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress || null}>
      <View style={{alignItems: 'baseline', ...style}}>
        <ButtonComponent
          iosAdjustWidthBy={1}
          fill={Theme.colors[fill] || Theme.colors.white}
          autoSize
          {...buttonProps}
        >
          <ButtonView>
            <Typography
              text={text}
              style={{
                textTransform: 'uppercase',
              }}
              {...typographyProps}
            />
          </ButtonView>
        </ButtonComponent>
      </View>
    </Pressable>
  );
};

export {Button};
