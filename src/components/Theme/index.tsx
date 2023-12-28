import React from 'react';
import { Theme } from '@hocgin/browser-addone-ui';
import theme from '@/theme';

export const withTheme = (node: JSX.Element) => (<Theme token={theme}>{node}</Theme>);
