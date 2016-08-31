json.films @films do |film|
  json.film film
  json.category film.categories.pluck(:name)
  json.votes film.votes
  json.filmcomments film.comments do |comment|
    json.comment comment
    json.votes  comment.votes
  end
  json.reviews film.reviews do |review|
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
end

json.category @categories do |category|
  json.name category.name
end
