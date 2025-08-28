import { useNavigation } from "expo-router";
import { useContext, useEffect, useRef, useState } from "react";
import { Animated, Dimensions, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SelectTravelersList } from "../../constant/Options";
import { CreateTripContext } from "../../context/CreateTripContext";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = 570;
const SPACING = 20;


export default function SelectTraveler() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();
    useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: "#006A4E",
    });
  }, []);

  const data = [...SelectTravelersList, ...SelectTravelersList, ...SelectTravelersList];

  useEffect(() => {
    setTripData({ ...tripData, traveler: selectedTraveler });
  }, [selectedTraveler]);

  const renderTravelerCard = ({ item, index }) => {
    const inputRange = [
      (index - 1) * (CARD_WIDTH + SPACING),
      index * (CARD_WIDTH + SPACING),
      (index + 1) * (CARD_WIDTH + SPACING),
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.85, 1, 0.85],
      extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: "clamp",
    });

    const isSelected = selectedTraveler?.id === item.id;

    return (
      <Animated.View
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          marginHorizontal: SPACING / 2,
          transform: [{ scale }],
          opacity,
          borderRadius: 20,
          overflow: "hidden",
          borderWidth: isSelected ? 3 : 0,
          borderColor: isSelected ? "#004D40" : "transparent",
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setSelectedTraveler(item)}
          style={{ flex: 1 }}
        >
          <ImageBackground
            source={item.image} // make sure the require path is correct
            style={{ flex: 1, justifyContent: "flex-end", padding: 20 }}
            imageStyle={{ borderRadius: 20 }}
            resizeMode="cover"
          >
            <View
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                padding: 10,
                borderRadius: 12,
              }}
            >
              <Text style={{ fontFamily: "outfit-bold", fontSize: 22, color: "#fff" }}>
                {item.title}
              </Text>
              <Text style={{ fontFamily: "outfit-medium", fontSize: 16, color: "#fff", marginTop: 4 }}>
                {item.desc}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const handleScrollEnd = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = (CARD_WIDTH + SPACING) * SelectTravelersList.length;

    if (offsetX <= 0) {
      scrollRef.current.scrollToOffset({ offset: contentWidth, animated: false });
    } else if (offsetX >= contentWidth * 2) {
      scrollRef.current.scrollToOffset({ offset: contentWidth, animated: false });
    }
  };

  const getItemLayout = (_, index) => ({
    length: CARD_WIDTH + SPACING,
    offset: (CARD_WIDTH + SPACING) * index,
    index,
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F5", paddingTop: 75 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 32, color: "#006A4E", marginBottom: 5, paddingHorizontal: SPACING }}>
        Who's Traveling
      </Text>
      <Text style={{ fontFamily: "outfit", fontSize: 18, color: "#444", marginBottom: 10, paddingHorizontal: SPACING }}>
        Choose your travelers:
      </Text>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 16, color: "#006A4E", marginBottom: 20, paddingHorizontal: SPACING }}>
        Swipe to explore more options
      </Text>

      <Animated.FlatList
        ref={scrollRef}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        bounces={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        onMomentumScrollEnd={handleScrollEnd}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={renderTravelerCard}
        getItemLayout={getItemLayout}
        initialScrollIndex={SelectTravelersList.length}
      />

      {selectedTraveler && (
        <TouchableOpacity
          onPress={() => navigation.navigate("create-trip/select-dates")}
          style={{
            position: "absolute",
            bottom: 30,
            left: SPACING,
            right: SPACING,
            padding: 18,
            borderRadius: 25,
            backgroundColor: "#006A4E",
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 6 },
            shadowRadius: 10,
            elevation: 6,
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff", fontFamily: "outfit-bold", fontSize: 20, letterSpacing: 1 }}>
            Continue
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}







