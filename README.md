# \<morph-view\>

Polymorph Components View element where we put all our elements

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Using Your Element

\<morph-view\> component is a container element where we will be putting all our elements. 

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

It also contains the `reveal` porperty to help implement the reveal animation variation when combined with our \<morph-sidebar\> component.

```hmtl

static get properties() {
  return {
    reveal: {
      type: String, // reveal can take a value of left or right
      reflectToAttribute: true
    }
  };
}

```

## ToDo

- We need to add test for very basic functionality
- Come up with a good way to demo this component so devs can easily understand why this component exist and how to use them
