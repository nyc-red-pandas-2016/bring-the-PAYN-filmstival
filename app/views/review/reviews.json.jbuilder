json.reviews @reviews do |review|
  json.type "review"
  json.id review.id
  json.review review
  json.reviewer review.reviewer
  json.votes review.votes.sum(:point_value)
  json.film review.film
  json.category review.film.categories
  json.comments review.comments do |comment|
    json.comment comment
    json.votes comment.votes.sum(:point_value)
    json.user  comment.user
  end
end
