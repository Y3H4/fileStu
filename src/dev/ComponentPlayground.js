import React , { Children, useState }from 'react'
import { ScrollView, View , Text , SafeAreaViewBase , Alert} from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import { WEATHER_GRADIENTS } from '../constants/weathertheme'
import { styles } from "../Styles/globalStyles"
import emptyState from "../component/emptyState"

export const PREVIEW = '_';
const noop = () => Alert.alert(" Preview","ปุ่มทำงาน (โหมดทดสอบ)")
function PreviewBlock({title,children}){
    return(
        <View style={playgroundStyles.block}>
            <Text style={playgroundStyles.blockTitle}>{title}</Text>
            {children}

        </View>

    )
}

export default function componentPlayground(){
    const show = (name) => PREVIEW  === name;

    return (
    <LinearGradient colors={WEATHER_GRADIENTS.default} style={styles.container}>
        <SafeAreaViewBase style={styles.safeArea}>
            <View>
                <Text style={playgroundStyles.bannerText}>
                        playground --: {PREVIEW}
                </Text>
                <Text style={playgroundStyles.bannerSub}>
                        จัก
                </Text>


            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator>
                    {show('EmptyState') && (
                        <PreviewBlock title="EmptyState"> 
                            <emptyState
                                icon=""
                                title=""
                                subtitle=""
                            />
                        </PreviewBlock>
                    )}

            </ScrollView>

        </SafeAreaViewBase>
    </LinearGradient>
    )
}


const playgroundStyles = {
    banner:{
        backgroundcolor: 'rgba(0,0,0,0.35)',
        padding:12,
        marginHorizontal:16,
        MarginTop:8,
        borderRadius:8
    },
    bannerText:{ color: 'fff' , fontWeight: 'bold' , fontsize: 14},
    bannerSub:{
        color : 'rgba(255,255,255,0.8)',
        fontSize:11,
        MarginTop: 4
    },
    block:{marginBottom: 24},
    blockTitle:{
        color: '#fff',
        fontsize: 12,
        fontWeight: '600',
        marginBottom:8,
        opacity: 0.85,
        TextTranform: 'uppercase',
    },
    hint:{
        color : 'rgba(255,255,255,0.7)',
        TextAling: 'center',
        MarginTop:40,
        paddingHorizontal:20
    },
    
}