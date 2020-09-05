# CSS 2020

CSS - The Complete Guide 2020

---

## Introduction

### History

- CSS1 - 1996
- CSS2 - 1998
- CSS3 - in Development

> CSS3 consist of independend Modules like "Media Queries" or "Selectors"

---

### Selectors

- Elements

  - Set Equal style for those elements

    ```
    HTML - EXAMPLE

    <div>
        <h1>hello</h1>
    </div>
    <div>
        <h1>hello</h1>
    </div>
    ```

    ```
    CSS - EXAMPLE

    div {
        background: #5bcaff
    }
    ```

- Classes

  - Set equal style for elements within the same class

    ```
    HTML - EXAMPLE

    <div>
        <h1 class="title">hello</h1>
    </div>
    <div>
        <h1 class="title">hello</h1>
    </div>
    ```

    ```
    CSS - EXAMPLE

    .title {
        font-size: 25px;
    }
    ```

- Universal

  - Set equal style to all elements

    ```
    HTML - EXAMPLE

    <div>
        <h1>hello</h1>
    </div>
    <div>
        <h1>hello</h1>
    </div>
    ```

    ```
    CSS - EXAMPLE

    * {
        font-family: sans serif
    }

    ```

- ID

  - Set style to one specific element

    ```
    HTML - EXAMPLE

    <div>
        <h1 id="title-unique">hello</h1>
    </div>
    <div>
        <h1>hello</h1>
    </div>
    ```

    ```
    CSS - EXAMPLE

    #title-unique {
        font-size: 20px
    }
    ```

- Attribute

  - Set equal style to all elements with

        ```
        HTML - EXAMPLE

        <div>
            <button disabled>not available</button>
        </div>
        <div>
            <button disabled>not available</button>
        </div>
        ```

        ```
        CSS - EXAMPLE

        [disabled] {
            opacity: 0.5;
        }
        ```

    **More on Selectors**

you can use multiple Selectors on one element. Assign multiple class with a space between them.

for instance:

```
HTML
----
<div class="class-one class-two"><div>
<a href="#" class="active"></a>

CSS
----
.class-one {}
.class-two {}

a.active {}
```

if you specify more than one class with the same property, the order in the css file decides which property is getting applied (the last one).

**class vs id**

class: **reusable** and allow you to mark things for styling purposes
class: **once per page** and non css-meaning (e.g.: link purposes)

**Advanced**

style an element if it has a certain class like this:

```
HTML

<input class="invalid" />
<input />
<input class="invalid" />

CSS

input.invalid {
    /*do something*/
}

```

You can Target any child element within a specific class like this

```
.signup-form :invalid {
    /*do something*/
}

```

this simply adds the pseudo class to every child which is invalid or required

Another type of selection are the advanced attribute selectors. Look at the image below

![advanced attribute selector](https://github.com/RRieck/css2020/blob/master/ressource-images-wiki/advanced-attributes-selector.png)

---

### Priority

- multiple rules can be applied to the same Element. although, there is a certain priority:
  - Inline Style >
  - #ID Selector >
  - .class, :pseudo-class and [attribute] selectors >
  - Tag and ::pseudo-element selectors

---

### Inheritance

If you don't explicit set a certain property for an element, it tries to inherit from it parent and takes it as value [keyword = inherit]

---

### Combinators

Imagine you want to style each h1 tag in a specific section. you should not use a class for a single element. You can take an ID but then you create a lot of IDs which doesn't make sense. Instead use:

> #product-overview h1 { font-family: sans-serif}

this will style each nested element in den Section with the ID of "product-overview"
(even if it is not the direct child of the section).
More Specific = higher specifity

Types of Combinator

- Adjacent Sibling (every direct sibling will get the style) - here only every direct "p" sibling from a "h2"

```
h2 + p {
    color: red;
}
```

```
<div>
    <h2> Not applied </h2>
    <p> CSS applied </p>
    <h2> Not applied </h2>
    <h3> Not applied </h3>
    <p> Not applied </p>
    <h2> Not applied </h2>
    <p> CSS applied </p>
<div>
```

- General Sibling (every sibling will get the style) - here every "p" sibling from a "h2"
  - important:
    - Elements share the same Parent
    - second element comes after first element

```
h2 ~ p {
    color: red;
}
```

```
<div>
    <h2> Not applied </h2>
    <p> CSS applied </p>
    <h2> Not applied </h2>
    <h3> Not applied </h3>
    <p> CSS applied </p>
    <h2> Not applied </h2>
    <p> CSS applied </p>
<div>
```

- Child (every direct child will get the style) - here every direct "p" child from the "div" will get the style
  - second element is a direct child of first element

```
div > p {
    color: red;
}
```

```
<div>
    <div> Not applied </div>
    <p> CSS applied </p>
    <div> Not applied </div>
    <article>
        <p>Not applied</p>
    </article>
    <p> CSS applied </p>
<div>
```

- descendant (every child will get the style) - here every "p" child from the "div" will get the style
  - second element is a direct child of first element

```
div > p {
    color: red;
}
```

```
<div>
    <div> Not applied </div>
    <p> CSS applied </p>
    <div> Not applied </div>
    <article>
        <p>CSS applied</p>
    </article>
    <p> CSS applied </p>
<div>
```

---

### Box-Model

The Box-Model contains 4 different properties

- Margin
- Border
- Padding
- Content

> **Margin:**
> ~Margin-Collpasing~
>
> - if you have to elements with a margin, they will overlap. But if one element has a higher margin than the other one, the elements margin will overlap the element with lower margin.
>   In General you should use either Margin-top or margin-bottom

---

### shorthand properties

```
prop {
    border-width: 2px;
    border-style: solid;
    border-color: green;
}

EQUAL TO:

prop {
    border: 1px solid green;
}
```

```
Another example for shorthand properties is this:

prop {
    margin-top: 2px
    margin-right: 5px;
    margin-bottom: 2px;
    margin-left: 5px;
}

EQUAL TO:

prop {
    margin: 2px 5px 2px 5px;

    `margin: top right bottom left`
}

EQUAL TO:

prop {
    margin: 2px 5px;

    `margin: top/bottom right/left`
}

EQUAL TO:

prop {
    margin: 10px;

    `margin: top/right/bottom/left`
}
```

---

### Display

- There are two diffrent element types:
  - Inline-Elements: Takes just the space it needs (IMPORTANT: you can't set padding and Margin)
  - Block-level-Elements: Starts on a new line and takes all the available space it gets (IMPORTANT: you can set padding and Margin)

-props-

_inline_

- the elements will display as an inline-element

_block_

- the element will display as an Block-level-element

_inline-block_

- behaves like block, but you can set padding and margin to it

_none_

- removes the element from visual document flow but not removed in the dom

_hidden_

- hides the element from the visual document, but it still has its own place

---

**pseudo**

- pseudo-classes: defined by : => defines the style by a special state
- pseudo-element: defined by :: => defines the style by a specific part

---

### Position

- Position: "static" is the default position
  static follows the normal document flow

There are 4 other values for the property "position"

- position: absolute
- position: relative
- position: fixed
- position: sticky (pretty new, so not supported by all browsers)

_fixed:_
fixed refers to the viewport
you can also add left, top, right, bottom to specify it's position
the element is no longer part of the document flow

_absolute:_
absolute refers to the ancestor that have a position property set, different from static
you can also add left, top, right, bottom to specify it's position
the element is no longer part of the document flow

_relative:_
relative refers to itself
you can also add left, top, right, bottom to specify it's position
if you set top and left 50px, it moves from its current position 50px to the left and 50px to the top
the element is still part of the document flow

_sticky:_
sticky refers on top by the viewport but at the bottom to its parent
you can also add left, top, right, bottom to specify it's position
it normally behaves like relative and takes part to the document flow. But if it reachs the state where it should disappear, it starts to behave like fixed

**stacking-context**

```
HTML

<body>
    <div id="headline"></div>
    <div id="main">
        <div id="main-1"></div>
        <div id="main-2"></div>
        <div id="main-3"></div>
    </div>
    <div id="footer"></div>
</body>
```

when all elements have a position of fixed there a two important cases:

1.) main-2 has a z-index of -50. The Problem is, it only refers to its parent and wouldn't display behind main.

2.) main-2 has a higher index than footer. main-2 wouldn't display in front of footer because it's again refering to its Parent

The stacking context is about positioning elements on the z-axe. All elements refer only to it's parent.
If there is no position set on an element, the default positioning context is the html element

---

### Background-Images and Images

**shorthand**

```
* {
    /*background: bg-color bg-image bg-repeat bg-attachment bg-position*/
    background: url("../ressources/freedom.jpg") left 10% bottom 20% / cover
}
```

**background-size**

- Sets the width and height of the background to the specified values
  - Contain: makes the image to be completly visible in the container, no matter if there is a whitespace
  - cover: detects and fills the entire container

**background-repeat**

- controlls if the image should be repeated either on the x, y or on both axes

**background-position**

- Sets the initial position for each background image

**linear-gradients**

- they are treated like images

```
CSS - Example

div {
    /*background-image: linear-gradient(direction, first color, second color)*/
    background-image: linear-gradient(to left top, red, blue)
    background-image: linear-gradient(30%, red 70%, blue)
}
```

**linear-gradients**

- they are treated like images

```
CSS - Example

div {
    /*background-image: radial-gradient(type, first color, second color)*/
    background-image: radial-gradient(circle, red, blue)
    background-image: radial-gradient(circle at top left, red 70%, blue)
}
```

**multiple backgrounds**

```
background:
    linear-gradient(to top, rgba(80, 68, 18, 0.6), transparent),
    url("../ressources/freedom.jpg") left 10% bottom 20% / cover no-repeat border-box,
    #ff1b68;
```

- you can define multiple backgrounds to add filter like effects or just a default
  the example above is the best: - the linear gradient adds a goldish filter to the next element - the next element is a background image, now with a goldish look - the hex-code at the end ist just a fallback

every background is seperated with a " , "

**filter**

- filter are predefined functions to modify an element

```
* {
    filter: blur(5%)
}
```

---

### Sizes and Units

**Units**

- pixels (px)
- percentages (%)
- root em (rem)
- em (em)
- viewport height(vh)
- viewport width (vw)

| absolute lengths            | viewport lengths           | font relative lengths       | special case |
| --------------------------- | -------------------------- | --------------------------- | ------------ |
| Mostly ignore User settings | Adjust to current viewport | Adjust to default font size | %            |
| px                          | vh / vw / vmin / vmax      | rem / em                    |              |

**3. Rules for the Percentage Case**
1.) Fixed position and %
The element targets the viewport as reference. If the width is set to 50% and the viewport is 600px, the width of the element would be 300px

2.) absolute position and %
The element targets the ancestor content ( + padding ) as reference. The Ancestor refers to the element which has the property position set. If the width is set to 50% and the Acenstor is 50% width a padding of 20px AND the viewport is 600px large, the width of the element would be 150px

1.) static/relative position and %
The element targets the closest ancestor content as reference if it has display: block. If the width is set to 50% and the ancestor is 600px, the width of the element would be 300px

**min-/max-width and min-/max-height**
defines the minimum/maximum height/width for an element, depending on the screensize

**REM and EM**
Both properties depend on the font-size

- EM: em depends on the font-size of the Parent container: 20px on the parent means 40px on the child with 2em
- REM: rem depends on the font-size of the root element (the HTML element): 20px on the html means 40px on the element with 2em. But if there is no font-size defined in the root, it takes the browser default (recommend might be 16px)

---

### Responsive

A Good starting point is to say: Start mobile first, then go to the Desktop view

Difference between hardwarepixels and softwarepixels

| Hardware Pixels             | Software Pixels            |
| --------------------------- | -------------------------- |
| Mostly ignore User settings | Adjust to current viewport |

Viewport vs Media Queries

| Viewport HTML                  | Media Querys (CSS)               |
| ------------------------------ | -------------------------------- |
| adjust site to device viewport | Change design by the actual size |
| Can't make design changes      | Design Changes defined by us     |

**Viewport**

Defines to target the viewport, to not present the desktop site on the mobile device ( or smaller screen)
It's a meta tag, defined like this:

<meta name="viewport" content="width=device-width, inital-scale=1.0, maximum-scale=1.5 minimum-scale=1.0, user-scalable=yes">
the properties for the content are:
- width - defines the width, which will be used
- inital-scale - inital zoom 
- maximum-scale - max zoom value
- minimum-scale - min zoom value
- user-scalable (boolean) - defines if the user is able to zoom in and out

**Media-Queries**

- order media queries ascending, otherwise you run in problems with execution

They are added like this:

```
@media (propery: value) {
    selector {
        property: value
    }
}
```

There are 2 specifications which might be important

- If you started to design a Desktop Page first, write your query like this:

```
@media (max-width: 50rem) {
    ...do something
}
```

The Query is read like this: If your Page is Less than 50rem, execute the following

- If you started to design a mobile Page first, write your query like this:

```
@media (min-width: 50rem) {
    ...do something
}
```

The Query is read like this: If your Page is greater than 50rem, execute the following

**operators**

you can combine media queries to provide a more detailed query:

```
@media (min-width: 40rem) and (orientation: landscape) {
    /*do something*/
}
```

---

### Fonts and Texts

**Generic Fonts and Font Families**

![Generic Fonts and Font Families](https://github.com/RRieck/css2020/blob/master/ressource-images-wiki/Generic-fonts-and-families.png)

Usefull Font Properties:

- font-family: defines the font;
- font-size: defines how large the font should be;
- font-weight: defines the thickness > i.e. bold;
- font-variant: i.e. small-caps > converts the text here in capital letters
- letter-spacing: defines the space between each letter
- white-sapce: defines how the whitespace is treated: i.e nowrap (no wrapping at the whitespace > onliner)
- line-height: defines the height of a line box
  - if you set the value to normal, it will take the font specific height
  - if you set it to the number it will always refer to the font-size
- text-decoration: defines the decoration like underline, overline or line-through with different styles like dotted or a color
  -text-shadow: adds a shadow to the text: syntax (text-shadow: [x-axes][y-axes] [blur][color])

**Font shorthand property**

```
/*size and family required*/
font: [font-style] [font-variant] [font-weight] [font-size]/[line-height] [font-family]

font: italic small-caps bold 1.2rem/2 Roboto

/*you can also relate to system-font:*/

font: menu;
```

**font-display**

options: | swap | block | fallback | optional | default: auto

| case     | block period                                                                                |                        | swap period                                                                                               |
| -------- | ------------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------- |
| swap     | no block period (if the font is not loaded yet, the space will be reserved with a fallback) | fallback               | infinite (changes the fallback to the custom font)                                                        |
| block    | short block period (placeholder, but its loaded)                                            | fallback               | infinite (changes the fallback to the custom font)                                                        |
| fallback | very short block period (placeholder, but its loaded)                                       | fallback               | short (changes the fallback to the custom font) > if its not loaded within time the fallback will be used |
| optional | very short block period (placeholder, but its loaded)                                       | (custom-font) fallback | short (changes the fallback to the custom font) > if its not loaded within time the fallback will be used |

---

### Flex

**Display**

display: flex | inline-flex

difference: flex still behaves like a block level element and inline-flex like an inline element

**Properties for Flex-Container**

| property        | usecase                                                                                              | example                                         |
| --------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| flex-wrap       | defines the wrap of the element inside the flex-container                                            | flex-wrap: wrap / nowrap                        |
| flex-direction  | defines if the elements inside the container a positioned next to each other or on top of each other | flex-direction: row / column                    |
| flex-flow       | combines flex-wrap and flex-direction                                                                | flex-flow: row wrap                             |
| align-items     | changes the position of the elements at the cross axe                                                | align-items: center / flex-start / flex-end     |
| justify-content | changes the position of the elements at the main axe                                                 | justify-content: center / flex-start / flex-end |
| align-content   | changes the position of the elements at the cross axe if they have a specific width/length           | justify-content: center / flex-start / flex-end |

**axes**

![axes](https://github.com/RRieck/css2020/blob/master/ressource-images-wiki/flex-axes.png)

**Properties for Flex-Items**

| property    | usecase                                                                                                                                                                                       | example            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Order       | it defines where the specific item should be placed in the flex-container (depending on the axe, it gets placed at the end if its number is larger than 0 [default value for all items is 0]) | order: 4           |
| align-self  | defines where the item is placed in the flex container depending on the axe                                                                                                                   | align-self: center |
| flex-grow   | defines the grow factor of the flex items main size                                                                                                                                           | flex-grow: 1       |
| flex-shrink | defines the shrink factor of the flex items main size (default: 1 / if its 0, it will not shrink anymore)                                                                                     | flex-shrink: 4     |
| flex-basis  | defines the size of an element on the main axes (important to know: the item will override the width/height depending on what the main axe is)                                                | flex-shrink: 4     |

shorthand:

```
flex: [flex-grow] [flex-shrink] [flex-basis]
flex: 0 1 auto
```

---

### Grid

CSS Grid is a layout technic to quickly define a layout
with CSS Grid comes a new Unit "fr" for fraction. It defines the width, depending on the space left by other elements. I.e. 1fr 2fr: the 2fr takes the 2x amount of available space.

| property              | usecase                                                                                                                    | example                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| grid-template-columns | defines the number and the size of the columns (the value defines the size and the amount of values the amount of columns) | grid-template-columns: 1fr 1fr     |
| grid-template-rows    | defines the number and the size of the rows (the value defines the size and the amount of values the amount of rows)       | grid-template-rows: 1fr 1fr        |
| grid-column-start     | defines the start column for the element                                                                                   | grid-columm-start: 1               |
| grid-column-end       | defines the end column for the elementl                                                                                    | grid-column-end: 3                 |
| grid-row-start        | defines the start row for the element                                                                                      | grid-row-start: 1                  |
| grid-row-end          | defines the end row for the element                                                                                        | grid-row-end: 2                    |
| grid-column-gap       | defines the space between each column                                                                                      | grid-column-gap: 10px              |
| grid-row-gap          | defines the space between each row                                                                                         | grid-row-gap: 10px                 |
| grid-gap              | defines the space between each row and column                                                                              | grid-gap: 10px 10px                |
| justify-items         | specified on the container to align items horizontally                                                                     | justify-items: center              |
| justify-content       | aligns the item in the container on the x axe                                                                              | justify-content: center            |
| align-content         | aligns the item in the container on the y axe                                                                              | align-content: center              |
| justify-self          | aligns the item itself on the x axe                                                                                        | align-self: center                 |
| align-self            | aligns the item in the container on the y axe                                                                              | align-self: center                 |
| grid-auto-rows        | specify the height of the rows if they are auto generated                                                                  | grid-auto-rows: minmax(8rem, auto) |
| grid-auto-flow        | specify the flow of the items like flex-direction                                                                          | grid-auto-rows: column             |

!important:

    - if you set grid-column start and wanna span this element 3 columns you can do it like this: grid-column-end: span 3
    - if you want to set the element to the whole column do it like this: grid-column-start: 1 ; grid-column-end: -1
    - if both element are defined to be in one row and column, they overlap: the dom order defines the order

**naming lines**
you can name the lines:

```
.container{
    grid-template-row: [name] value [name name] value [name]
    grid-template-row: [header-start] 80px [header-end footer-start] 80px [footer-end]

    you could also say:
    this takes as much items in the row as possible

    => grid-template-column repeat(auto-fill, 5rem)

    auto-fit also centers the items

    => grid-template-column repeat(auto-fit, 5rem)

    normally if you have 2 elements with a span of 2 but just 3 columns, it would look like this:

    | element1 | element1 | empty    |
    | element2 | element2 | element3 |

    it's because of the document flow...
    Do remove this behaviour use "dense"

    grid-auto-flow: row dense

    | element1 | element1 | element3 |
    | element2 | element2 | empty    |

}

.header{
    grid-row-start: header-start;
    grid-row-end: header-end;
}
```

**shorthands**

```
{
    grid-column-start: 1;
    grid-column-end: -1;

    => grid-column: 1 / -1;

    grid-row-start: 1;
    grid-row-end: -1;

    => grid-row: 1 / -1;

    to get all the values in one shorthand

    grid-area: grid-row-start / grid-colum-start / grid-row-end / grid-column-end

    grid-area: 1 / 1 / -1 / -1

    grid-gap: row column
    grid-gap: 10px 20px
    grid-gap: 10px
}
```

**Named Template Areas**
in named template areas you can define areas in a human read way and tell your elements where to place

```
{
    grid-template-area: "header header header header"
                        ".   side   main   main"
                        "footer footer footer footer"

    /*the dot means that it's not named*/
}

{
    grid-area: header
}
```

---

### Grid vs Flex

The image shows the difference between grid and flex

![axes](https://github.com/RRieck/css2020/blob/master/ressource-images-wiki/grid-vs-flex.png)

---

### Transforming elements

| property         | usecase                                                                       | example                     |
| ---------------- | ----------------------------------------------------------------------------- | --------------------------- |
| transform        | provides a bunch of functions to transform elements like rotate and translate | transform: rotateZ(45deg)   |
| transform-origin | controls where to transform this element like upper right corner              | transform-origin: top right |

**transform functions**

| property  | usecase                                   | example                     |
| --------- | ----------------------------------------- | --------------------------- |
| rotate    | rotates the element at the specified axe  | transform: rotateZ(45deg)   |
| translate | moves the element at the specified axe    | transform: translateX(1rem) |
| skew      | it skews the element on the specified axe | transform: skewX(20deg)     |
| scale     | scales the image on the specified axe     | transform: scaleX(2)        |

**3d**

| property           | usecase                                                                           | example                       |
| ------------------ | --------------------------------------------------------------------------------- | ----------------------------- |
| rotateX/Y          | rotates the element along the 3d axes                                             | transform: rotateX(45deg)     |
| translateZ         | moves the element at the specified axe in a 3d way                                | transform: translateZ(1rem)   |
| perspective        | use in parent as property or as function for transform => changes the perspective | transform: perspective(20rem) |
| perspective-origin | changes the perspectives origin where it should start                             | perspective-origins: 20rem    |

**special cases**

    - rotate with translate
        - if the element is rotated by 45deg and you translate it, it's important to know that the x and y axes are parallely to the element (so the x axe is also rotated by 45deg)

**shorthand property**

```
{
    rotateZ(20deg) => rotate(20deg)
    translateX(1rem) and TranslateY(2rem) => translate(1rem, 2rem)
    skewX(2deg) and skewY(2deg) => skew(2deg, 2deg)
    scaleX(1.4) and scaleY(1.4) => scale(1.4)
}
```

---

### Transitions

Transition is the way to show nice lookings animations. It is defined like this

```
{
    /* transition: [property to watch] [how long] [timing function] [delay] */

    opacity: 0;
    transform: translateY(-3rem)
    transition: opacity 300ms ease-out, transform 500ms ease-in;
}

```

**timing functions**

| property     | usecase                              | example                                          |
| ------------ | ------------------------------------ | ------------------------------------------------ |
| ease-in      | transition with slow start           | transition: opacity 1s ease-in                   |
| ease-out     | transition with slow end             | transition: opacity 1s ease-out                  |
| ease-in-out  | transition with slow start and end   | transition: opacity 1s ease-in-out               |
| linear       | transition with same speed           | transition: opacity 1s linear                    |
| cubic-bezier | transition self defined speed values | transition: opacity 1s cubic-bezier(0,0,.46,.32) |

**animations**
you start with defining so called keyframes that let you decide which animation you want to play

```
@keyframes wiggle{
    from {
        transform: rotateZ(0deg)
    }

    to {
        transform: rotateZ(90deg)
    }
}

.class-to-wiggle {
    /*  animation: [name] [how long] [delay] [how often] [should it move back] */
        animation: wiggle 200ms 3s 9 alternate

}
```

---

### Future proof css code

**Variables**
varaibles are great to define variable for reusability

```
Defined like this (the -- is recommended):

: root {
    --my-color: #5bcaff
}

then you can use it like this (the second value in var is the fallback)

.selector {
    background-color: var(--my-color, black)
}

```

**vendor prefixes**
its a mechanism to render new features on an old way to support it for nearly all browsers

```
.selector {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
```

which prefix to use?

use autoprefixer. It helps to automatically prefixes for defined browsers.
Or use an online tool: https://autoprefixer.github.io/

**support queries**

```
@supports (display: grid) {
    .selector {
        display: grid;
        grid-template-rows: 2.5rem auto fit-content(8rem)
    }
}

or  with logical operators

@supports (display: grid) and (display: flex){
    .selector {
        display: grid;
        grid-template-rows: 2.5rem auto fit-content(8rem)
    }
}

```

**polyfills**

A polyfill is a javascript package whoch enables certain css features in browsers which would not support it otherwise

**Eliminate Cross-Browser Inconsistencies**

![inconsistency](https://github.com/RRieck/css2020/blob/master/ressource-images-wiki/inconsistency.png)

---

### Naming

| DO                                                         | DO NOT      |
| ---------------------------------------------------------- | ----------- |
| Use kebab-case (only lowecase and dashes) [case sensitive] | snakeCase   |
| Name By Feature (i.e. .page-title)                         | .title-blue |

**BEM BLock Element Modifier**
A uniform and cinsitent way of naming you css classes

```
.BLOCK__ELEMENT--MODIFIER

=>

.menu-main__item--size-big

```

---

## SASS

SASS vs SCSS

| SASS                              | SCSS |
| --------------------------------- | ---- |
| Doesn't run in the browser        |      |
| Extends CSS(during development)   |      |
| compiled to css before production |      |

---

### List of usefull css props and pseudoelements:

**Z-INDEX**

- the z-index positions elements on the z-axe. It only applies when there is a position set on the element, that is not static.
  important to know is that the default value of z-index is "auto", which is equal to "0". therefore if you have an element with position that is not static and z-index set to -1, the element will place behind the other ones because their z-index is auto or 0.
  the example for this below:

```
HTML

<div class="background"></div>
<div class="foreground"></div>

CSS

.background {
    position: fixed;
    z-index: 0
    width: 100%;
    height: 100%;
}

.foreground {
    width: 100%;
    height: 100%
}
```

**FLOAT**

- override the default positioning of the element and push it to the left or the right side if the page: IMPORTANT: with float you take the element out of the document flow.

there is a way to fix such beahviour

```
HTML

<div style="display: block"></div>
<div style="display: block"; float: right></div>
<div style="display: block; clear: both"></div>
<div style="display: block"></div>

```

the css property "clear" says: every previous float element will not be respected.

**!IMPORTANT**

it overwrites specifity and all other selectors
**DO NOT** use it that often... it leads to bad code

**BOX-SIZING**

- by setting up this property, it allows you to add the padding and the border to the total width and height:

Example

```
* {
    box-sizing: border-box;
    //the border width and the padding are included in the width and height
}
```

**Box-shadow**

- sets the shadow on the specific container:

Example

```
* {
    /* offset-x | offset-y | color */
    box-shadow: 60px -16px teal;

    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 10px 5px 5px black;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    /* inset | offset-x | offset-y | color */
    box-shadow: inset 5em 1em gold;

    /* Beliebige Anzahl an Schatten, durch Kommas getrennt */
    box-shadow: 3px 3px red, -1em 0 0.4em olive;
}
```

**outline**

- its like the border but not part of the box-model

Example

```
button:focus {
    outline: none;

    /*default style by the browser*/
    outline: outline: 5px auto -webkit-focus-ring-color;
}
```

**:not()**
defines a style for every element of that type, that are not excluded by the not

```
<a class="active">I don not get the style</a>
<a>I got the style</a>


a:not(.active) {
    color: limegreen
}
```

**repeat**
it's function to repeat values like for grid

```
body {
    grid-template-column: repeat(4, 1fr)
}
```

**minmax**
it's function to specify a min and a max value

```
body {
    grid-template-column: minmax(50px, 100px)
}
```

**fit-content**
the function tell the component to be as big as the content needs. the function value is the size which defines the default for the element

```
body {
    grid-template-column: minmax(50px, 100px)
}
```

### important to know

- Not all browser support a specific property. To find out if the browser supports the feature, go check out the MDN Site and scroll to the end of a page.
  https://developer.mozilla.org/de/

- another site which is pretty good to checkout for browser support is
  https://caniuse.com/

- a Page to see all device sizes for responsive design
  https://www.mydevice.io/

### Nice To Know

- if you access via js the element.style, it will be empty because it doesnt compute your stylesheets. If you have an inline style it will shop up in the style property
