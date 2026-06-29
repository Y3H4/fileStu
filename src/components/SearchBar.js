import { Text,View,TextInput,TouchableOpacity} from 'react-native'
import {styles, Styles } from '../Styles/globalStyles'

export default function SearchBar({
    searchText,
    onChangeText,
    onSearch,
    loading 
}){
    return (
        <View style={styles.searchContainer}> 
        <TextInput 
            style={style.searchInput}
            placeholder='ค้นหาเมือง ...🔎'
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            value={searchText}
            onChangeText={onChangeText}
            onSubmitEditing={onSearch}
            returnKeyType='search'
            
            />
            <TouchableOpacity
                style={styles.searchButton}
                onPress={onSearch}
                disabled={loading}
            >
                <Text>🔎</Text>
            </TouchableOpacity>



        </View>


    )
}