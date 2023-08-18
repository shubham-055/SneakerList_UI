import React, { useState } from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import {Menu, Sneaker1, Search, Icon1, Icon2,Sneaker2,Sneaker3,Sneaker4,Sneaker5,Sneaker6,Heart,Heart2} from './Assets/SVG';
import Color from './Assets/ColorsUI/Color'

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Searchbar />
      <Header />
      <List />
    </SafeAreaView>
  );
};

const Heartcheck=()=>{
  const heart1=<Heart />;
  const heart2=<Heart2 />;
const [heart, setHeart]=useState(false)
  const check=()=>{
    
    if(heart){
      setHeart(false) 
    }else{
      setHeart(true)
    }
  }
    return (
      <TouchableOpacity style={styles.heart} onPress={check}>
      {heart&&heart2}
      {!heart&&heart1}
    </TouchableOpacity>
  )
}
const List = () => {


  const DATA = [
    {
      id: 1,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Sneaker1 />,
      price: '$96',
      
    },
    {
      id: 2,
      heading: 'Converse',
      subheadhing: 'Run Star Hike Three Color Unisex',
      image: <Sneaker2 />,
      price: '$85.5',
      
    },
    {
      id: 3,
      heading: 'Nike',
      subheadhing: 'Air Jordan 1 Retro High Obsidian UNC ',
      image: <Sneaker3 />,
      price: '$196',
      
    },
    {
      id: 4,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Sneaker4 />,
      price: '$115',
      
    },
    {
      id: 5,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Sneaker5 />,
      price: '$96',
      
    },
    {
      id: 6,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Sneaker6 />,
      price: '$96',
      
    },
    {
      id: 7,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Sneaker1 />,
      price: '$96',
      
    },
    {
      id: 8,
      heading: 'Converse',
      subheadhing: 'Run Star Hike Three Color Unisex',
      image: <Sneaker2 />,
      price: '$85.5',
      
    },
    {
      id: 9,
      heading: 'Nike',
      subheadhing: 'Air Jordan 1 Retro High Obsidian UNC ',
      image: <Sneaker3 />,
      price: '$196',
      
    },
    {
      id: 10,
      heading: 'Nike',
      subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
      image: <Sneaker4 />,
      price: '$115',
      
    },
  ];
  return (
    <View style={styles.container}>
          <FlatList
            data={DATA}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.card}>

                <View style={styles.upper}>
                  <View style={styles.shoes}>{item.image}</View>
                  <Heartcheck />
                </View>
                <View style={styles.lower}>
                <Text style={styles.title}>{item.heading}</Text>
                <Text style={styles.subheadhing}>{item.subheadhing}</Text>
                <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            )}
          />
        </View>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.heading}>
        <Text style={styles.sneakerhead}>Sneakers</Text>
        <View style={styles.icons}>
          <Icon1 />
          <Icon2 />
        </View>
      </View>
      <View style={styles.products}>
        <Text style={styles.productstext}>25 products found</Text>
      </View>
    </View>
  );
};

const Searchbar = () => {
  return (
    <View style={styles.searchbar}>
      <View style={styles.menu}>
        <Menu />
      </View>
      <View style={styles.search}>
        <View style={styles.searchmenu}>
          <Search />
          <TextInput
            style={styles.searchproduct}
            placeholder="Search product"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.lightCream,
  },
  searchbar: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2.5%',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 6,
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: Color.white,
    height: '80%',
    alignItems: 'center',
  },
  searchmenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '8%',
    
  },
  searchproduct: {
    color: Color.lightGrey,
    fontSize: 16,
    fontFamily: 'Bilo',
    fontWeight: '400',
    marginLeft: '5%',
  },
  header: {
    flex: 2,
    marginTop: '2.5%',
    marginHorizontal: '5%',
    
    
  },
  heading: {
    flex: 6,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },
  sneakerhead: {
    color: Color.black,
    fontSize: 30,
    fontFamily: 'Montserrat',
    fontWeight: '800',
    justifyContent: 'flex-start',
  },
  products: {
    flex: 4,
    flexDirection: 'row',
  },
  productstext: {
    color: Color.black,
    fontSize: 16,
    fontFamily: 'Bilo',
    fontWeight: '400',
    flexWrap:'wrap',
  
  },
  list: {
    flex: 12,
    backgroundColor: 'red',
  },
  container: {
    flex: 12,
    paddingTop: 4,
    marginLeft:'5%',
   
  },
  card: {
    flex: 1,
    backgroundColor: Color.white,
    marginBottom: 20,
    marginRight:15,
    
    borderRadius: 15,
  },
  shoes: {
   justifyContent:'flex-end',
    alignItems:'center',
  
    
  },
  heart: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  subheadhing: {
    fontSize: 13,
    flexWrap: 'wrap',
    paddingTop: 7,
    paddingHorizontal: 15,
  },
  price: {
    fontSize: 13,
    paddingTop: 7,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  upper:{
    flex:1,
    justifyContent:'flex-end',
  },
  lower:{
    flex:1,
    justifyContent:'flex-end',
  }
});

export default App;
