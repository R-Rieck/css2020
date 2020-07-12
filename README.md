# CSS 2020

CSS - The Complete Guide 2020

---

## Introduction

**History**

- CSS1 - 1996
- CSS2 - 1998
- CSS3 - in Development

> CSS3 consist of independend Modules like "Media Queries" or "Selectors"

---

**Selectors**

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

---

**Priority**

- multiple rules can be applied to the same Element. although, there is a certain priority:
  - Inline Style >
  - #ID Selector >
  - .class, :pseudo-class and [attribute] selectors >
  - Tag and ::pseudo-element selectors

---

**Inheritance**
If you don't explicit set a certain property for an element, it tries to inherit from it parent and takes it as value [keyword = inherit]

---

**Combinators**

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

**Box-Model**

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

**shorthand properties**

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

**Display**

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

List of usefull css props:

**Box-sizing**

- by setting up this property, it allows you to add the padding and the border to the total width and height:

Example

```
* {
    box-sizing: border-box;
    //the border width and the padding are included in the width and height
}
```
