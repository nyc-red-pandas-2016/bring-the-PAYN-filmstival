Person.create(username: 'pduke', password: 'password', email: 'peter@gmail.com', reviewer: true)

Film.create(title: "Big Labowski", description: 'This is a movie')


Person.first.reviews.create(reviewer_id: 1, text: "love this movie!", film_id: 1, rating: 3)

Person.first.reviews.first.comments.create(text: 'great review!', person_id: 1)

Film.first.comments.create(text: 'i recommend this movie!', person_id: 1)

Film.first.votes.create(person_id: 1, point_value: 1)