# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
films = [{title:"The Godmother", description: "The life and times of Grace Hopper"}, {title: "The Bourne Symposium", description: "Jason Bourne returns to present a paper at an academic conference"}, {title: "Sassafras Laughing Gas", description: " a cookie-cutter rom-com filled wiht racist, sexist stereotypes"}, {title: "Tales from BCrypt", description: "Spooky tales of life at DBC After Dark"}, {title: "Amorous Arsonists", description: "Quentin Taratino tale of two lovers who set their passion (and their home) on fire"}, {title: "Flying Saucer Hidden Fees", description: "Chinese martial arts movie about a Martian credit card company that overcharges its customers"}, {title: "Silence of the Clams", description: "A cereal killer decides to get away from it all by fishing for mollusks off the Maine coast"}, {title: "Were Rabbits II: Rise of the Cauliflower King", description: "Tony (I/'m so lonely) fights back agains the wererabbbits"}, {title: "Pesadillas del Amor", description: "Spanish telenovela of intense pasión."}];

Film.create!(films)

folks = [{username: "aoscott", password: "password", email: "aoscott@dbc.com", reviewer: true}, {username: "aoscott", password: "password", email: "aoscott@dbc.com", reviewer: true}, {username: "janetmaslin", password: "password", email: "jmaslin@dbc.com", reviewer: true}, {username: "emitchell", password: "password", email: "emitchell@dbc.com", reviewer: true}, {username: "aoscott", password: "password", email: "aoscott@dbc.com", reviewer: true}, {username: "joemorgenstern", password: "password", email: "jmoe@dbc.com", reviewer: true}];

Person.create!(folks)

users = [{username: "EricSnodgrass", password: "password", email: "eric@dbc.com", reviewer:false}, {username: "SakeenaEdmonton", password: "password", email: "sakeena@dbc.com", reviewer:false}, {username: "VincentStMallor", password: "password", email: "vincent@dbc.com", reviewer:false}, {username: "OguchiOnyewu", password: "password", email: "guchi@dbc.com", reviewer:false}, {username: "CharimanMao", password: "password", email: "mao@dbc.com", reviewer:false},
{username: "Inmate#234234", password: "password", email: "debtrow@dbc.com", reviewer:false}, {username: "TimAbernathy", password: "password", email: "tim@dbc.com", reviewer:false}, {username: "SusanaDolomitz", password: "password", email: "susana@dbc.com", reviewer:false}, {username: "JohnDKatherineTMacArthur", password: "password", email: "jdkt@dbc.com", reviewer:false}]

Person.create!(users)
