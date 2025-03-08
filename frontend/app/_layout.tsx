import { Stack } from "expo-router";
import './globals.css'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="emails/[id]" options={{headerShown: false}}/>
    </Stack>
  )
}
