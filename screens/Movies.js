export default ({ navigation }) => (
    <View>
        <Text>Home</Text>
        <Button
            onPress={() => navigation.navigate("Detail")}
            title="Go to Detail"
        />
        <Text>Movies</Text>
        <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
    </View>
);