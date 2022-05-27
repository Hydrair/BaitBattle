/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileCard(props) {
  const { user, overrides, ...rest } = props;
  return (
    <View
      width="500px"
      height="100px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProfileCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="362px"
        height="28px"
        position="absolute"
        top="12px"
        left="124px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${user?.firstName}${" "}${user?.lastName}`}
        {...getOverrideProps(overrides, "Mikey Kainz")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="48px"
        position="absolute"
        top="47px"
        left="124px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Rang:"
        {...getOverrideProps(overrides, "Rang:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="58px"
        position="absolute"
        top="73px"
        left="124px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Punkte:"
        {...getOverrideProps(overrides, "Punkte:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="58px"
        position="absolute"
        top="73px"
        left="200px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="100"
        {...getOverrideProps(overrides, "100")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="58px"
        position="absolute"
        top="47px"
        left="200px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="1"
        {...getOverrideProps(overrides, "1")}
      ></Text>
      <View
        width="100px"
        height="100px"
        position="absolute"
        top="0px"
        left="13px"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1165")}
      ></View>
      <Image
        width="100px"
        height="116.57px"
        position="absolute"
        top="-8px"
        left="13px"
        padding="0px 0px 0px 0px"
        src={user?.avatar}
        {...getOverrideProps(overrides, "21-10-24 13-16-41 7551 1")}
      ></Image>
    </View>
  );
}
