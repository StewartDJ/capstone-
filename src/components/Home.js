import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
// import BootstrapCarousel from '../BootstrapCarousel'
// import imageDisplayHome from "./imageDisplayHome";

export default class Home extends Component {
    render() {
        return (
           
<div className="layoutTestYellow pageBody">

  {/* this is the change for the homepage that I Lashy have done */}
  
<header className="App-header">


<div id="bannerWrapper">
<p className="bannerText">Welcome to Cincinnati</p>
{/* <img src={require('./banner.jpg')} alt="banner"/> */}
{/* <img src={require('./assets/sky.jpg')} alt="banner"/> */}
<img src={require('../assets/sky.jpg')} alt="banner" />

</div>

</header>

{/* change end */}

  {/* <div className="divider"> </div> */}
  <h1><center> LOTS TO DO AND SEE IN CINCINNATI yada yada </center></h1>
<div className="layoutTestBlue left pageBody">


<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block" src={require('../assets/tourist2.jpg')} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block" src={require('../assets/tourist3.jpg')} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block"src={require('../assets/tourists4.jpg')} alt="Third slide"/>


    </div>
  </div>
  
</div>  
</div>

<div className="layoutTestRed right pageBody">
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/Union2.jpg')} alt="union"/>
    <p className="bottom-left">VIEW</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/arcade.jpg')} alt="arcade"/>
    <p className="bottom-left">PLAY</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
    <img src={require('../assets/CAC3.jpg')} alt="CAC"/>
    <p className="bottom-left">ART</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/skatepark3.jpg')} alt="arcade"/>
    <p className="bottom-left">SKATE</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/otherMuseum.jpg')} alt="arcade"/>
    <p className="bottom-left">LEARN</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/newport1.jpg')} alt="arcade"/>
    <p className="bottom-left">SHOP</p> 
    
</div>

</div>

</div> 
<h2> THE CITY OF CINCINNATI</h2> 
<p className="blurb">    Cincinnati (/ˌsɪnsɪˈnæti/ SIN-sih-NAT-ee) is a major city in the U.S. state of Ohio and the government seat of Hamilton County.[11] Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky. The city is the economic and cultural hub of the Cincinnati metropolitan area, the fastest growing economic power in the Midwestern United States based on increase of economic output,[12] which had a population of 2,190,209 as of the 2018 census estimates. This makes it Ohio's largest metropolitan area and the nation's 29th-largest.[13] With a city population estimated at 303,940, Cincinnati is the third-largest city in Ohio and 64th in the United States. Cincinnati is within a day's drive of 49.70% of the United States populace, ranking it as fourth in the list of metro areas with the largest population base within one day's drive time.[14]

In the 19th century, Cincinnati was an American boomtown in the middle of the country. Throughout much of the 19th century, it was listed among the top 10 U.S. cities by population, surpassed only by New Orleans and the older, established settlements of the United States eastern seaboard, as well as being the sixth-biggest city for a period spanning 1840 until 1860. Cincinnati was the first city founded after the American Revolution, as well as the first major inland city in the country.

Cincinnati developed with fewer immigrants and less influence from Europe than East Coast cities in the same period. However, it received a significant number of German-speaking immigrants, who founded many of the city's cultural institutions. By the end of the 19th century, with the shift from steamboats to railroads drawing off freight shipping, trade patterns had altered and Cincinnati's growth slowed considerably. The city was surpassed in population by other inland cities, particularly Chicago, which developed based on strong commodity exploitation, economics, and the railroads, and St. Louis, which for decades after the Civil War served as the gateway to westward migration.

Cincinnati is home to three major sports teams: the Cincinnati Reds of Major League Baseball; the Cincinnati Bengals of the National Football League; and FC Cincinnati of Major League Soccer. The city's largest institution of higher education, the University of Cincinnati, was founded in 1819 as a municipal college and is now ranked as one of the 50 largest in the United States.[15] Cincinnati is home to historic architecture with many structures in the urban core having remained intact for 200 years. In the late 1800s, Cincinnati was commonly referred to as the "Paris of America", due mainly to such ambitious architectural projects as the Music Hall, Cincinnatian Hotel, and Shillito Department Store.[16] Cincinnati is the birthplace of William Howard Taft, the 27th President of the United States.
</p>

</div>

        )
    }
}

