Feature: Editing Cart items

  @ecommerce
  Scenario: Login to eccomerce service and add an item to the cart
    Given I am on the ecommerce page
    And I login with test@qabrains.com and Password123
    When I add Sample Shirt Name to the cart
    Then I should see a confirmation saying Added to cart