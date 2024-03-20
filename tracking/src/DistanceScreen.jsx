import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { calculateTotalDistance } from './services/calculate';


/**
 * Represents the DistanceScreen component.
 * This component displays the total distance traveled.
 * @returns {JSX.Element} The DistanceScreen component.
 */
export default function DistanceScreen() {
    const totalDistance = calculateTotalDistance();

    return (
        <View style={styles.container}>
            <Text style={styles.distanceText}>Distância Percorrida:</Text>
            <Text style={styles.distanceValue}>{totalDistance.toFixed(2)} metros</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    distanceText: {
        fontSize: 24,
        marginBottom: 10,
    },
    distanceValue: {
        fontSize: 18,
    },
});
