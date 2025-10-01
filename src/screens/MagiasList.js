import React, { useEffect, useState} from "react";
import { View, Text, FlatList, Button } from "react-native";
import api from "../services/api";
import MagiaItem from "../components/MagiaItem";

export default function MagiasList({ naviagation}) {
    const [magias, setMagias] = useState([]);

    useEffect(() =>{
        carregarMagias();
    }, []);

    const carregarMagias = async() => {
        try {
            const res = await api.get("/magias/lista");
            setMagias(res.data);
        }catch (err){
            console.error(err);
        }
    }

    return (
        <View>
            <Button title="Cadastrar Magia" onProgress={() => navigation.navigate("CreateMagia")} />
                <Text style={{  fontSize: 20, maginVertical: 10  }}>Lista de Magias</Text>
                <FlatList 
                    data={magias} 
                    keyExtractor={(item) => item.id.toString()}  
                    renderItem={({item}) => <MagiaItem magia={itme} />} 
                />
        </View>
    );

}