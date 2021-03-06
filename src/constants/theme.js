import { StyleSheet } from "react-native";
export const sizes = {
  h1: 24,
  h2: 20,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10
};

export const colors = {
  primary: "#FF00A9",
  hover: "#DC008B",
  heading: "#340021",
  text: "#54414A",
  secondary_text: "#BCA5AF"
};

export const fonts = {
  regular: "Roboto-Regular",
  bold: "Roboto-Bold",
  black: "Roboto-Black"
};

//Style Welcome
export const welcome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    width: "100%"
  },
  welcomText: {
    textAlign: "center",
    color: colors.heading,
    fontSize: sizes.h1,
    fontFamily: fonts.black,
    marginBottom: 10
  },
  firstText: {
    textAlign: "center",
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: sizes.h3,
    marginBottom: 24
  }
});

//Style Login
export const login = {
  container: {
    paddingTop: 24,
    paddingHorizontal: 24
  },
  tabLayout: {
    borderBottomWidth: 4,
    borderBottomColor: colors.secondary_text,
    flex: 1,
    alignItems: "center",
    paddingVertical: 10
  },
  tabLayoutActive: {
    borderBottomColor: colors.hover
  },
  tabText: {
    color: colors.secondary_text,
    fontFamily: fonts.black,
    fontSize: sizes.h2
  },
  tabTextActive: {
    color: colors.hover
  },

  // Form
  formTitle: {
    color: colors.heading,
    fontSize: sizes.h4,
    fontFamily: fonts.bold,
    marginBottom: 10,
    textTransform: "uppercase"
  },
  textInput: {
    borderBottomColor: colors.secondary_text,
    borderBottomWidth: 2,
    fontSize: sizes.h4,
    marginBottom: 24,
    paddingBottom: 5,
    color: colors.heading
  },
  chooseText: {
    fontSize: sizes.h1,
    fontFamily: fonts.bold,
    marginVertical: 24,
    textAlign: "center",
    textTransform: "uppercase"
  },
  fullname: {
    flexDirection: "row"
  },
  childName: {
    flex: 1
  }
};

//Style Home
export const home = {
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  userInfo: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 24
  },
  userName: {
    color: "white",
    fontFamily: fonts.black,
    fontSize: sizes.h2
  },

  userPoint: {
    color: "white",
    fontFamily: fonts.regular,
    fontSize: sizes.h3
  },

  hotServices: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 10
  },

  title: {
    fontFamily: fonts.bold,
    color: colors.heading,
    fontSize: sizes.h3
  },
  watchMore: {
    fontSize: sizes.h6,
    fontFamily: fonts.regular
  },
  hotItem: {
    width: 111,
    height: 152,
    marginLeft: 20,
    borderRadius: 10,
    position: "relative",
    overflow: "hidden"
  },
  hotTitleBG: {
    position: "absolute",
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "rgba(0,0,0,.4)",
    bottom: 0,
    left: 0
  },
  hotTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: sizes.h5,
    fontFamily: fonts.bold
  },
  rankingContainer: {
    paddingHorizontal: 24,
    marginTop: 20
  },
  rankingItem: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  rankNo: {
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.black,
    fontSize: sizes.h2,
    width: 40
  },
  rankInfo: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  rankUserName: {
    fontFamily: fonts.bold,
    fontSize: sizes.h4
  },
  rankPoint: {
    flex: 1,
    textAlign: "right"
  }
};

//Style Services
export const services = {
  container: {
    flex: 1,
    paddingHorizontal: 24,
    width: "100%"
  },
  column: {
    flex: 1,
    width: "100%"
  },
  titleBG: {
    flex: 1,
    flexDirection: "column"
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: sizes.h4,
    color: colors.primary
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: sizes.h4,
    color: colors.text
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 15,
    borderRadius: 10,
    marginHorizontal: 2,
    marginTop: 2,
    padding: 15
  },
  btnBook: {
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    color: "white"
  },
  btnBookSelected: {
    color: colors.hover,
    borderColor: colors.hover,
    borderWidth: 1,
    backgroundColor: "white",
  },
  btnBookText: {
    textAlign: "center",
    fontFamily: fonts.bold,
    fontSize: sizes.h5,
    color: "white"
  },
  btnTextSelected: {
    color: colors.hover
  },
  detailsConten: { paddingHorizontal: 24 },
  detailsTitle: {
    fontFamily: fonts.black,
    fontSize: sizes.h2,
    color: colors.heading,
    marginBottom: 5
  },
  detailsDescription: {
    fontFamily: fonts.regular,
    fontSize: sizes.h5,
    color: colors.text,
    marginBottom: 10
  },
  detailsPrice: {
    fontFamily: fonts.bold,
    fontSize: sizes.h3,
    color: colors.primary
  },
  detailsBtnBook: {
    width: 103,
    height: 36,
    marginVertical: 20,
    textAlign: "center",
    lineHeight: 36,
    color: "white",
    borderRadius: 10,
    backgroundColor: colors.primary,
    fontFamily: fonts.bold,
    fontSize: sizes.h3
  },
  detailsContent: {
    fontFamily: fonts.regular,
    fontSize: sizes.h4,
    color: colors.text
  },
  imageGallery: {
    marginVertical: 20
  }
};

//Style Profile
export const profile = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  PersonInfo: {
    alignContent: "center",
    alignItems: "center",
    marginTop: "10%"
  },
  avatar: {
    borderRadius: 50,
    width: 100,
    height: 100
  },
  fullname: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#340021"
  },
  email: {
    padding: 10,
    color: "#54414A"
  },
  PointInfo: {
    flexDirection: "row",
    paddingTop: 20,
    height: 100,
    paddingBottom: 20,
    borderBottomColor: "#F8EDFD",
    borderBottomWidth: 2,
    borderTopColor: "#F8EDFD",
    borderTopWidth: 2
  },
  point: {
    width: "50%",
    alignItems: "center",
    fontSize: 18
  },
  booked: {
    width: "50%",
    alignItems: "center",
    borderLeftColor: "#F8EDFD",
    borderLeftWidth: 2
  },
  subFunction: {
    padding: 20,
    borderBottomColor: "#ccc",
    marginTop: 20,
    borderBottomWidth: 1
  },
  Infotitle: {
    color: "#54414A",
    fontWeight: "bold",
    fontSize: 18
  },
  content: {
    color: "#FF00A9",
    fontSize: 25,
    fontWeight: "bold"
  },
  functionTitle: {
    fontWeight: "bold",
    color: "#340021",
    fontSize: 23
  },
  functionTools: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20
  },
  toggleTitle: {
    color: "#54414A",
    fontSize: 20,
    width: "90%"
  },
  logginText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    fontSize: 22
  },
  touchlogin: {
    width: "80%",
    height: 90,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: "10%"
  },
  linearGradient: {
    padding: 10,
    borderRadius: 10,
    marginTop: "2%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    borderColor: "#ccc",
    height: 60,
    position: "relative"
  }
};

//Style Booked
export const booked = {
  header: {
    backgroundColor: "#FF00A9",
    height: "22%",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  notification: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24
  },
  datetime: {
    flex: 2
  },
  bookingText: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    fontSize: 16,
    textAlign: "right"
  },
  notifyTime: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22
  },
  notifyDate: {
    color: "#fff"
  },
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 24
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.bold,
    fontSize: sizes.h3,
    marginTop: 24,
    marginBottom: 20
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 15,
    borderRadius: 10,
    marginHorizontal: 2
  },
  datetimeContainers: {
    flex: 2
  },
  price: {
    color: colors.heading,
    fontFamily: fonts.bold,
    fontSize: sizes.h3,
    flex: 1,
    textAlign: "right"
  },
  date: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: sizes.h3
  },
  time: {
    color: colors.heading,
    fontFamily: fonts.bold,
    fontSize: sizes.h2
  }
};
export const bookedDetails = {
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 5
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  itemTitle: {
    fontSize: 18,
    marginLeft: "5%",
    width: "65%",
    fontWeight: "bold",
    textAlignVertical: "center",
    color: "#000"
  },
  price: {
    color: "#000",
    fontWeight: "bold",
    textAlignVertical: "center",
    alignContent: "flex-end"
  },
  ItemContainer: {
    flexDirection: "row",
    flex: 3,
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  summary: {
    width: "100%",
    flex: 2,
    flexDirection: "row",
    borderTopColor: "#ccc",
    borderTopWidth: 2
  },
  summaryTitle: {
    width: "80%",
    fontWeight: "bold"
  },
  summaryContain: {
    alignContent: "space-between",
    alignItems: "flex-end",
    alignContent: "flex-end"
  },
  content: {
    width: "90%",
    marginLeft: "10%",
    marginTop: 5,
    color: "#000"
  },
  linearGradient: {
    borderRadius: 6,
    height: 50,
    padding: 7,
    textAlignVertical: "center",
    marginTop: 100,
    alignContent: "center",
    alignItems: "center"
  },
  bookText: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    color: "#fff"
  },
  bookButton: {
    width: 66,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    alignItems: "center"
  },
  serviesTitle: {
    fontWeight: "bold",
    paddingBottom: 15,
    fontSize: 19,
    color: "#000"
  }
};
//Style Cart
export const cart = {
  title: {
    fontSize: sizes.h3,
    color: colors.heading,
    fontFamily: fonts.bold,
    marginTop: 24,
    marginBottom: 20,
    marginHorizontal: 24
  },

  cartItem: {
    width: 328,
    height: 53,
    marginLeft: 20,
    borderRadius: 10,
    position: "relative",
    flex: 3,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center"
  },
  itemTitle: {
    fontSize: 14,
    color: "#54414A",
    alignContent: "center",
    alignItems: "center",
    left: 16,
    fontFamily: fonts.bold
  },
  image: {
    borderRadius: 22,
    width: 44,
    height: 44
  },
  price: {
    flex: 1,
    textAlign: "right",
    color: "#54414A",
    fontSize: 14
  },
  summarytext: {
    color: "#54414A",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 12,
    paddingBottom: 10
  },
  amountContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    left: 0,
    backgroundColor: "#FFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    flex: 1,
    width: "100%"
  },
  amountChild: {
    flex: 1,
    flexDirection: "row"
  }
};

export default theme = {
  sizes,
  colors,
  fonts,
  welcome,
  login,
  home,
  services,
  booked,
  profile,
  bookedDetails,
  cart
};
