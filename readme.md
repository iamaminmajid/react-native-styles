# Styles Documentation

## Text Styles
| Style Name  | Properties |
|-------------|------------|
| `p`         | `color: 'black', fontSize: 16` |
| `subTitle`  | `color: 'black', fontSize: 18` |
| `title`     | `fontWeight: 'bold', color: 'black', fontSize: 24` |

## Input Styles
| Style Name         | Properties |
|--------------------|------------|
| `search`          | `flex: 1, fontSize: 14, color: '#000', height: 40` |
| `icon`            | `marginLeft: 8` |
| `inputContainer`  | `flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5, borderWidth: 2, borderColor: "#F5F5F5"` |

## Spacing (Padding & Margin)
| Style Name | Properties |
|------------|------------|
| `p1` - `p5` | `padding: 4, 8, 12, 16, 20` |
| `pt1` - `pt5` | `paddingTop: 4, 8, 12, 16, 20` |
| `pb1` - `pb5` | `paddingBottom: 4, 8, 12, 16, 20` |
| `px1` - `px5` | `paddingHorizontal: 4, 8, 12, 16, 20` |
| `py1` - `py5` | `paddingVertical: 4, 8, 12, 16, 20` |
| `m1` - `m5` | `margin: 4, 8, 12, 16, 20` |

## Text Utilities
| Style Name  | Properties |
|-------------|------------|
| `fontThin` - `fontBlack` | `fontWeight: 100 - 900` |
| `italic`, `notItalic` | `fontStyle: 'italic', 'normal'` |
| `textLeft` - `textJustify` | `textAlign: 'left', 'center', 'right', 'justify'` |
| `underline`, `lineThrough`, `noUnderline` | `textDecorationLine: 'underline', 'line-through', 'none'` |
| `uppercase`, `lowercase`, `capitalize`, `normalCase` | `textTransform: 'uppercase', 'lowercase', 'capitalize', 'none'` |
| `textWhite` | `color: '#fff'` |

## Letter Spacing
| Style Name | Properties |
|------------|------------|
| `trackingTighter` - `trackingWidest` | `letterSpacing: -1 to 2` |

## Font Sizes
| Style Name | Properties |
|------------|------------|
| `textXs` - `text4xl` | `fontSize: 12, 14, 16, 18, 20, 24, 30, 36` |

## Flex Utilities
| Style Name  | Properties |
|-------------|------------|
| `flex`, `flexRow`, `flexCol`, `flexWrap` | `display: 'flex', flexDirection, flexWrap` |
| `itemsStart` - `itemsStretch` | `alignItems: 'flex-start', 'center', 'flex-end', 'stretch'` |
| `justifyStart` - `justifyEvenly` | `justifyContent: 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'` |
| `contentStart` - `contentStretch` | `alignContent: 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'stretch'` |
| `selfAuto` - `selfStretch` | `alignSelf: 'auto', 'flex-start', 'center', 'flex-end', 'stretch'` |
| `flexGrow`, `flexGrow0` | `flexGrow: 1, 0` |
| `flexShrink`, `flexShrink0` | `flexShrink: 1, 0` |
| `basisAuto`, `basisFull`, `basisHalf`, `basisThird`, `basisTwoThirds` | `flexBasis: 'auto', '100%', '50%', '33.3333%', '66.6666%'` |

## Usage
```jsx
import styles from './styles';

<Text style={styles.title}>Hello World</Text>
<View style={styles.inputContainer}>
  <TextInput style={styles.search} placeholder="Search..." />
</View>
```

