import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const liesOfPImage = require('../../assets/images/lies_of_p_overture_expansao__2o5fcj.jpg');

function Tema() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <Image source={liesOfPImage} style={styles.image} />
                <View style={styles.viewText}>
                    <Text style={styles.textTitle}>
                        Lies Of P
                    </Text>
                    <Text style={styles.textDescription}>
                        Lies of P é um jogo soulslike ambientado na sombria cidade de Krat, inspirada pela era Belle Époque e no conto de Pinóquio de Carlo Collodi. O jogador assume o papel de Pinóquio, um fantoche que deve encontrar o seu criador, o mestre Gepeto, e descobrir os segredos por trás do "Frenesi dos Marionetes" e a "Doença da Petrificação" que assola a cidade. Ao longo da jornada, Pinóquio deve lutar contra marionetes descontroladas, adaptar e personalizar suas armas e um braço mecânico, e fazer a escolha entre dizer a verdade ou mentir para se tornar um ser humano
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flexDirection: "column",
        marginHorizontal: 100,
        display: "flex",
        alignItems: "center"
    },
    image: {
        width: 250,
        height: 200,
    },
    viewText: {
        flexDirection: "column",
        width: 360,
    },
    textTitle: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "TimesNewRoman",
        textAlign: "center"
    },
    textDescription: {
        color: "white",
        fontSize: 15,
        lineHeight: 20,
        fontFamily: "TimesNewRoman",
        textAlign: "center"
    }
})

export default Tema;