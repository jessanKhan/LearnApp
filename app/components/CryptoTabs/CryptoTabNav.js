import React from 'react';
import {
    createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ImageBackground, } from "react-native";
import CryptoNewsList from '../CryptoNewsList';
import CryptoAnalyticsList from '../CryptoAnalyticsList';
import NewsDetails from '../CryptoNewsDetails';
import AnalyticsDetails from '../CryptoAnalyticsDetails';
import OfflineMSG from '../OfflineScreen/Offline.js';
import BackIcon from '../SVG/BackIcon';
import { connect } from 'react-redux';
import translate from '../../services/i18n/customTranslator';
import { Badge } from 'react-native-elements';
import { Button } from 'react-native-paper';
import NetInfo from "@react-native-community/netinfo";
const bgImage = require('../../images/AppBackground.png');
class Cryptotab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            connection_Status: ""
        };

        // this.navigationWillFocusListener = props.navigation.addListener(
        //     'willFocus',
        //     () => {

        //         this.props.initData == 'success' ? null
        //             // ? this.props.dispatch(
        //             //     homeDataRefresh(
        //             //         this.props.lang,
        //             //         this.props.UnredCryptonewsData,
        //             //         this.props.UnreadYoutubedata,
        //             //         this.props.UnredCryptoanalyticsData,
        //             //         this.props.UnGetN_Data,
        //             //     ),
        //             // )
        //             : this.props.lnagLoaded == true
        //                 ? this.props.dispatch(homeDataLoad(props.lang))
        //                 : null;
        //     },
        // );
    }

    componentDidMount() {
        this.deviceNetConnection();

    }

    UNSAFE_componentWillMount() {
        this.deviceNetConnection();
    }

    deviceNetConnection = () => {
        NetInfo.fetch().then(state => {
            if (state.isInternetReachable == true) {
                this.setState({ connection_Status: true })
                console.log("Connection State give it to me", state.isInternetReachable)
            } else {
                this.setState({ connection_Status: false })
            }
        });
    }

    connestionStatusON = () => {

    }
    connestionStatusOff = () => {

    }


    render() {
        console.log("All props", this.props)
        console.log("Connection State from state", this.state.connection_Status)

        const TabScreen = createMaterialTopTabNavigator(
            {
                Anakytics: {
                    screen: (this.state.connection_Status = true ? CryptoAnalyticsList : OfflineMSG),
                    navigationOptions: {
                        tabBarLabel: (
                            <TouchableOpacity>
                                <Text>{translate('Analytics', this.props.lang)}</Text>
                                {/* <Badge
                                    badgeStyle={styles.BadgeStyle}
                                    value={this.props.UnredCryptonewsData}
                                    containerStyle={{ position: 'absolute', top: -12, right: -30 }}
                                /> */}
                            </TouchableOpacity>

                        )
                    }
                },

                News: {
                    screen: (this.state.connection_Status = true ? CryptoNewsList : OfflineMSG),
                    navigationOptions: {
                        tabBarLabel: (
                            <View>
                                <TouchableOpacity>
                                    <Text>{translate('News', this.props.lang)}</Text>
                                    {/* <Badge
                                    badgeStyle={styles.BadgeStyle}
                                    value={this.props.UnGetN_Data}
                                    containerStyle={{ position: 'absolute', top: -12, right: -60 }}
                                /> */}
                                </TouchableOpacity>
                            </View>
                        )
                    }
                },
            },

            {
                tabBarPosition: 'top',
                swipeEnabled: true,
                animationEnabled: true,
                tabBarOptions: {

                    activeTintColor: '#303b55',
                    inactiveTintColor: '#6c7984',
                    style: {
                        backgroundColor: '#fff',
                    },
                    labelStyle: {
                        textAlign: 'center',
                    },
                    indicatorStyle: {
                        borderBottomColor: '#0a88ff',
                        borderBottomWidth: 2,
                    },
                },
            }
        );

        const CreateCryptoAnalytics = createStackNavigator({

            TabScreen: {
                screen: TabScreen,
                navigationOptions: props => {
                    return {

                        title: translate('CryptoAnalytics', this.props.lang),
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: 'rgb(48,59,85)',
                            height: 80,
                        },
                        headerTitleStyle: {
                            top: 8,
                        },
                        headerLeft: () => (
                            <TouchableOpacity
                                style={styles.headerBackButton}
                                onPress={() => {
                                    this.props.navigation.navigate("Home");
                                }}>
                                <BackIcon width={24} height={24} fill="#FFF" top={8} />
                            </TouchableOpacity>
                        ),
                    };
                },
            },

            AnalyticsDetails: {
                screen: AnalyticsDetails,
                navigationOptions: props => {
                    return {
                        title: translate('CryptoAnalytics', this.props.lang),
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: 'rgb(48,59,85)',
                            height: 80,
                        },
                        headerTitleStyle: {
                            top: 8,
                        },
                        headerLeft: () => (
                            <TouchableOpacity
                                style={styles.headerBackButton}
                                onPress={() => {
                                    props.navigation.goBack();
                                }}>
                                <BackIcon width={24} height={24} fill="#FFF" top={8} />
                            </TouchableOpacity>
                        ),
                    };
                },
            },
            NewsDetails: {
                screen: NewsDetails,
                navigationOptions: props => {
                    return {
                        title: translate('CryptoAnalytics', this.props.lang),
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: 'rgb(48,59,85)',
                            height: 80,
                        },
                        headerTitleStyle: {
                            top: 8,
                        },
                        headerLeft: () => (
                            <TouchableOpacity
                                style={styles.headerBackButton}
                                onPress={() => {
                                    props.navigation.goBack();
                                }}>
                                <BackIcon width={24} height={24} fill="#FFF" top={8} />
                            </TouchableOpacity>
                        ),
                    };
                },
            },

        });

        const MainNavigatorContainer = createAppContainer(CreateCryptoAnalytics);


        return (
            <View style={styles.screen}>

                <MainNavigatorContainer />
                {/* {!this.state.connection_Status &&
                    <ImageBackground
                        source={bgImage}
                        style={styles.bgImage}
                        resizeMode="cover">
                        <View style={styles.NoNetView}>
                            <Text style={styles.NetErrorText}> {translate("PleaseCheck", this.props.lang)} </Text>
                           
                        </View>
                    </ImageBackground >} */}
            </View>

        );



    }


}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
    },
    headerBackButton: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 20

    },
    cryptoNewsTabsHeader: {
        fontWeight: 'bold',
        color: 'rgb(48,59,85)',
    },
    BadgeStyle: {
        backgroundColor: '#FF0069',
        height: 25,
        width: 25,
        borderRadius: 50,
    },

    NoNetView: {
        alignItems: "center", justifyContent: "center", top: '44%'
    },
    NetErrorText: {
        color: "#fff"
    },
    // NetErrorButton: {
    //     width: 80, backgroundColor: '#303B55', margin: 20
    // }
});

const mapStateToProps = state => {
    const lang = state.languageReducer.lang;
    const UnredCryptonewsData = state.homeReducer.UnredCryptonewsData;
    const UnreadYoutubedata = state.homeReducer.UnreadYoutubedata;
    const UnredCryptoanalyticsData = state.homeReducer.UnredCryptoanalyticsData;
    const UnGetN_Data = state.homeReducer.UnGetN_Data;
    return {
        lang,
        UnredCryptonewsData,
        UnreadYoutubedata,
        UnredCryptoanalyticsData,
        UnGetN_Data,
    };
};


export default connect(mapStateToProps)(Cryptotab);
// export default Cryptotab;