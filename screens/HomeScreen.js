import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'grey', padding: 20 }}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={{ textAlign: 'center' }}>Go to profil</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
