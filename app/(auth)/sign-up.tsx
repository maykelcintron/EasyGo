import { ScrollView, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import ArrowLeftIcon from "react-native-heroicons/outline/ArrowLeftIcon"
import { useForm } from "react-hook-form"
import InputField from "@/components/InputField";

export default function SignUp() {

    const { handleSubmit, register, formState: { errors } } = useForm()

    return (
        <ScrollView>
            <View className="bg-primaryBlack py-20 px-10">
                <Link href={"/"}>
                    <ArrowLeftIcon color="white" size={24} />
                </Link>

                <Text className="text-4xl text-white mt-5 font-bold">Registrate</Text>
                <Text className="mt-8 text-white">
                    ¿Ya tienes una cuenta?{" "}
                    <Link className="font-medium text-primaryYellow underline" href={"/"}>
                        Inicia Sesión
                    </Link>
                </Text>
            </View>

            <View className="p-5 flex-row justify-between">
                <InputField
                    label="Nombre"
                    placeholder="Ingresa tu Nombre"
                    labelStyle="name"
                />

                <InputField
                    label="Apellido"
                    placeholder="Ingresa tu Apellido"
                    labelStyle="name"
                />
            </View>

            <View className="px-5">
                <InputField
                    label="Email"
                    placeholder="Ingresa tu dirección de correo electrónico"
                    labelStyle="mail"
                />

                <InputField
                    label="Contraseña"
                    placeholder="Crea una Contraseña"
                    labelStyle="password"
                />

                <TouchableOpacity
                    activeOpacity={0.9}>
                    <Text className="text-center font-semibold uppercase text-white bg-primaryYellow mt-5 p-4 rounded-full">Crear Cuenta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.9}>
                    <Text className="text-center font-semibold uppercase text-white bg-gray-700 mt-5 p-4 rounded-full">Iniciar Sesión con Google</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
