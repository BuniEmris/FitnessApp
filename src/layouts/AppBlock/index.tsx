/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { createRef, ReactChild, ReactChildren, ReactNode } from 'react'
import { StatusBar, View } from "react-native";
import { Colors } from '@styles/index'
import { SafeAreaProvider } from 'react-native-safe-area-context/src/SafeAreaContext'
import { VideoModal, VideoModalProps } from '@components/VideoModal'

type AppBlockProps = {
  children: ReactNode | ReactChildren | ReactChild
}
export let VideoPlayerRef = createRef<VideoModalProps>().current
export const AppBlock = ({ children }: AppBlockProps) => {
  return (
    <>

      <VideoModal ref={ref => (VideoPlayerRef = ref)} />


      <SafeAreaProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />

        {children}
      </SafeAreaProvider>

    </>
  )
}
