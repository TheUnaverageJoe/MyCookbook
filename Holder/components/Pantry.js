import { StyleSheet, View } from "react-native";

export default function Pantry() {
    return(
      <View style={styles.base}> 
        {/*<Text>WADDU HEK</Text>  THIS LINE CAUSES AN ERROR FOR SOME REASON*/}
      </View>
    );
  }

  const styles = StyleSheet.create({
    base: {
      display: 'flex',
      backgroundColor: 'red',
      width: '600px',
      height: "600px",
    }
  });