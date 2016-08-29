# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
films = [{title:"The Godmother", description: "The life and times of Grace Hopper"}, {title: "The Bourne Symposium", description: "Jason Bourne returns to present a paper at an academic conference"}, {title: "Sassafras Laughing Gas", description: " a cookie-cutter rom-com filled wiht racist, sexist stereotypes"}, {title: "Tales from BCrypt", description: "Spooky tales of life at DBC After Dark"}, {title: "Amorous Arsonists", description: "Quentin Taratino tale of two lovers who set their passion (and their home) on fire"}, {title: "Flying Saucer Hidden Fees", description: "Chinese martial arts movie about a Martian credit card company that overcharges its customers"}, {title: "Silence of the Clams", description: "A cereal killer decides to get away from it all by fishing for mollusks off the Maine coast"}, {title: "Were Rabbits II: Rise of the Cauliflower King", description: "Tony (I/'m so lonely) fights back agains the wererabbbits"}, {title: "Pesadillas del Amor", description: "Spanish telenovela of intense pasión."}];

Film.create!(films)

folks = [{username: "aoscott", password: "password", email: "aoscott@dbc.com", reviewer: true}, {username: "janetmaslin", password: "password", email: "jmaslin@dbc.com", reviewer: true}, {username: "emitchell", password: "password", email: "emitchell@dbc.com", reviewer: true}, {username: "joemorgenstern", password: "password", email: "jmoe@dbc.com", reviewer: true}];


User.create!(folks)

users = [{username: "EricSnodgrass", password: "password", email: "eric@dbc.com", reviewer:false}, {username: "SakeenaEdmonton", password: "password", email: "sakeena@dbc.com", reviewer:false}, {username: "VincentStMallor", password: "password", email: "vincent@dbc.com", reviewer:false}, {username: "OguchiOnyewu", password: "password", email: "guchi@dbc.com", reviewer:false}, {username: "CharimanMao", password: "password", email: "mao@dbc.com", reviewer:false},
{username: "Inmate#234234", password: "password", email: "debtrow@dbc.com", reviewer:false}, {username: "TimAbernathy", password: "password", email: "tim@dbc.com", reviewer:false}, {username: "SusanaDolomitz", password: "password", email: "susana@dbc.com", reviewer:false}, {username: "JohnDKatherineTMacArthur", password: "password", email: "jdkt@dbc.com", reviewer:false}]

User.create!(users)

categories = [{name: "Horror"}, {name: "Comedy"}, {name: "Drama"}, {name: "Romantic Comedy"}, {name: "Action"}, {name: "Documentary"}]

Category.create!(categories)

reviews = [{reviewer_id:1, text:"A powerful film, a testament to the human spirit, a tour de force. You simply must see this film. It will change your life forever.", film_id:1, rating:4}, {reviewer_id:2, text:"This movie is by far the best of the Bourne franchise.  Here we the amnesiac superagent at his best: having to present his dissertation to a room full of skeptic academic advisors. Can Bourne get out of this one?  OR is this where the legend dies?", film_id:2, rating:3 }, {reviewer_id:4, text:"Grace Hopper is a bad mamajama.  She is the bee's knees. This movie is a revelation, a bombshell of historicity. Find out why they called this admiral 'Amazing Grace.'", film_id:1, rating:4}, {reviewer_id:3, text:"A sorry excuse of a film. This is stale Hollywood tripe, unworthy of our time. Its female characters are underdeveloped and uninteresting, its plot predictable and its jokes flat. It should be burned in its entirety.", film_id:3, rating:1 }, {reviewer_id:3, text:"Shocking, scary, creepy. This movie gave me the willies", film_id:4, rating:3 }, {reviewer_id:1, text: "I fell asleep during this movie. I forgot what it was about. I hope my boss doesn/'t read this or else I will get fired.", film_id:5, rating:2 }]

Review.create!(reviews)

genres = [{category_id: 6, film_id: 1}, {category_id:5, film_id:2}, {category_id:4, film_id:3 }, {category_id:1, film_id:4 }, {category_id:3, film_id:5}, {category_id:5, film_id:6 }, {category_id:2, film_id:7 },{category_id:1, film_id:8 }, {category_id:3, film_id:9 } ]
#

CategoryFilm.create!(genres)
