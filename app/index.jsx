import { Text, View } from "react-native";
import { Link } from "expo-router";
const RootLayout = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-400 font-pblack text-3xl">index</Text>

      <Link className="text-2xl text-green-500" href="/#">
        Go to profile
      </Link>
    </View>
  );
};

export default RootLayout;
