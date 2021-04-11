import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  LineChart,
  AreaChart,
  Grid,
  XAxis,
  YAxis,
} from 'react-native-svg-charts';
import {Circle, Path} from 'react-native-svg';
class Graph extends Component {
  render() {
    const data = [16, 18, 21, 23, 25, 24];
    const datay = [7, 9, 11, 13, 15, 17];

    const Decorator = ({x, y, data}) => {
      return data.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          stroke={'rgb(134, 65, 244)'}
          fill={'white'}
        />
      ));
    };

    const Line = ({line}) => (
      <Path d={line} stroke={'rgba(134, 65, 244)'} fill={'none'} />
    );
    const axesSvg = {fontSize: 20, fill: 'grey', strokewidth: 10};
    const verticalContentInset = {top: 10, bottom: 10};
    const xAxisHeight = 30;

    // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
    // All react-native-svg-charts components support full flexbox and therefore all
    // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
    // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
    // and then displace the other axis with just as many pixels. Simple but manual.

    return (
      <View style={styles.mainCointainer}>
        <AreaChart
          style={{height: 200}}
          data={data}
          svg={{fill: 'rgba(134, 65, 244, 0.2)'}}
          contentInset={{top: 20, bottom: 30, left: 20, right: 20}}>
          <Line />
          <Decorator />
        </AreaChart>
        <XAxis
          style={{
            height: xAxisHeight,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 5,
          }}
          data={datay}
          formatLabel={value => `${value}ºC`}
          contentInset={{left: 20, right: 20}}
          svg={axesSvg}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCointainer: {
    justifyContent: 'center',
    marginTop: 150,
  },
});

export default Graph;
