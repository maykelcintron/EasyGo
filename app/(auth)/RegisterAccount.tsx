import { Text, View } from "react-native"
import Form from "../components/Form"

const RegisterAccount = () => {
    return (
        <View className="bg-mustard min-h-screen">
            <View className=" mt-28 p-6">
                <Text className="text-obsidian text-5xl font-black">Crea Tu Cuenta</Text>

                <Text className="text-obsidian text-2xl mt-7 font-bold">Regístrate ahora y disfruta de viajes y entregas rápidas y seguras.</Text>
            </View>

            <View className="bg-obsidian">
                <Form />
            </View>
        </View>
    )
}

export default RegisterAccount