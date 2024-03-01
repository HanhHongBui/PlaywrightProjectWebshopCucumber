@regression
Feature: Cart page
    Background: Log in to page
        Given I go to Log in page
        When I log in to page

    Scenario Outline: Add product to cart from sub product page
        Given I navigate to product sub-category page "<productSubCategory>" from product category "<productCategory>"
        When I add product "<product>" to cart
        Then I should see success notification bar displayed
        When I navigate to shopping cart from link in the notification bar
        Then I should see product "<product>" in the shopping cart
        Then I remove all items in the shopping cart

        Examples:
            | productCategory | productSubCategory | product    |
            | Electronics     | Cell phones        | Smartphone |

    Scenario Outline: Add product to cart from product details page
        Given I navigate to product category page "<productCategory>"
        When I click on Add to cart button under product "<product>"
        Then I should see product "<product>" displayed in product details page
        When I click on Add to cart button in product details page
        Then I should see success notification bar displayed
        When I navigate to shopping cart from link in the notification bar
        Then I should see product "<product>" in the shopping cart
        Then I remove all items in the shopping cart

        Examples:
            | productCategory | product                |
            | Apparel & Shoes | Blue and green Sneaker |