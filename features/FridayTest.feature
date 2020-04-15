Feature: Is today Friday?

  Scenario: Today is a Friday
    Given today is Friday
    When I ask whether it is a Friday
    Then I should be told "Yes"

  Scenario: Today is a Friday
    Given today isn't Friday
    When I ask whether it is a Friday
    Then I should be told "No"