import React, {useMemo} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {FontSize, FontFamily, Color, Padding} from '../../GlobalStyle';

export type TypeTitleOnlyType = {
  dateRange?: string;

  /** Style props */
  typeTitleOnlyPosition?: string;
  typeTitleOnlyTop?: number | string;
  typeTitleOnlyLeft?: number | string;
  typeTitleOnlyWidth?: number | string;
  typeTitleOnlyHeight?: number | string;
};

const TypeTitleOnly = ({
  dateRange,
  typeTitleOnlyPosition,
  typeTitleOnlyTop,
  typeTitleOnlyLeft,
  typeTitleOnlyWidth,
  typeTitleOnlyHeight,
}: TypeTitleOnlyType) => {
  return (
    <View style={[styles.typetitleOnly]}>
      <View style={styles.yesterdayWrapper}>
        <Text
        style={styles.yesterday}
        >
          {dateRange}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yesterday: {
    fontSize: FontSize.titleTitle3_size,
    fontWeight: '700',
    fontFamily: FontFamily.tiny,
    color: Color.colorGray_200,
    textAlign: 'left',
  },
  yesterdayWrapper: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Padding.p_5xs,
  },
  typetitleOnly: {
    backgroundColor: Color.baseLightLight100,
    width: 375,
    height: 48,
    justifyContent: 'center',
  },
});

export default TypeTitleOnly;
