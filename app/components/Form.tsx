import { TextInput, View } from "react-native"


const Form = () => {
  return (
    <View>
      <View>
        <TextInput placeholder="Nombre"></TextInput>
        <TextInput placeholder="Apellido"></TextInput>
      </View>

      <TextInput placeholder="Cédula"></TextInput>
      <TextInput placeholder="Género"></TextInput>
      <TextInput placeholder="Edad"></TextInput>
      <TextInput placeholder="Dirección"></TextInput>
      <TextInput placeholder="Contraseña"></TextInput>
    </View>
  )
}

export default Form
