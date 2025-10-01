import react, {useState} from 'react';
import { View, TextInput, Button, } from "react-native";
import api from "../../services/api";

export default function CreateMagia({ navigation}) {
    const [name, setName] = react.useState("");
    const [description, setDescription] = react.useState("");

    const save =async() => {
        try {
            await api.post("magias/create", {
                name,
                description
            });
            alert("Magia cadastrada com sucesso!");
            navigation.goBack();
        } catch (err){
            console.error(err);
        }
    }

    return (
        <View style={{  flex: 1, padding: 20 }}>
            <TextInput 
                placeholder="Nome da Magia" 
                value={name} 
                onChangeText={setName}
                style={{  borderWidth: 1, marginBottom: 10, padding: 8  }}
            />
            <TextInput 
                placeholder="Descrição da Magia" 
                value={description} 
                onChangeText={setDescription}
                style={{  borderWidth: 1, marginBottom: 10, padding: 8  }}
            />

            <Button title="Salvar Magia" onPress={salvar} />

        </View>
    )
}