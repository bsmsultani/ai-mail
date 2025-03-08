import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (

    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl color-primary">Hello world</Text>
      <Link href='/onboarding'>go to onboarding</Link>
      <Link href='/emails/00034'>Go to email</Link> 
      <Text>Hello</Text>
    </View>
  );
}
