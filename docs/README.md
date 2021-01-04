📢 Don't fork this project. Use, [contribute](https://github.com/vtex-apps/product-quantity), or open issues through [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Product Quantity

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

The Product Quantity allows users to a add a chosen amount of the displayed product in their cart.

![product-quantity](https://user-images.githubusercontent.com/52087100/70237475-0f4bd900-1746-11ea-9af2-38f794f4a3dd.png)

## Configuration 

1. Add the Product Quantity app to your dependencies in the theme's `manifest.json` file:

```json
  "dependencies": {
    "vtex.product-quantity": "1.x"
  }
```

You are now able to use all blocks that are exported by the Product Quantity app. Check out the full list below:

| Block name | Description | 
| --------- | ------------ |
| `product-quantity` | Displays a quantity selector on the product details page. This block must be declared in the theme's `store.product` page template. | 
| `product-summary-quantity` | Displays a quantity selector on [Product Summary](https://vtex.io/docs/components/all/vtex.product-summary/)'s blocks. This block must be declared as a children of the `product-summary.shelf` block. | 

2. According to your desired scenario, add the `product-quantity`/`product-summary-quantity` blocks to your theme. For example:

```diff
  "flex-layout.col#product-price": {
    "props": {
      "preventVerticalStretch": true,
      "rowGap": 0
    },
    "children": [
      "product-name",
      "product-price#product-details",
      "product-separator",
+     "product-quantity",
      "sku-selector",
      "flex-layout.row#buy-button",
      "availability-subscriber",
      "shipping-simulator",
      "share"
    ]
  },
  "product-quantity": {
    "props": {
      "warningQuantityThreshold": 9999999
    }
  },
```

*In the example above a Product Details Page is built using Flex Layout and the `product-quantity` block.*

### `product-quantity` and `product-summary-quantity` props

| Prop name | Type | Description | Default Value |
| --- | --- | --- | --- |
| `warningQuantityThreshold` | `number` | Displays the quantity of remaining items in stock if the available quantity is less than or equal to the value given to this property. | `0` (the quantity is not displayed) |
| `size` | `enum`| Preset size values for `font-size` and `padding`. You can check these value measures by accessing the [VTEX Styleguide](https://styleguide.vtex.com/#/Components/Forms/NumericStepper). Possible values are: `small`, `regular`, and `large`. | `small` |
| `showLabel` | `boolean` | Whether a label should be displayed (`true`) or not (`false`). | `true` |
| `selectorType` | `enum` | Defines how the quantity selector should initially behave. Possible values are: `stepper` (displays an input field where the quantity can be directly defined, in addition to side buttons to increase or decrease the value) and `dropdown` (shows a list of predefined-quantity options. In case the last quantity option is selected by users, the component is replaced with an input). | `stepper` |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization). 

| CSS Handles                                |
| ------------------------------------------ | 
| `availableQuantityContainer`               |
| `quantitySelectorContainer`                |
| `quantitySelectorDropdownContainer`        |
| `quantitySelectorDropdownMobileContainer`  |
| `quantitySelectorInputContainer`           |
| `quantitySelectorInputMobileContainer`     |
| `quantitySelectorStepper`                  |
| `quantitySelectorTitle`                    |
| `summaryContainer`                         |

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/regis-samurai"><img src="https://avatars0.githubusercontent.com/u/38638226?v=4" width="100px;" alt=""/><br /><sub><b>Reginaldo</b></sub></a><br /><a href="https://github.com/vtex-apps/product-quantity/commits?author=regis-samurai" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

