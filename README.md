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

List of usefull css props and pseudoelements:

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

### important to know

- Not all browser support a specific property. To find out if the browser supports the feature, go check out the MDN Site and scroll to the end of a page.
  https://developer.mozilla.org/de/

- another site which is pretty good to checkout for browser support is
  https://caniuse.com/

- a Page to see all device sizes for responsive design
  https://www.mydevice.io/

### Nice To Know

- if you access via js the element.style, it will be empty because it doesnt compute your stylesheets. If you have an inline style it will shop up in the style property
