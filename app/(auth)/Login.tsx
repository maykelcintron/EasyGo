import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Logo from "../../public/logo.png"
import PublicityEasyGo from "../../public/publicity_easygo.png"

const Login = () => {
    return (
        <View className="bg-[#150B22] h-screen">
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

                    <TouchableOpacity 
                        className="bg-[#150B22] rounded-full py-4"
                    >
                        <Text 
                            className="text-2xl text-[#F1B90C] uppercase text-center font-bold"
                        >
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>    

                    <TouchableOpacity 
                        className="bg-[#E1E5F4] rounded-full py-4 shadow-lg shadow-black mt-4"
                    >
                        <Text 
                            className="text-2xl text-black uppercase text-center font-bold"
                        >
                            Registrarse
                        </Text>
                    </TouchableOpacity>    
                </View>
            </ScrollView>
        </View>
    )
}

export default Login