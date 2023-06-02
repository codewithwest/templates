import { displayHandler } from "./constFunctions.js"

export let
        card_landing_map,
        card_mes_list, blank_cards, game_controller, display_handler

game_controller = {
        player_chosen: '',
        total_power_level: 0,
        player_position: 0,
        game_state: false
}



// import { cash_cont } from "./gamelogic.js"

display_handler = new displayHandler()

card_mes_list = [
        // 'Northern Cape',
        ['Kimberly', 'Its known for its 19th century diamond mines like the deep hand-dug Big Hole. Old master drawings 17th century european paintings and modem art', 100],
        ['Upington', 'founded in 1873 and located in the Northern Cape. On the banks of the Orange River Kalahari-Orange Museum which is home to a life-sized broze statue', 110],
        ['Sutherland', 'Is a town with about 2.841 inhabitants in the Northern Cape province of South Africa. It lies in the western loggeveld mountains in the karoo', 125],

        // 'Free State',
        ['Bloemfontein', 'also known as Bloem and the capital of Free State. Walk the city streets and see South African history at the museums and the National Womens monument', 200],
        ['Fouriesburg', 'situated at the eastern part of Free State. Browse the Maluti Mountains and view the Caledons Poort border post', 210],
        ['Parys', 'the fifth largest city in the Free State. Slide in and go through the river books of vaal River and find out why its called the jewel city', 225],

        // 'North West',
        ['Hartebeespoort', 'a well known South African resort, which is known for the hartebeespoort dam. You can go water racing and fishing. Also see the african crocodile', 300],
        ['Rustenburg', 'at the foot of the Magaliesberg mountain range. Find out why its called the Platinum City by going through the platinum mines and visit the well known Kgaswane Mountain Reserve', 310],
        ['Mooinooi', 'rougly halfway between Brits and Rustenburg. Get even more rich by visit the Platinum and Palladium mines', 325],

        // 'Limpopo',
        ['Louis Trichardt', 'Short for Louis Tri in the Soutpansberg mountain range. Walk the long valleys of large plantations and feast on foods such as bananas, avocados and nuts.', 400],
        ['Phalaborwa', 'also known as Nylstroom is located near the sountern edge of the waterberg. Walk and hike the trail of this outstanding mountain with its cave like structure and scary hidden spaces.', 410],
        ['Polokwane', 'also known as Pietersburg is the city capital of Limpopo Province. Go through the town as you take in cultural food from tribes like Pedis, Vendas and Tsongas and see the 2010 world cup stadium called Peter Mokaba Stadium', 425],
        // 

        ['Pietermaritzburg', 'Is the capital and second-largest city in the province of Kwa Zulu-Natal. It was founded 1838 and is known as the city of flowers such as azaleas and roses', 800],
        ['Amanzimtoti', 'Locally nickname Toti, is a coastal town just south of Durban. Its well known for its warm climate and numerous beaches and is a poplar tourist destination, particularly with surfers. The annual sardine run attracts many to the Toti breaches', 810],
        ['Durban', 'A coastal city in eastern South Africa. Its known for its african, Indian and colonial influences ushaka marine world', 825],

        // 'Gauteng',
        ['Soweto', 'Its a well known heritage township, that has great monuments such as Nelson Mandela former house in Vilakazi street, Vilakazi street, Twin Towers, world cup stadium (Calabush, Soccer City) and Hector Pieterson square', 900],
        ['Johannesburg', 'South Africas biggest city and capital of Gauteng province, began as a 19th century gold-mining settlement. Its sprawling Soweto township was once home to Nelson Mandela and Desmond Tutu. Mandelas former residence ', 910],
        ['Pretoria', 'Is South Africas administrative capital, serving as the seat of the executive branch of govemment, and as the host to all foreign embassies to south Africa, pretoria straddies the Apies River and extends eastward into the foothills of the magaliesberg mountains', 925],

        // 'Mpumalanga',
        ['Mobombela', 'formerly known as Nelspriut, the capital of Mpumalanga Province. Go through the gateway of the Kruger National Park and see animals such as the Big 5', 500],
        ['White River', 'located north of Mobomela, see the full range in the region produce of tropical fruits, macadamia nuts, flowers and timber', 510],
        ['Secunda', 'situated almost in the middle of the Mpumalanga Province. You can see a vast variety of coast mines. See the structures and old mining equipment', 525],
        // 
        // 'Eastern Cape',
        ['Gqeberha', 'A major port which is known for its numerous beaches. The Donkin heritage trail takes in the ola hill. Coastal boat tours, spot whales and rare seabirds, and wildlife reserves', 600],
        ['East London', 'on the indian ocean, its known for its beaches.The buffalo pass is a road crossing a forested valley and the baffalo river and museums', 610],
        ['Coffee Bay', 'a town on the west coast, it was named after the hundreds of coffee trees which grew from bean either scattered by a shipwreck or by plunderers', 625],

        // 'Western Cape',
        ['Cape Town', 'the port city of South Africa on the southwest coast. Go site seeing at long street, see the green point world cup stadium and hike the trail on table mountain', 700],
        ['Stellebosch', 'the university town. Feast on vineyards in the cape winelands and see the beautiful mountainous nature reserves of Jonkershoek and simonsberg', 710],
        ['Standford', 'a small riverside village in Overberg Distinct Municipality. Hunger, feast and enjoy from the cheese and wine factories. Its know as the foodie capital', 725],

        // 'Kwa Zulu-Natal',
        ['Pietermaritzburg', 'Is the capital and second-largest city in the province of Kwa Zulu-Natal. It was founded 1838 and is known as the city of flowers such as azaleas and roses', 800],
        ['Amanzimtoti', 'Locally nickname Toti, is a coastal town just south of Durban. Its well known for its warm climate and numerous beaches and is a poplar tourist destination, particularly with surfers. The annual sardine run attracts many to the Toti breaches', 810],
        ['Durban', 'A coastal city in eastern South Africa. Its known for its african, Indian and colonial influences ushaka marine world', 825],

        // 'Gauteng',
        ['Soweto', 'Its a well known heritage township, that has great monuments such as Nelson Mandela former house in Vilakazi street, Vilakazi street, Twin Towers, world cup stadium (Calabush, Soccer City) and Hector Pieterson square', 900],
        ['Johannesburg', 'South Africas biggest city and capital of Gauteng province, began as a 19th century gold-mining settlement. Its sprawling Soweto township was once home to Nelson Mandela and Desmond Tutu. Mandelas former residence ', 910],
        ['Pretoria', 'Is South Africas administrative capital, serving as the seat of the executive branch of govemment, and as the host to all foreign embassies to south Africa, pretoria straddies the Apies River and extends eastward into the foothills of the magaliesberg mountains', 925],
        ['Pretoria', 'Is South Africas administrative capital, serving as the seat of the executive branch of govemment, and as the host to all foreign embassies to south Africa, pretoria straddies the Apies River and extends eastward into the foothills of the magaliesberg mountains', 925],

]




// card_landing_map = {
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         1: 'four',
//         1: 'five',
//         1: 'six',
//         1: 'seven',
//         1: 'eight',
//         1: 'nine',
//         1: 'ten',
//         1: 'eleven',
//         1: 'twelve',
//         1: 'thirteen',
//         1: 'fourteen',
//         1: 'fifteen',
//         1: 'one',
//         1: 'one',
//         1: 'one',
//         1: 'one',
//         1: 'one',
//         1: 'one',
//         1: 'one',
//         1: 'one',
//         1: 'one',
//         1: 'one',
// }
// card_list_in

blank_cards = [11, 18, 33, 32, 8, 9, 10,
        23, 31, 29, 30, 14, 7, 6, 13, 28,
        36, 41, 43, 48, 55, 50, 52, 45, 59,
        40, 47, 54]