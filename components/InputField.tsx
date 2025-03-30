import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, TextInput, Platform, Keyboard } from "react-native"

type InputFieldProps = {
    label: string
    placeholder: string,
    labelStyle: string
}

export default function InputField({ placeholder, label, labelStyle }: InputFieldProps) {

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} className={`${labelStyle === 'name' ? "w-[48%]" : "w-full"}`}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="my-2">
                    <Text className="text-lg font-semibold mb-3 text-gray-600">
                        {label}
                    </Text>
                    <TextInput
                        className="bg-gray-100 border-2 border-gray-400 rounded-lg p-4 mb-3"
                        placeholder={placeholder}
                        placeholderTextColor="gray"
                        selectionColor="black"
                        secureTextEntry={labelStyle === 'password' ? true : false}
                    />

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}