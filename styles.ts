import { StyleSheet } from 'react-native';

const text = StyleSheet.create({
    p: {
      color: 'black',
      fontSize: 16,
    },
    subTitle:{
      color: 'black',
      fontSize: 18,
    },
    title: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 24,
    }
});

const input = StyleSheet.create({
    search: {
        flex: 1,
        fontSize: 14,
        color: '#000',
        height:40,
    },
    icon: {
        marginLeft: 8,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: "#F5F5F5",

    }

})

const spacing = StyleSheet.create({
    // Padding classes
    p1: { padding: 4 },
    p2: { padding: 8 },
    p3: { padding: 12 },
    p4: { padding: 16 },
    p5: { padding: 20 },


    pt1: { paddingTop: 4 },
    pt2: { paddingTop: 8 },
    pt3: { paddingTop: 12 },
    pt4: { paddingTop: 16 },
    pt5: { paddingTop: 20 },

    pb1: { paddingBottom: 4 },
    pb2: { paddingBottom: 8 },
    pb3: { paddingBottom: 12 },
    pb4: { paddingBottom: 16 },
    pb5: { paddingBottom: 20 },
    
    px1: { paddingHorizontal: 4 },
    px2: { paddingHorizontal: 8 },
    px3: { paddingHorizontal: 12 },
    px4: { paddingHorizontal: 16 },
    px5: { paddingHorizontal: 20 },
    
    py1: { paddingVertical: 4 },
    py2: { paddingVertical: 8 },
    py3: { paddingVertical: 12 },
    py4: { paddingVertical: 16 },
    py5: { paddingVertical: 20 },
  
    // Margin classes
    m1: { margin: 4 },
    m2: { margin: 8 },
    m3: { margin: 12 },
    m4: { margin: 16 },
    m5: { margin: 20 },


    mt1: { marginTop: 4 },
    mt2: { marginTop: 8 },
    mt3: { marginTop: 12 },
    mt4: { marginTop: 16 },
    mt5: { marginTop: 20 },

    mb1: { marginBottom: 4 },
    mb2: { marginBottom: 8 },
    mb3: { marginBottom: 12 },
    mb4: { marginBottom: 16 },
    mb5: { marginBottom: 20 },
    
    mx1: { marginHorizontal: 4 },
    mx2: { marginHorizontal: 8 },
    mx3: { marginHorizontal: 12 },
    mx4: { marginHorizontal: 16 },
    mx5: { marginHorizontal: 20 },
    
    my1: { marginVertical: 4 },
    my2: { marginVertical: 8 },
    my3: { marginVertical: 12 },
    my4: { marginVertical: 16 },
    my5: { marginVertical: 20 },
});

const textUtilities = StyleSheet.create({
    // Font weight
    fontThin: { fontWeight: '100' },
    fontLight: { fontWeight: '200' },
    fontNormal: { fontWeight: '400' },
    fontMedium: { fontWeight: '500' },
    fontSemibold: { fontWeight: '600' },
    fontBold: { fontWeight: '700' },
    fontExtrabold: { fontWeight: '800' },
    fontBlack: { fontWeight: '900' },
  
    // Font style
    italic: { fontStyle: 'italic' },
    notItalic: { fontStyle: 'normal' },
  
    // Text alignment
    textLeft: { textAlign: 'left' },
    textCenter: { textAlign: 'center' },
    textRight: { textAlign: 'right' },
    textJustify: { textAlign: 'justify' },
  
    // Text decoration
    underline: { textDecorationLine: 'underline' },
    lineThrough: { textDecorationLine: 'line-through' },
    noUnderline: { textDecorationLine: 'none' },
  
    // Text transform
    uppercase: { textTransform: 'uppercase' },
    lowercase: { textTransform: 'lowercase' },
    capitalize: { textTransform: 'capitalize' },
    normalCase: { textTransform: 'none' },
  
    // Letter spacing
    trackingTighter: { letterSpacing: -1 },
    trackingTight: { letterSpacing: -0.5 },
    trackingNormal: { letterSpacing: 0 },
    trackingWide: { letterSpacing: 0.5 },
    trackingWider: { letterSpacing: 1 },
    trackingWidest: { letterSpacing: 2 },
  
    // Font size
    textXs: { fontSize: 12 },
    textSm: { fontSize: 14 },
    textBase: { fontSize: 16 },
    textLg: { fontSize: 18 },
    textXl: { fontSize: 20 },
    text2xl: { fontSize: 24 },
    text3xl: { fontSize: 30 },
    text4xl: { fontSize: 36 },

    textWhite: { color: "#fff" }
});

export const flexUtilities = StyleSheet.create({
    // Display
    flex: { display: "flex" },
  
    // Flex Direction
    flexRow: { flexDirection: "row" },
    flexRowReverse: { flexDirection: "row-reverse" },
    flexCol: { flexDirection: "column" },
    flexColReverse: { flexDirection: "column-reverse" },
  
    // Flex Wrap
    flexWrap: { flexWrap: "wrap" },
    flexNowrap: { flexWrap: "nowrap" },
    flexWrapReverse: { flexWrap: "wrap-reverse" },
  
    // Align Items
    itemsStart: { alignItems: "flex-start" },
    itemsCenter: { alignItems: "center" },
    itemsEnd: { alignItems: "flex-end" },
    itemsStretch: { alignItems: "stretch" },
    itemsBaseline: { alignItems: "baseline" },
  
    // Justify Content
    justifyStart: { justifyContent: "flex-start" },
    justifyCenter: { justifyContent: "center" },
    justifyEnd: { justifyContent: "flex-end" },
    justifyBetween: { justifyContent: "space-between" },
    justifyAround: { justifyContent: "space-around" },
    justifyEvenly: { justifyContent: "space-evenly" },
  
    // Align Content (For multi-line containers)
    contentStart: { alignContent: "flex-start" },
    contentCenter: { alignContent: "center" },
    contentEnd: { alignContent: "flex-end" },
    contentBetween: { alignContent: "space-between" },
    contentAround: { alignContent: "space-around" },
    contentStretch: { alignContent: "stretch" },
  
    // Align Self
    selfAuto: { alignSelf: "auto" },
    selfStart: { alignSelf: "flex-start" },
    selfCenter: { alignSelf: "center" },
    selfEnd: { alignSelf: "flex-end" },
    selfStretch: { alignSelf: "stretch" },
  
    // Flex Grow/Shrink
    flexGrow: { flexGrow: 1 },
    flexGrow0: { flexGrow: 0 },
    flexShrink: { flexShrink: 1 },
    flexShrink0: { flexShrink: 0 },
  
    // Flex Basis
    basisAuto: { flexBasis: "auto" },
    basisFull: { flexBasis: "100%" },
    basisHalf: { flexBasis: "50%" },
    basisThird: { flexBasis: "33.3333%" },
    basisTwoThirds: { flexBasis: "66.6666%" },
  });
  

const appStyles = {text, input, spacing, textUtilities, flexUtilities}

export default appStyles;
