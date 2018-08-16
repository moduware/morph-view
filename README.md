# morph-view

Polymorph View element where we put all of our elements.

## Getting Started

For the information about how to clone the desired repository, running the local server and testing, please refer to this [link](https://github.com/moduware/polymorph-components/blob/master/INFO.md).



## Demo
- Here is a quick demo of the morph-view element.


```html
<morph-view id="mainView" platform="ios">
  <h3>Android morph-sidebar demo</h3>

  <button id="sidebarLeftToggler">Toggle Left Sidebar</button>
</morph-view>

<morph-sidebar id="sidebarLeft" platform="android">
  <p>Left Panel content here</p>
  <p>simulated Android platform with cover animation and shadow</p>
</morph-sidebar>
```

## Attributes

| Custom Attribute |   Type  | Description                                                                                                                      | Default     |
|:----------------:|:-------:|----------------------------------------------------------------------------------------------------------------------------------|-------------|
|  **`reveal`**  | String  | Takes the value of left or right | **`null`** |



## Styling


Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--reveal-width`                 | Width of the reveal                    | 260px
