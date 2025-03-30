import { Link } from "expo-router";
import { Text, View, ImageBackground, Image, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
    return (
        <SafeAreaView className="bg-primaryBlack px-5 h-full">
            <View className="border-b-gray-400 border-b-2 p-3">
                <Text className="text-white font-black text-2xl">Easy<Text className="text-primaryYellow">Go</Text></Text>
            </View>

            <View className="mt-10">
                <Text className="text-4xl text-white text-center font-bold leading-[3rem]">Lorem ipsum, dolor sit amet consectetur</Text>
                <Text className="text-center text-gray-100 mt-5 font-medium">Viaja seguro por toda la península de Paraguaná</Text>
            </View>

            <View
                style={{
                    width: 300,
                    height: 400,
                    marginTop: 70,
                    position: "relative",
                }}
                className="container mx-auto"
            >

                <ImageBackground
                    source={require('../../public/images/bgroad.png')}
                    style={{ flex: 1 }}
                >
                </ImageBackground>


                <Image
                    source={require('../../public/images/car.png')}
                    style={{
                        position: "absolute",
                        top: -35,
                        left: 35,
                    }}
                />

                <View
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "100%",
                        left: 0,
                    }}
                >
                    <TouchableOpacity
                        className="p-4 bg-primaryYellow rounded-full"
                        activeOpacity={0.7}
                    >
                        <Text className="text-center font-bold uppercase">
                            Iniciar Sesión
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        className="bg-gray-700 mt-5 p-4 rounded-full"
                        activeOpacity={0.7}
                    >
                        <Link className="text-center font-semibold uppercase text-white" href={'/(auth)/sign-up'}>Crear Cuenta</Link>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
