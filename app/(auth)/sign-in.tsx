import { Link } from "expo-router"
import { Image, Platform, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Logo from '../../public/logo.png'
import PublicityEasyGo from '../../public/publicity_easygo.png'

const SignIn = () => {
    return (
        <SafeAreaView className="bg-[#150B22]">
            <View className={`bg-[#150B22] h-full ${Platform.OS === "android" ? "pt-10" : ""}`}>
                <ScrollView className="w-full">
                    <View className="pt-10 px-10">
                        <Image 
                            source={Logo}
                            className="w-full h-24 mx-auto"
                            resizeMode="contain"
                        />
                        <Text className="text-4xl text-white font-bold text-center mb-5">
                            Taxi + Delivery:
                            {"\n"} 
                            <Text className="text-[#F1B90C]">Simple y eficaz.</Text>
                        </Text>
                    </View>

                    <View className="bg-[#F1B90C] rounded-t-[36px] h-full p-5">
                        <View className="w-full h-[380px] pt-20">
                            <Image 
                                source={PublicityEasyGo}
                                resizeMode="cover"
                                className="w-full h-64 rounded-[35px]"
                            />
                        </View>

                        <Link 
                            className="bg-[#150B22] rounded-full py-4 w-full"
                            href="/(auth)/enter-your-account"
                        >
                                <Text 
                                    className="text-2xl text-[#F1B90C] uppercase text-center font-bold"
                                >
                                    Iniciar Sesión
                                </Text>
                            
                        </Link>

                        <Link 
                            className="bg-[#E1E5F4] rounded-full py-4 mt-4"
                            href="/(auth)/enter-your-account"
                        >
                                <Text 
                                    className="text-2xl text-black uppercase text-center font-bold"
                                >
                                    Registrarse
                                </Text>
                        </Link>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SignIn