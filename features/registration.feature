Feature: User Registration

  @register
  Scenario: Register an account and review registration message
    Given I am on the registration page
    When I register an account with Arthur Minalo, Moldova, Student, qa_tester@testing.com and sup3rSecretP$$wrd
    Then I should see a message saying Registration Successful