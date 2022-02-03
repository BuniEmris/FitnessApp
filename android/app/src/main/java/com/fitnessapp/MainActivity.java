package com.fitnessapp;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatDelegate;
import android.content.Intent;
import android.content.res.Configuration;
import com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder.*; // RN Reanimated  requirements for RN v66.3

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Fitnessapp";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);

 }
}
