import { Image, Text, TouchableOpacity, View } from "react-native";
import appelBtn from "../../public/btnSigninwithApple.png";
import FbBtn from "../../public/btnSigninwithFb.png";
import googleBtn from "../../public/btnSigninwithGoogle.png";
import EyeIcon from "../../public/eye1.png";
import UserIcon from "../../public/usericon.png";
import Vector from "../../public/Vector 630.png";
import InputField from "../components/InputField";

const EnterYourAccount = () => {
    return (

        <View className="bg-mustard min-h-screen">
            <View className="mt-28 p-4">
                <Text className="text-obsidian text-5xl text-center font-black">Ingresa Tu Cuenta</Text>
                <Text className="text-obsidian text-2xl mt-7 font-bold">¡Bienvenido de nuevo! Inicia sesión para acceder a tus servicios.</Text>
            </View>

            <View className="bg-obsidian rounded-t-[36px] h-full p-6">
                <View className="mt-10">
                    <InputField placeholder="Email" icon={UserIcon} />
                    <InputField placeholder="Contraseña" icon={EyeIcon} />
                    <TouchableOpacity
                        className="bg-mustard rounded-full py-4 shadow-lg shadow-black mt-4"
                    >
                        <Text
                            className="text-2xl text-black uppercase text-center font-bold"
                        >
                            Iniciar Sesión
                        </Text>
                    </TouchableOpacity>
                    <Text className="mt-5 text-[#5A5A5A] text-right text-lg">¿Olvidaste tu Contraseña?</Text>

                    <View className="flex flex-row items-center justify-center mt-10 gap-6">
                        <Image source={Vector} />
                        <Text className="text-[#969AA8] text-lg">Puedes ingresar con</Text>
                        <Image source={Vector} />
                    </View>

                    <View className="flex flex-row items-center justify-center mt-10 gap-6">
                        <Image source={FbBtn} />
                        <Image source={googleBtn} />
                        <Image source={appelBtn} />
                    </View>

                    <Text className="text-center text-white mt-10">¿No tienes una cuenta? <Text className="text-mustard font-black">Crear Cuenta</Text></Text>
                </View>
            </View>
        </View>

    )
}

export default EnterYourAccount