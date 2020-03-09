# bpk-component-calendar

> Backpack React Native calendar component.

## Installation

Check the main [Readme](https://github.com/skyscanner/backpack-react-native#usage) for a complete installation guide.

## Time Zones

`BpkCalendar` uses dates at the `UTC` midnight boundary exclusively for selected dates and expects that format for `minDate` and `maxDate`. If `BpkCalendar` is used with dates that are **not** `UTC` it will behave in undefined ways and most likely not work.

To create dates to be used with the component we recommend the following

```javascript
// Min date of the calendar at 2019-01-02
const minDate = new Date(Date.UTC(2019, 0, 2));

// Dates can also be provided as timestamps
const minDate = Date.UTC(2019, 0, 2);
```

To format the dates for display use

```javascript
const locale = 'en-gb';
const formattedDate = date.toLocaleDateString(locale, { timeZone: 'UTC' });
```

## Usage

```js
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { spacingBase } from 'bpk-tokens/tokens/base.react.native';
import BpkCalendar, { SELECTION_TYPES } from 'backpack-react-native/bpk-component-calendar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedDates: [] };
  }

  handleNewDates = newDates => {
    this.setState({
      selectedDates: newDates,
    });
  };

  render() {
    const { selectionType, onChangeSelectedDates, ...rest } = this.props;
    return (
      <BpkCalendar
        locale={'en-gb'}
        selectionType={SELECTION_TYPES.range}
        selectedDates={this.state.selectedDates}
        onChangeSelectedDates={this.handleNewDates}
        minDate={Date.UTC(2019, 0, 2)}
        maxDate={Date.UTC(2019, 11, 31)}
      />
    );
  }
}
```

## Props

### BpkCalendar

| Property              | PropType               | Required | Default Value          |
| --------------------- | ---------------------- | -------- | ---------------------- |
| locale                | string                 | true     | -                      |
| colorBuckets          | arrayOf(ColorBucket)   | false    | undefined              |
| disabledDates         | DateMatcher            | false    | null                   |
| maxDate               | oneOf(Date, number)    | false    | today + 1 year         |
| minDate               | oneOf(Date, number)    | false    | today                  |
| onChangeSelectedDates | function               | false    | null                   |
| selectedDates         | arrayOf(Date, number)  | false    | \[]                    |
| selectionType         | oneOf(SELECTION_TYPES) | false    | SELECTION_TYPES.single |

#### selectedDates

-   When `selectionType` is `SELECTION_TYPES.single`, you should only include zero or one entries in the `selectedDates` array.
-   When `selectionType` is `SELECTION_TYPES.range`, you should only include zero, one or two entries in the `selectedDates` array.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [DateMatchers](#datematchers)
    -   [range](#range)
        -   [Parameters](#parameters)
        -   [Examples](#examples)
    -   [after](#after)
        -   [Parameters](#parameters-1)
        -   [Examples](#examples-1)
    -   [before](#before)
        -   [Parameters](#parameters-2)
        -   [Examples](#examples-2)
    -   [any](#any)
        -   [Parameters](#parameters-3)
        -   [Examples](#examples-3)
-   [colorBucket](#colorbucket)
    -   [Parameters](#parameters-4)
    -   [Examples](#examples-4)

### DateMatchers

#### range

Creates a range matcher to be used in `BpkCalendar`.

A range matcher will match any date in between start and end date, inclusive.

##### Parameters

-   `firstDate` **([Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the range start
-   `endDate` **([Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the range end

##### Examples

```javascript
<BpkCalendar
 disabledDates={DateMatchers.range(start, end)}
/>
```

Returns **DateMatcher** a range date matcher.

#### after

Creates an after matcher to be used in `BpkCalendar`.

An after matcher will match all dates after the provided date.

##### Parameters

-   `date` **([Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the date to match.

##### Examples

```javascript
<BpkCalendar
 disabledDates={DateMatchers.after(date)}
/>
```

Returns **DateMatcher** an after date matcher.

#### before

Creates a before matcher to be used in `BpkCalendar`.

A before matcher will match all dates before the provided date.

##### Parameters

-   `date` **([Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the date to match.

##### Examples

```javascript
<BpkCalendar
 disabledDates={DateMatchers.before(date)}
/>
```

Returns **DateMatcher** an before date matcher.

#### any

Creates an any matcher to be used in `BpkCalendar`.

An any matcher will match if the date is equal to any of the dates provided.

##### Parameters

-   `dates` **...([Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the list of dates to match.

##### Examples

```javascript
<BpkCalendar
 disabledDates={DateMatchers.any(...listOfDates)}
/>
```

Returns **DateMatcher** an any date matcher.

### colorBucket

Creates a new color bucket to be used in BpkCalendar.

A color bucket is used to define custom colours for calendar days.

NOTE: Your are responsible for ensuring multiple color buckets don't
overlap, in case they do the last one applied (last in the list) will
take precedence.

#### Parameters

-   `color` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The background color
-   `days` **DateMatcher** The days in this bucket
-   `textStyle` **TextStyle?** The text style. Valid values are `light` or `dark`.
       Changes how the text looks based on the background color, where light or dark refers
       to the background colour. (optional, default `undefined`)

#### Examples

```javascript
<BpkCalendar
 colorBuckets={[
   colorBucket(colorPanjin, DateMatchers.range(startOfSummer, endOfSummer)),
   colorBucket(colorSagano, DateMatchers.after(endOfSummer))
 ]}
/>
```

Returns **ColorBucket** A new color bucket