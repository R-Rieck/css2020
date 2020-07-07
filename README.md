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

Selectors

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

  - Set equal style to all elemtnts with


        ```
        HTML - EXAMPLE

        <div>
            <button disabled>not available</disabled>
        </div>
        <div>
            <button disabled>not available</disabled>
        </div>
        ```

        ```
        CSS - EXAMPLE

        [disabled] {
            opacity: 0.5;
        }
        ```

---
