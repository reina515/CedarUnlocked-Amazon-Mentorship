import { useContext, useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { AI_PROMT } from "../../constant/Options";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    tripData && GenerateAiTrip();
  }, [tripData]);

  const GenerateAiTrip = () => {
    const FINAL_PROMT = AI_PROMT
      .replace("{location}", tripData.locationInfo.name)
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNight}", tripData.totalNoOfDays - 1)
      .replace("{traveler}", tripData.traveler.title)
      .replace("{budget}", tripData.budget)
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNight}", tripData.totalNoOfDays - 1);
    console.log(FINAL_PROMT);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fdfdfd",
        paddingTop: 70,
        alignItems: "center",
      }}
    >
      {/* Top Title Section */}
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 32,
          textAlign: "center",
          color: "#006A4E", // cedar green, premium travel vibe
          marginBottom: 10,
        }}
      >
        Please Wait
      </Text>

      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          textAlign: "center",
          marginBottom: 20,
          color: "#444",
          paddingHorizontal: 30,
        }}
      >
        We are crafting your perfect Lebanese journey!
      </Text>

      {/* Loading Spinner */}
      <ActivityIndicator size="large" color="#C49A6C" style={{ marginBottom: 30 }} />

      {/* Image Section */}
      <View
        style={{
          width: "90%",
          height: 350,
          borderRadius: 18,
          overflow: "hidden",
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 5,
          marginBottom: 40,
        }}
      >
        <Image
          source={require("./../../assets/images/pic.jpg")}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>

      {/* Footer Note */}
<Text
  style={{
    fontFamily: "outfit-regular",
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 40,
    lineHeight: 22,
  }}
>
  Hang tight while we prepare a tailor-made trip experience for{" "}
  <Text style={{ color: "#C49A6C", fontFamily: "outfit-bold" }}>
    {tripData?.locationInfo?.name || "Lebanon"}
  </Text>
  .
</Text>

<Text
  style={{
    fontFamily: "outfit-regular",
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginTop: 10,
  }}
>
  This won’t take long!
</Text>

    </View>
  );
}
