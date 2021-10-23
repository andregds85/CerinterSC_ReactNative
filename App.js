import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  Linking
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>

<View style={styles.container}>
      
    <Image
       style={styles.tinyLogo}
       source={{
         uri: 'https://www.cerintersc.com.br/content/home/v2/public/img/3.gif',
       }}
     />
   </View>

      <View style={styles.container}>
         <Text style={styles.textStyle}>
          {' '}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://cerintersc.com.br');
            }}>
            Cerinter SC - Central de Transporte da Secretaria de Estado de Santa Catarina
          </Text>
        </Text>
      </View>

      <View style={styles.container}>
       
     
     <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.cerintersc.com.br/content/home/v2/public/img/logo_menor.png',
        }}
      />

    </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'orange',
  },

  hyperlinkStyle: {
    color: 'white',
  },

  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 150,
    height: 150,
  },

  amb: {
    width: 200,
    height: 200,
  },


});









export default App;

/* https://gist.github.com/KelvinRonaldo/4d70ec44e534475bee62e737a64d06ff */

