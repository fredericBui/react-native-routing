import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'

export default function ProfileScreen() {
  const navigation = useNavigation()

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile screen</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'grey', padding: 20 }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ textAlign: 'center' }}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
