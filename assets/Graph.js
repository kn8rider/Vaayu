import React, {Component} from 'react';
import {} from 'react-native';

class Graph extends Component {
  render() {
    return (
      <View style={styles.mainCointainer}>
        <Text>Hello user !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCointainer: {
    justifyContentn: 'center',
    alignSelf: 'center',
    fontSize: 20,
    flex: 1,
  },
});
