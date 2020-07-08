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

    - {
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
