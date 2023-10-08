import React, {FC, LazyExoticComponent} from 'react';
import {getView, View} from '@hom/common';

type LazyOpts = {
  View: View;
}

export const getLazyFC = <Props = {},>(callback: (opts: LazyOpts) => FC<Props>): LazyExoticComponent<FC<Props>> => {
  return React.lazy(async () => {
    const View = await getView();
    return {
      default: callback({View}),
    };
  });
};