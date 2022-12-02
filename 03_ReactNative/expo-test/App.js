import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-black text-xl font-bold">Login</Text>
        <StatusBar/>
        <View className="w-3/5 border-2 rounded m-4 items-center">
        <TextInput
          className="h-8 p5"
          placeholder="Display Name..."
        />
        </View>
        <View className="w-3/5 border-2 rounded items-center">
        <TextInput
          className="h-8 p5"
          placeholder="Password"
        />
        </View>
        <View className="w-1/4 rounded mt-4 items-center bg-blue-500 hover:bg-white">
          <Button
            color="white"
            title="OK"
          />
        </View>
        <View className="flex-row">
          <Text className="text-xs mt-1 underline">Forgot Password?</Text>
          <Text className="text-xs mt-1 underline">Sign Up?</Text>
        </View>
      </View>
    </TailwindProvider>
  );
}