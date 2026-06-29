import {View ,Text } from 'react'
import {styles} from '../Styles/globalStyles'

export default function emptyState({ icon,title,subtitle}){
    return (
    <View syles={styles.emptyState}>
        <Text styles={styles.emptyIcon}> {icon} </Text>
        <Text styles={styles.emptyTitle}> {title} </Text>
        <Text styles={styles.emptySubtitle}> {subtitle} </Text>

    </View>
    )
}