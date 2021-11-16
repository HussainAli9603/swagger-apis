@signUp-service
Feature: SignUp Service
    
    Scenario Outline: get accessToken
        Given A signUp <request>
        When I make a POST request to "http://localhost:3000/signUp"
        Then I get response code 200

        Examples:
            | request                                                         |
            | {"email": "rahat_murtaza@outlook.com", "password": "rahat1996"} |