import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import {
//   MaterialCommunityIcons
// } from '@expo/vector-icons';
import {
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Image,
  HStack,
  Divider,
  Icon
} from 'native-base';
const Drawer = createDrawerNavigator();
import Home from './../modules/Home/index';


const getIcon = (screenName) => {
  switch (screenName) {
    case 'Inicio':
      return "home"
    case 'Mi Cuenta':
      return 'account'
    case 'Ticket de Ayuda':
      return 'tag'
    case '!Regístrate Gratis!':
      return 'login'
    case 'Registro (RUA)':
      return 'alpha-r-box'
    case 'Rastreo de Paquete':
      return 'package-variant-closed'
    case 'Calcula tu Envío':
      return 'package-up'
    case 'Servicios':
      return 'alpha-s-box'
    case 'Noticias':
      return 'script-text-outline'
    case 'Sucursales':
      return 'store'
    case 'Solicitar Franquicia':
      return 'storefront'
    case 'Trabaja con Nosotros':
      return 'briefcase-variant'
    case 'Preguntas Frequentes':
      return 'help'
    case 'Términos y Condiciones':
      return 'shield-alert'
    default:
      return undefined
  }
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
    <VStack  space={6} my={1} mx={1}>
      <Box  px={4}>
      <Image size={120} style={{resizeMode: "contain"}} alt="logo bumblox" source={require('./../../assets/img/logo-black.png')} fallbackSource={require('./../../assets/img/logo-black.png')} />
        <Text fontSize={14} mt={1} color="gray.500" fontWeight={500}>Menú</Text>
      </Box>
    <VStack divider={<Divider />} space={4}>
      <VStack space={3}>
        {props.state.routeNames.map((name, index) => (
            <Pressable
              px={5}
              py={3}
              key={index}
              rounded="md"
              bg={index === props.state.index ? 'rgba(6, 182, 212, 0.1)' : 'transparent'}
              onPress={(event) => {
                props.navigation.navigate(name);
              }}
              >
                <HStack space={7} alignItems="center">
                  {/* <Icon
                  color={index === props.state.index ? 'primary.500' : 'gray.500'}
                  size={5} as={<MaterialCommunityIcons name={getIcon(name)}/>}  /> */}
                  <Text fontWeight={500} color={index === props.state.index ? 'primary.500' : 'gray.700'}>
                  {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
         </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
export function DrawerMenu() {
  return (
    <Box safeArea flex={1} >
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inicio" initialParams={{
        url:"0",
        activeIframe: false
      }} component={Home} />
      <Drawer.Screen name="Mi Cuenta" initialParams={{
        url:"http://micuenta.blumbox.do/",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Ticket de Ayuda" initialParams={{
        url:"http://ticket.blumbox.do/",
        activeIframe: false
      }} component={Home} />
      <Drawer.Screen name="!Regístrate Gratis!" initialParams={{
        url:"http://membresia.blumbox.do/",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Registro (RUA)" initialParams={{
        url:"https://rua.blumbox.do/",
        activeIframe: false
      }} component={Home} />
      <Drawer.Screen name="Rastreo de Paquete" initialParams={{
        url:"http://rastreo.blumbox.do/",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Calcula tu Envío" initialParams={{
        url:"http://calculadora.blumbox.do/",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Servicios" initialParams={{
        url:"https://blumbox.do/app/servicios.php",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Noticias" initialParams={{
        url:"https://blumbox.do/noticias/",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Sucursales" initialParams={{
        url:"https://blumbox.do/app/sucursales.php",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Solicitar Franquicia" initialParams={{
        url:"https://blumbox.do/app/franquicias.php",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Trabaja con Nosotros" initialParams={{
        url:"https://blumbox.do/app/empleos.php",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Preguntas Frequentes" initialParams={{
        url:"https://blumbox.do/app/preguntas-frecuentes.php",
        activeIframe: true
      }} component={Home} />
      <Drawer.Screen name="Términos y Condiciones" initialParams={{
        url:"https://blumbox.do/app/terminos-condiciones.php",
        activeIframe: true
      }} component={Home} />
    </Drawer.Navigator>
    </Box>
  );
}