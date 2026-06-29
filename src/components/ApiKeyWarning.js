import React from "react";
import { View , Text } from 'react-native'
import { IsapiKeyConfig } from '../configs/api'
import { styles  } from "../Styles/globalStyles";

export default function Apikeywaring () {
    if( IsapiKeyConfig()){
        return null;
    }

    return (
        <View style={styles.apiWarning}>
            <Text style={styles.apiWarningText}> ตั้งค่า apikeyก่อน</Text>
            <Text style={styles.apiWarningSubtext}>   สมัครฟรีที่ dum888</Text>


        </View>
    )
}

 
    