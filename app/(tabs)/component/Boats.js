import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({icon, brand_name, desc, img}) => {
    return (
        <View>
            <Text style={styles.boatTitle}>
                {<Icon name={icon} size={25}/>}
                &nbsp;
                {brand_name}
            </Text>
            <Text style={styles.boatDesc}>{desc}</Text>
            {<Image source={img} style={styles.img} />}
        </View>
    );
};


class BoatsList extends React.Component {
    render() {
        return(
            <ScrollView style={{backgroundColor: 'black'}}>
                <Text style={styles.title}>GetABoat - For Sale</Text>

                <View style={styles.container}>
                    <Boat
                        icon={'sailboat'}
                        brand_name={'Sea Ray 500 Sundancer'}
                        desc={'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'}
                        img={require('../img/sea_ray.jpg')}
                    />
                </View>

                <View style={styles.container}>
                    <Boat
                        icon={'sailboat'}
                        brand_name={'Four Winns Horizon 180'}
                        desc={'A sporty look and refined details truly set the Horizon 180 above all others.'}
                        img={require('../img/four_winns.jpg')}
                    />
                </View>

                <View style={styles.container}>
                    <Boat
                        icon={'sailboat'}
                        brand_name={'Flipper 640 ST'}
                        desc={'A modern take on the classic, traditional hardtop and perfect for a family picnic.'}
                        img={require('../img/flipper.jpg')}
                    />
                </View>

                <View style={styles.container}>
                    <Boat
                        icon={'sailboat'}
                        brand_name={'Princess V48'}
                        desc={'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'}
                        img={require('../img/princess.jpg')}
                    />
                </View>

                <View style={styles.container}>
                    <Boat
                        icon={'sailboat'}
                        brand_name={'Bayliner 175 Bowrider'}
                        desc={'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'}
                        img={require('../img/bayliner.jpg')}
                    />
                </View>

                <View style={styles.container}>
                    <Boat
                        icon={'sailboat'}
                        brand_name={'Fairline Targa 47'}
                        desc={'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'}
                        img={require('../img/fairline.jpg')}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        color: 'white'
    },

    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        margin: 20,
    },

    img: {
        // resizeMode: 'contain',
        width: 370,
        height: 370,
        borderRadius: 10,
        marginTop: 20
    },

    boatTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        padding: 5
    },

    boatDesc: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        padding: 5
    }
});

export default BoatsList;
