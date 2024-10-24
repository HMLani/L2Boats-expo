import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({icon, brand_name, desc, img}) => {
    return (
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 30, color: 'grey'}}>
                {<Icon name={icon} size={30} color={'grey'} />}
                {brand_name}
            </Text>
            <Text style={{fontSize: 15}}>{desc}</Text>
            {<Image source={img} style={{width:400, height:400}} />}
        </View>
    );
};


class BoatsList extends React.Component {
    render() {
        return(
            <ScrollView style={{backgroundColor: '#D3D3D3'}}>
                <Text style={{marginBottom: 20, color: 'grey'}}>GetABoat - For Sale</Text>
                <Boat
                    icon={'sailboat'}
                    brand_name={'Sea Ray 500 Sundancer'}
                    desc={'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'}
                    img={require('../img/sea_ray.jpg')}
                />
                <Text style={{marginBottom:20}}></Text>
                <Boat
                    icon={'sailboat'}
                    brand_name={'Four Winns Horizon 180'}
                    desc={'A sporty look and refined details truly set the Horizon 180 above all others.'}
                    img={require('../img/four_winns.jpg')}
                />
                <Text style={{marginBottom:20}}></Text>
                <Boat
                    icon={'sailboat'}
                    brand_name={'Flipper 640 ST'}
                    desc={'A modern take on the classic, traditional hardtop and perfect for a family picnic.'}
                    img={require('../img/flipper.jpg')}
                />
                <Text style={{marginBottom:20}}></Text>
                <Boat
                    icon={'sailboat'}
                    brand_name={'Princess V48'}
                    desc={'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'}
                    img={require('../img/princess.jpg')}
                />
                <Text style={{marginBottom:20}}></Text>
                <Boat
                    icon={'sailboat'}
                    brand_name={'Bayliner 175 Bowrider'}
                    desc={'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'}
                    img={require('../img/bayliner.jpg')}
                />
                <Text style={{marginBottom:20}}></Text>
                <Boat
                    icon={'sailboat'}
                    brand_name={'Fairline Targa 47'}
                    desc={'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'}
                    img={require('../img/fairline.jpg')}
                />
            </ScrollView>
        );
    }
}

export default BoatsList;
