# Tuto ReactNative routing

1.  Pour créer de nouveaux écrans/pages ajouter un fichier [nom_du_fichier].js dans le dossier screens
    Ex:

        export default function Page1Screen() {
            return (
                <>
                    <Text>Page1 screen</Text>
                </>
            )
        }

2.  Puis ajouter dans le fichier App.js une balise Stack.Screen

    Ex :
    <Stack.Screen name="Page1" component={Page1Screen} />
