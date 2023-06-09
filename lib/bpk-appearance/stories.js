/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2021 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { type Node } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  textPrimaryDarkColor,
  textPrimaryLightColor,
  spacingLg,
} from '@skyscanner/bpk-foundations-react-native/tokens/base.react.native';

// Import from local packages because adding as dependency causes all sort of cyclic dependencies propblems
// and this is really only for storybook
import BpkText from '../bpk-component-text';
import CenterDecorator from '../../storybook/CenterDecorator';

import {
  BpkDynamicStyleSheet,
  useBpkDynamicStyleSheet,
  useBpkColorScheme,
} from './index';

const style = BpkDynamicStyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: { light: textPrimaryLightColor, dark: textPrimaryDarkColor },
    textAlign: 'center',
    paddingBottom: spacingLg,
  },
});

type StoryContainerProps = {
  children: (style: Object, colorScheme: string) => Node,
};

const StoryContainer = ({ children }: StoryContainerProps) => {
  const currentStyle = useBpkDynamicStyleSheet(style);
  const colorScheme = useBpkColorScheme();

  return (
    <View style={currentStyle.view}>{children(currentStyle, colorScheme)}</View>
  );
};

storiesOf('bpk-appearance', module)
  .addDecorator(CenterDecorator)
  .add('default', () => (
    <StoryContainer styleName="text">
      {(currentStyle, colorScheme) => (
        <BpkText textStyle="xxl" style={currentStyle.text}>
          {colorScheme} mode, much wow!
        </BpkText>
      )}
    </StoryContainer>
  ));
