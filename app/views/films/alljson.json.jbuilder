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
    json.votes review.votes
    json.reviewcomments review.comments do |comment|
      json.comment comment
      json.votes comment.votes
    end
  end
end

json.category @categories do |category|
  json.name category.name
end
