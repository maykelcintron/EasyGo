import {
    Image,
    ImageSourcePropType,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";

type InputFieldProps = {
    placeholder: string,
    icon: ImageSourcePropType
}

const InputField = ({ placeholder, icon } : InputFieldProps) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="my-2 w-full">
                    <View
                        className="flex flex-row items-center bg-lightGray rounded-full px-4"
                    >
                        <TextInput
                            className="rounded-xl p-[20px] text-[15px] flex-1 text-left placeholder:text-[#03004754]"
                            placeholder={placeholder}
                        />
                        <Image source={icon} className="w-6 h-6 ml-4" />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default InputField
