import { onboardingItems } from '@/constants/unboarding';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Logo from '../../public/logo.png';

const Onboarding: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < onboardingItems.length - 1) {
      setStep(step + 1);
    } else {
      onFinish && onFinish();
      router.push('/(auth)/sign-in');
    }
  };

  return (
      <LinearGradient
        colors={['#F1B90C', '#212121']}
        className="flex-1"
      >
        <View className="flex-1 justify-center items-center px-8">
          <Image 
              source={Logo}
              className="w-full h-24 mx-auto mt-10"
              resizeMode="contain"
          />
          <Image
            source={onboardingItems[step].image}
            style={{ width: '100%', height: 200, marginBottom: 20 , marginTop: 20}}
            resizeMode="contain"
          />
          <Text className="text-5xl font-black mb-4 text-white">
            {onboardingItems[step].title}
            <Text className="text-5xl font-black text-[#F1B90C]">
              {onboardingItems[step].subtitle ? ` ${onboardingItems[step].subtitle}` : ''}
            </Text>
          </Text>
          <Text className="text-xl mb-8 text-white font-semibold">
            {onboardingItems[step].description}
          </Text>
          <TouchableOpacity
            className="size-20 rounded-full self-end"
            onPress={handleNext}
          >
            <Image
              source={require('../../public/skip_vector.png')}
              style={{ width: 60, height: 60, marginTop: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
  );
};

export default Onboarding;