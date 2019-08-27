export const storeCart = async item => {
  try {
    // const oldItem = await getCart();
    // if (oldItem) {
    //   console.log(oldItem);
    //   var newItem = JSON.parse(oldItem).concat(item);
    //   await AsyncStorage.setItem("@cart", JSON.stringify(newItem));
    // } else {
    //   await AsyncStorage.setItem("@cart", JSON.stringify(item));
    // }
    await AsyncStorage.setItem("@cart", item);
  } catch (e) {
    // saving error
  }
};

export const getCart = async () => {
  try {
    const value = await AsyncStorage.getItem("@cart");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
