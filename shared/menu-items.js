export const MENU_ITEMS = [
    {
        id: 0,
        name: "Steak Dinner",
        image: "./components/images/steak-dinner.jpg",
        description: "12 oz sirloin cooked to your liking with your choice of side.",
        options: {
            option1: {
                question: "How would you like your steak cooked?",
                choices: {
                    choice1: "Rare",
                    choice2: "Medium Rare",
                    choice3: "Medium",
                    choice4: "Well Done"
                }
            },
            option2: {
                question: "Side Dish",
                choices: {
                    choice1: "Baked Potato",
                    choice2: "Mashed Potato",
                    choice3: "Vegetables"
                }
            }
            
        }
    },
    {
        id: 1,
        name: "Sushi Dinner",
        image: "../components/images/sushi-dinner.jpg",
        description: "your choice of fresh sushi roll.",
        options: {
            option1: {
                question: "What kind of sushi would you like?",
                choices: {
                    choice1: "Rainbow Roll",
                    choice2: "California Roll",
                    choice3: "Spicy Tuna Roll",
                    choice4: "Spider Roll"
                }
            },
            option2: {
                question: "What would you like your sushi to be served with?",
                choices: {
                    choice1: "Miso Soup",
                    choice2: "Tempura",
                    choice3: "Edamame"
                }
            }           
        }
    },
    {
        id: 2,
        name: "Walnut Salad Dinner",
        image: "/assets/images/salad-dinner.jpg",
        description: "Hand-tossed walnut salad with your choice of dressing.",
        options: {
            option1: {
                question: "Select your dressing",
                choices: {
                    choice1: "Caeser",
                    choice2: "Ranch",
                    choice3: "Thousand Island",
                    choice4: "Italian"
                }
            }
            // },
            // option2: {
            //     question: null,
            //     choices: {
            //         choice1: null,
            //         choice2: null,
            //         choice3: null
            //     }
            // }            
        }
    }
]