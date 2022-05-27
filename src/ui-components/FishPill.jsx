/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function FishPill(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="83px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FishPill")}
    >
      <View
        width="300px"
        height="75px"
        position="absolute"
        top="0px"
        left="0px"
        border="1px SOLID rgba(209,209,209,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="84px"
        height="22px"
        position="absolute"
        top="10px"
        left="106px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Barsch"
        {...getOverrideProps(overrides, "Barsch")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="138px"
        height="22px"
        position="absolute"
        top="44px"
        left="calc(50% - 69px - 69px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Länge: 123cm"
        {...getOverrideProps(overrides, "L\u00E4nge: 123cm")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="138px"
        height="22px"
        position="absolute"
        top="44px"
        left="calc(50% - 69px - -69px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Punkte: 100"
        {...getOverrideProps(overrides, "Punkte: 100")}
      ></Text>
      <Icon
        width="260px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 260, height: 0.040374755859375 }}
        paths={[
          {
            d: "M0 0L260 0L260 -1L0 -1L0 0Z",
            stroke: "rgba(209,209,209,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="calc(50% - 0px - 3.46px)"
        left="calc(50% - 130px - 0px)"
        transformOrigin="top left"
        transform="rotate(-0.01deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
    </View>
  );
}
