import { AddItem, List, Modal } from "./src/components";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  useEffect(() => {
    console.log("useEffect", "itemText", itemText, "ITEMS", items);
  }, []);

  const addItemToState = () => {
    console.log("addItemToState - start SIN JSON", items, itemText);
    console.log(
      "addItemToState - start CON JSON",
      JSON.stringify({ items, itemText })
    );
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
    console.log("addItemToState - end", "items", newArr);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.screen}>
      {/* ADDITEM COMPONENT */}
      <Text style={styles.tit}>Anota las cosas antes de ir al super para no olvidarte!</Text>
      <AddItem
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToState={addItemToState}
      />
      {/* LIST COMPONENT */}
      <List items={items} openModal={openModal} />
      {/* MODAl COMPONENT */}
      <Modal
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
      />
      <Text style={styles.tit2}>Puedes mantener presionado sobre el item que no te interesa mantener en la lista para eliminarlo</Text>
      <Text style={styles.tit2}>Tambien puedes darle 1 click al item para marcarlo como comprado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
    backgroundColor: "#D0EBE7",
  },
    tit:{
      marginTop: 30,
      fontWeight: "bold",
  },
  tit2:{
    marginTop: 10,
    textAlign: "center",
}
});
