import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';
import {StyleProp, TextStyle} from 'react-native';
import {css} from 'styled-components';

import {ColorName} from '@hoagies-on-main/shared';

import {Font, Size, Sizing} from '@hom/types';
import {Theme} from '@hom/theme';

export interface TypographyProps {
  font?: Font;
  size?: Sizing;
  color?: ColorName;
  lineHeight?: Sizing;
  style?: StyleProp<TextStyle>;
  text?: string;
  center?: boolean;
  textCenter?: boolean;
  children?: string | ReactNode;
  uppercase?: boolean;
  italic?: boolean;
  fullWidth?: boolean;
}

const TypographyText = styled.Text<TypographyProps>`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};

  ${({fullWidth}) =>
    fullWidth &&
    css`
      width: 100%;
  `}  

  ${({center}) =>
    center &&
    css`
      align-self: center;
    `};

  ${({textCenter}) =>
    textCenter &&
    css`
      text-align: center;
      width: 100%;
    `}

  ${({uppercase}) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({italic}) =>
    italic &&
    css`
      font-style: italic;
    `}  
`;

const Typography: FC<TypographyProps> = ({children, text, style, ...props}) => {
  const typographyProps = {
    size: `${Theme.fontSize[props.size] || Theme.fontSize[Size.Medium]}px`,
    font: props.font || Font.Nunito,
    color: Theme.colors[props.color] || Theme.colors[ColorName.Black],
    center: props.center || false,
    textCenter: props.textCenter || false,
    uppercase: props.uppercase || false,
    italic: props.italic || false,
    fullWidth: props.fullWidth || false,
  };
  return (
    <TypographyText {...typographyProps} style={style}>
      {children || text}
    </TypographyText>
  );
};

export {Typography};
