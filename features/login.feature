Feature: User Login

  Background:
    Given I am on the login page

  @login_success
  Scenario: Successfully login with valid credentials
    When I login with qa_testers@qabrains.com and Password123
    Then I should see a message saying Login Successful

  @login_fail
  Scenario: Fail login with invalid credentials
    When I login with <email> and <password>
    Then I should see a message saying <message>

    Examples:
      | email                   | password    | message                   |
      | qa_testers@qabrains.com | Password321 | Your password is invalid! |
      | mail@example.com        | Password123 | Your email is invalid!    |