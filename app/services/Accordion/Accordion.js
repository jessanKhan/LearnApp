import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Icon } from "react-native-elements";

import ArrowDownIcon from '../../components/SVG/ArrowDownIcon';
import ArrowUpIcon from '../../components/SVG/ArrowUpIcon';

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }

    render() {

        return (
            <View>
                    <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                        <View style={styles.itemContainer}>
                                <View style={styles.iconStyle}>
                                    <Icon
                                        raised
                                        name="bitcoin"
                                        type="font-awesome"
                                        color="#ff0072"
                                        size={20}
                                        containerStyle={{
                                            backgroundColor: null
                                    }}/>
                                </View>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}>{this.props.title}</Text>
                                </View>
                                {this.state.expanded ? <ArrowUpIcon width={25} height={25} fill={"#999"}/> : <ArrowDownIcon width={25} height={25} fill={"#999"}/>}
                        </View>
                    </TouchableOpacity>
                    <View style={styles.parentHr}/>
                    {
                        this.state.expanded &&
                        <View style={styles.child}>
                            <Text>{this.props.data}</Text>    
                        </View>
                    }
            </View>
        )
    }


}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: "#FFF",
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: "#555",
        textAlign: "center",
        textAlignVertical: "center"
    },
    parentHr:{
        height:1,
        backgroundColor: "#DDD",
        width: '100%'
    },
    child:{
        backgroundColor: "#f8f8f8",
        padding:16,
    }
    
});