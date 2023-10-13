import React from 'react';
import styled, {css} from 'styled-components/native';

import {getLazyFC} from '@hom/lazy';
import {ButtonComponent} from '@hom/svg';
import {Theme} from '@hom/theme';
import {Font} from '@hom/types';

type InputProps = {
  placeholder?: string;
  noMargin?: boolean | undefined;
}

export const Input = getLazyFC<InputProps>(({View}) => {
  const InputView = View<{noMargin?: boolean | undefined}>`
    display: flex;
    margin-bottom: ${Theme.spaceSize.xmedium}px;
    
    ${props =>
      props.noMargin &&
      css`
        margin-bottom: 0;
      `
    }
    
    input {
      outline: none;
    }
  `;

  const InputViewWrapper = View`
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    padding: 8px 24px;
    min-width: 300px;
    height: 30px;
  `;

  const UIInput = styled.TextInput`
    width: 100%;
    height: 100%;
    font-family: ${Font.Nunito};
  `;

  return ({noMargin, placeholder}: InputProps) => {
    return (
      <InputView noMargin={noMargin}>
        <ButtonComponent fill={Theme.colors.white} autoSize>
          <InputViewWrapper>
            <UIInput placeholder={placeholder} />
          </InputViewWrapper>
        </ButtonComponent>
      </InputView>
    );
  };
});