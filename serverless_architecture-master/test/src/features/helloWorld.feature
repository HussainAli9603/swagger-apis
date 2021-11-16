@helloworld-service
Feature: HelloWorld Service
    
    Scenario Outline: get helloWorld
        Given I make a GET request to "http://localhost:3000/"
        When I recieve a response
        Then I should get response 200