# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


```
[_*_]<App />
  <Navbar />
    -header
    <SearchBar />
    <LoginStuff />
  <Featured />
    -Random movies
  <CategoriesBar />
    <Category />
    <Sort />
  <MoviesList /> (sorted by category)
    <Movie />
      <Reviews />(for selected movie)
        <Review />
          -review content
          <Vote />
        <Comments />
          <Comment />
            -content
          <Vote />
           -vote button
  <Reviews /> (sorted by date & category)
    <Review />
      -review content
      <Vote />
        -vote button
    <Comments />
      <Comment />
        -content
      <Vote />


      (***Stretch goals. events put in as seed data***)
  <Events /> (movies sorted by event date)
    <Movie />
      <Reviews />(for selected movie)
        <Review />
          -review content
          <Vote />
        <Comments />
          <Comment />
            -content
          <Vote />
           -vote button
```
