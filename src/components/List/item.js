import { Image, Pressable, StyleSheet, Text } from "react-native";
import React, { useState } from "react";

const Item = ({ itemData, openModal }) => {
  const [done, setDone] = useState(false);

  return (
    <Pressable
      style={styles.itemContainer}
      onLongPress={() => {
        openModal(itemData.item);
      }}
      onPress={() => setDone(!done)}
    >
      <Text style={styles.item}>{itemData.item.value}</Text>
      {done && (
        <Image
          style={styles.doneTick}
          source={require("../../../assets/check-icon.png")}
        />
      )}
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    padding: 10,
    textAlign: "center",
  },
  doneTick: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
