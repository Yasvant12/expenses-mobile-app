import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../../GlobalStyle";

export type CardTransactionType = {
  itemCode?: ImageSourcePropType;
  categoryTypeText?: string;
  itemDescription?: string;
  discountAmount?: string;
  timeSlotText?: string;

  /** Style props */
  propTop?: number | string;
  propBackgroundColor?: string;
  propColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardTransaction = ({
  itemCode,
  categoryTypeText,
  itemDescription,
  discountAmount,
  timeSlotText,
  propTop,
  propBackgroundColor,
  propColor,
}: CardTransactionType) => {
  const cardTransactionStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const rp229000Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View
     style={[styles.cardTransaction]}
     >
      <View 
      style={styles.cardTransactionChild} 
      />
      <View 
      style={styles.frameParent}
      >
        <View
          style={[styles.magiconsglyphecommerceShoWrapper, frameView2Style]}
        >
          <Image
            style={styles.magiconsglyphecommerceSho}
            resizeMode="cover"
            source={itemCode}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.shoppingParent}>
            <Text style={[styles.shopping, styles.shoppingTypo]}>
              {categoryTypeText}
            </Text>
            <Text style={styles.pmTypo}>{itemDescription}</Text>
          </View>
          <View style={styles.rp229000Parent}>
            <Text style={[styles.rp229000, styles.shoppingTypo, rp229000Style]}>
              {discountAmount}
            </Text>
            <Text style={[styles.pm, styles.pmTypo]}>{timeSlotText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.tiny,
    fontSize: FontSize.bodyBody1_size,
  },
  pmTypo: {
    color: Color.baseLightLight20,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.tiny,
    fontWeight: "500",
  },
  cardTransactionChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.baseLightLight80,
    position: "absolute",
  },
  magiconsglyphecommerceSho: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  magiconsglyphecommerceShoWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.yellowYellow20,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  shopping: {
    color: Color.baseDarkDark25,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.tiny,
    fontSize: FontSize.bodyBody1_size,
  },
  shoppingParent: {
    height: 60,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs,
    justifyContent: "space-between",
  },
  rp229000: {
    fontWeight: "600",
    color: Color.redRed100,
    textAlign: "left",
    fontFamily: FontFamily.tiny,
    fontSize: FontSize.bodyBody1_size,
  },
  pm: {
    marginTop: 12,
  },
  rp229000Parent: {
    alignSelf: "stretch",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameGroup: {
    flex: 1,
    alignItems: "center",
    marginLeft: 9,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameParent: {
    height: "67.42%",
    width: "90.18%",
    top: "15.73%",
    right: "4.76%",
    bottom: "16.85%",
    left: "5.06%",
    flexDirection: "row",
    position: "absolute",
  },
  cardTransaction: {
    // top: 220,
    // left: 19,
    width: 336,
    height: 89,
    // position: "absolute",
  },
});

export default CardTransaction;
