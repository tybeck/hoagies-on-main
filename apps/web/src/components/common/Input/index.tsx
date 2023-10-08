import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';

import {ButtonComponent} from '@hom/svg';
import {Theme} from '@hom/theme';
import {Font} from '@hom/types';
import {getView} from '@hom/common';

interface InputProps {
  placeholder?: string;
  noMargin?: boolean | undefined;
}

export const Input = React.lazy(async (): Promise<{default: FC<InputProps>}> => {
  const View = await getView();

  const InputView = View<{noMargin?: boolean | undefined}>`
    display: flex;
    margin-bottom: ${Theme.spaceSize.xmedium}px;
    
    ${props =>
      props.noMargin &&
      css`
        margin-bottom: 0;
      `
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
    outline: none;
  `;

  return {
    default: ({noMargin, placeholder}: InputProps) => {
      return (
        <InputView noMargin={noMargin}>
          <ButtonComponent fill={Theme.colors.white} autoSize>
            <InputViewWrapper>
              <UIInput placeholder={placeholder} />
            </InputViewWrapper>
          </ButtonComponent>
        </InputView>
      );
    }
  }
});
