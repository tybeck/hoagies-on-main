import React, {FC, LazyExoticComponent} from 'react';

import {getView, View} from '@hom/common';

type LazyOpts = {
  View: View;
};

/**
 * @method getLazyFC
 * The main purpose I use this is to bridge the gap between React Native and Web - this allows me to switch
 * between RN / web versions of packages.  One such case is styled components which doesn't provide media queries
 * through there native implementation; so we must switch to the web version.  To be able to use this repo as a source
 * for both web and mobile we need to lazily load components that require said resources.
 * @param callback
 */
export const getLazyFC = <Props = {},>(
  callback: (opts: LazyOpts) => FC<Props>,
): LazyExoticComponent<FC<Props>> => {
  return React.lazy(async () => {
    const View = await getView();
    return {
      default: callback({View}),
    };
  });
};
