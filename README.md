# Bar Hoppers

![Image of Screenshot](https://github.com/seyesij/FinalProject/blob/master/screenshot.png)

## What is Bar Hoppers?

> This is a web application that people can use to find bars wherever they are in America, using the zipcode. 

## Technical Discussion

> This app will be built with HTML, CSS, JavaScript, React.js and Express.js

### Notes on Game Structure

> Code samples
- addFavorite(){
    axios.post('/profile', {
      name: this.state.barData.Name,
      address: this.state.barData.Address,
      city: this.state.barData.City,
      zip: this.state.barData.Zip,
      image: this.state.barData.Bar_Image,
    })
    .then(res => {
      this.getUsersBars(this.state.user.id)
    })
    .catch(err => console.log(err));
  }

- removeFavorite(id){
    axios.delete(`/profile/${id}`,{
        id,
    }).then(res => {
      this.getUsersBars(this.state.user.id)
    })
    .catch(err => console.log(err));
  }

## The Making of Bar Hoppers

> Any credits or notes you feel you should add?
- API from https://www.barzz.net/

## Opportunities for Future Growth

-	Add more search functions including search by name, state, city
-	Add local/session storage
-   Improve css
-   Fix minor bugs
