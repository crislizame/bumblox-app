import React, { Component } from 'react';
import {View, TouchableOpacity, Appearance,Linking} from 'react-native'
import { VStack, HStack, Button, IconButton,  Center, Image, Text, useColorMode, Pressable, useColorModeValue } from "native-base";
// import { MaterialIcons, MaterialCommunityIcons, Ionicons, Foundation} from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import styles from './styles/styleHome';
// import API from '../../../utils/api';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(props.route.params)
        this.state = {
            schemeColor: Appearance.getColorScheme(),
            activeIframe: props.route.params.url === "0" ? false : props.route.params.activeIframe,
            url:props.route.params.url
        };
        if(props.route.params.url !== "0" && props.route.params.activeIframe === false){
            Linking.openURL(props.route.params.url);
        }
    }
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true
    }

    async componentWillUnmount() {
        this._isMounted =false
    }
    render() {
        
        return (
            <VStack style={{backgroundColor: this.state.schemeColor === 'light' ? "white" : "black", flex:1, paddingVertical: hp(2), paddingHorizontal: wp(5) }}>
                <HStack  justifyContent='space-between' style={{flex:1}} alignItems='center'>
                        <HStack space={3} alignItems='center'>
                        
                            <IconButton rounded="50" onPress={() =>  this.props.navigation.toggleDrawer()} backgroundColor="#50B8BE" icon={<Icon size={20} type="material" name="menu" color="white" />} />
                            <Image
                            size={120}
                            style={{
                                resizeMode: "contain",
                            }}
                            alt="logo bumblox"
                            source={this.state.schemeColor === 'light' ? require('../../../assets/img/logo-black.png') : require('../../../assets/img/logo-white.png')}
                            fallbackSource={this.state.schemeColor === 'light' ? require('../../../assets/img/logo-black.png') : require('../../../assets/img/logo-white.png')}
                            />
                        </HStack>
                        <HStack space={4}>
                            <IconButton onPress={() => {
                                this.setState({
                                    url:"https://blumbox.do/app/sucursales.php",
                                    activeIframe:true
                                })
                            }} rounded="50" backgroundColor={this.state.schemeColor === 'light' ? "black": "white"} icon={ <Icon size={16} type="material" name="phone"  color={this.state.schemeColor === 'light' ? "white" : "#50B8BE"} />} />
                            <IconButton onPress={() => {
                                this.setState({
                                    url:"https://blumbox.do/app/sucursales.php",
                                    activeIframe:true
                                })
                            }} rounded="50" backgroundColor={"#50B8BE"} icon={<Icon type="font-awesome" name="whatsapp" color="white" size={16} />} 
                             />
                        </HStack>
                    </HStack>
                    {(this.state.activeIframe ? (
                        <View style={{
                            flex:7
                        }}>
                            <WebView
                                source={{ uri: this.state.url }}
                                style={{ marginVertical: hp(2) }}
                            />
                        </View>
                        ) : (
                        <>
                        <View style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                            backgroundColor:"white",
                            borderRadius: 20,
                            flex:6
                            }}>
                            <Image
                            size={wp(100)}
                            style={{
                            flex:5
                            }}
                            alt="fallback text"
                            borderRadius={20}
                            source={{
                                uri: 'https://blumbox.do/app/banner.png',
                            }}
                            fallbackSource={{
                                uri: "https://blumbox.do/app/banner.png",
                            }}
                            />
                            </View>
                    <HStack space={3} style={{flex:2}} justifyContent='space-between' alignItems="center">
                    <Center
                    bg="lightBlue.100"
                    rounded="20"
                    _text={{
                        color: "black",
                    }}
                    style={{
                        padding: 20,
                        height: "80%",
                        flex:1
                    }}
                    >
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://ticket.blumbox.do/');
                                this.setState({
                                    url:"http://ticket.blumbox.do/",
                                    activeIframe:false
                                })
                            }}>
                            <VStack space={3}  justifyContent='space-between' style={{textAlign: "center"}} alignItems="center">
                                <View style={{
                                    borderRadius: 50,
                                    padding:wp(2.5)
                                }} backgroundColor="#50B8BE" >
                                <Icon size={20} type="ionicon"  name='pricetag' color="white" />
                                </View>
                                <Text style={{fontSize: wp(3.5), textAlign:"center"}}>Ticket de Ayuda</Text>
                            </VStack>
                        </TouchableOpacity>

                    </Center>
                    <Center
                    bg="lightBlue.100"
                    rounded="20"
                    _text={{
                        color: "black",
                    }}
                    style={{
                        padding: 20,
                        height: "80%",
                        flex:1
                    }}
                    >
                    <TouchableOpacity onPress={() => {
                                this.setState({
                                    url:"https://blumbox.do/app/sucursales.php",
                                    activeIframe:true
                                })
                            }}>
                        <VStack space={3} justifyContent='space-between' alignItems="center">
                            <View style={{
                                borderRadius: 50,
                                padding:wp(2.5)
                            }} backgroundColor="#50B8BE" >
                            <Icon size={20} type="ionicon"  name='location-sharp' color="white" />

                            </View>
                            <Text style={{fontSize: wp(3.5), textAlign:"center"}}>Sucursales</Text>
                        </VStack>
                    </TouchableOpacity>
                    </Center>
                    <Center
                    bg="lightBlue.100"
                    rounded="20"
                    _text={{
                        color: "black",
                    }}
                    style={{
                        padding: 20,
                        height: "80%",
                        flex:1
                    }}
                    >
                    <TouchableOpacity onPress={() => {
                                this.setState({
                                    url:"http://membresia.blumbox.do/",
                                    activeIframe:true
                                })
                            }}>
                        <VStack space={3} justifyContent='space-between' alignItems="center">
                            <View style={{
                                borderRadius: 50,
                                padding:wp(2.5),
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign:"center"
                            }} backgroundColor="#50B8BE" >
                            <Icon size={20} style={{
                                alignSelf:"center",
                                textAlign:"center"
                            }} name='clipboard-pencil' type="foundation" color="white" />
                            </View>
                            <Text style={{fontSize: wp(3.5), textAlign:"center"}}>Registrate</Text>
                        </VStack>
                    </TouchableOpacity>
                    </Center>
                    </HStack>
                    
                        </>
                    ) )}
                    <HStack style={{flex: 1}} bg="#50B8BE" rounded="20" alignItems="center" safeAreaBottom >
                    <Pressable
                        py={2}
                        flex={1}
                        onPress={() => {
                            this.setState({
                                url:"http://micuenta.blumbox.do/",
                                activeIframe:false
                            })
                        }}
                    >
                        <Center>
                        
                        <Icon size={20}  name='clipboard' type="material-community" color="white" />

                        <Text color="white" fontSize={14}>Inicio</Text>
                        </Center>
                    </Pressable>
                    <Pressable
                        py={2}
                        flex={1}
                        onPress={() => {
                            this.setState({
                                url:"http://micuenta.blumbox.do/",
                                activeIframe:true
                            })
                        }}
                    >
                        <Center>
                        <Icon size={20}  name='account' type="material-community" color="white" />


                        <Text color="white" fontSize={14}>Mi Cuenta</Text>
                        </Center>
                    </Pressable>
                    <Pressable
                        py={2}
                        flex={1}
                        onPress={() => {
                            this.setState({
                                url:"http://rastreo.blumbox.do/",
                                activeIframe:true
                            })
                        }}
                    >
                        <Center>
                        
                        <Icon size={20} type="material"  name='location-pin' color="white" />

                       


                        <Text color="white" fontSize={14}>Rastreo</Text>
                        </Center>
                    </Pressable>
                    <Pressable
                        py={2}
                        flex={1}
                        onPress={() => {
                            this.setState({
                                url:"https://blumbox.do/app/contacto.php",
                                activeIframe:true
                            })
                        }}
                    >
                        <Center>
                        <Icon size={20} type="material"  name='contact-phone' color="white" />

                        <Text color="white" fontSize={14}>Contacto</Text>
                        </Center>
                    </Pressable>
                    </HStack>
            </VStack>
        );
    }
}

export default Home
