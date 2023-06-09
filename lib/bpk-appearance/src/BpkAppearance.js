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
import { Appearance } from 'react-native';
import type { AppearancePreferences } from 'react-native/Libraries/Utilities/NativeAppearance';

export type BpkAppearancePreferences = {
  colorScheme?: AppearancePreferences,
};

let currentPreferences: BpkAppearancePreferences = {
  colorScheme: Appearance.getColorScheme(),
};

const appearance = {
  get: () => currentPreferences,
  set: (preferences: BpkAppearancePreferences) => {
    if (currentPreferences.colorScheme !== preferences.colorScheme) {
      currentPreferences = preferences;
    }
  },
  addChangeListener: (listener: (BpkAppearancePreferences) => void) => {
    Appearance.addChangeListener(listener);
  },
  removeChangeListener: (listener: (BpkAppearancePreferences) => void) => {
    Appearance.removeChangeListener(listener);
  },
};

export default appearance;
