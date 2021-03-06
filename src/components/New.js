import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default function New(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image 
                source = {props.cover}
                style={styles.cover}
            />

            <View  style={styles.content}>
                <Text  style={styles.title}>{props.name}</Text>

                <View  style={styles.dot}></View>

                <Text  style={styles.badge}>Novo</Text>
            </View>

            <Text style={styles.description}>
                {props.description}
            </Text>

            <View style={styles.footer}>
                <View style={{width: '80%'}}>
                    <Text style={styles.price}>R$ 1.204,90</Text>
                </View>
                <View style={{width: '20%'}}>
                    <Ionicons name="ios-add-circle" size={24} color="black" />
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
    },
    cover:{
        width: 170,
        height: 110,
        borderRadius: 10
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    title:{
        fontSize: 14,
        fontWeight: '700',
        color: '#4F4A4A'
    },
    dot:{
        width: 5,
        height: 5,
        borderRadius: 4,
        backgroundColor: 'red',
        marginHorizontal: 4,
    },
    badge:{
        color: 'red',
        fontWeight: '700',
        fontSize: 10,
    },
    description:{
        fontWeight: '500',
        fontSize: 10,
        color: '#4F4A4A'
    },
    footer:{
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%'
    },
    price:{
        fontWeight: '700',
        fontSize: 15,
    }
})