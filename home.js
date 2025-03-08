import './home.css'
import logo1 from './img/5.jpg'
import logo2 from './img/8.jpg'
import logo3 from './img/6.jpg'


function Home() {
    return (
        <>
            <div id='home-hero'>

                <div id='hero-div1'>
                    <h1 id='hero-head1'>Your Journey Your Story</h1>
                    <h3 id='hero-head2'>Choose Your Favourite Destination.</h3>
                    <button id='hero-btn'>Travel Plan</button>
                </div>
            </div>


            <div id='home-div2'>
                <h1 id='home-div2-head1'>Popular Destinations</h1>
                <h3 id='home-div2-head2'>Tours give you the opportunity to see a lot, within a time frame.</h3>
            </div>


            <div id='home-div3'>
                <div id='home-div3-subdiv1'>
                    <p id='home-div3-subdiv1-para1'>Taal Volcano, Batangas</p>
                    <p id='home-div3-subdiv1-para2'>One of the most iconic views in Luzon. Mt Tool boasts o
                        volcano inside a Icke inside on island tf you fancy a closer
                        look. tho hiko up to tho crater is O moto 45 minutos, ond is
                        easy enough foe beginners. Gu'des ossist you most of
                        the way. ond youl see the peculior environment found on
                        on active volcano. including volcanic rocks ond steam
                        vents. Tho hike can be dusty and hoc so plon foe on early
                        mocning trip. ond thon unwind with somo bulalo belote
                        hooding back home!
                    </p>
                </div>

                <div id='home-div3-subdiv2'>
                    {/* backgroung img called */}
                </div>

                <div id='home-div3-subdiv3'>
                    {/* backgroung img called */}
                </div>
            </div>


            <div id='home-div-4'>
                <div id='home-div4-subdiv1'>
                    {/* backgroung img called */}
                </div>

                <div id='home-div4-subdiv2'>
                    {/* backgroung img called */}
                </div>

                <div id='home-div4-subdiv3'>
                    <p id='home-div4-subdiv4-para1'>Taal Volcano, Batangas</p>
                    <p id='home-div4-subdiv4-para2'>One of the most iconic views in Luzon. Mt Tool boasts o
                        volcano inside a Icke inside on island tf you fancy a closer
                        look. tho hiko up to tho crater is O moto 45 minutos, ond is
                        easy enough foe beginners. Gu'des ossist you most of
                        the way. ond youl see the peculior environment found on
                        on active volcano. including volcanic rocks ond steam
                        vents. Tho hike can be dusty and hoc so plon foe on early
                        mocning trip. ond thon unwind with somo bulalo belote
                        hooding back home!
                    </p>
                </div>
            </div>

            <div id='home-div5'>
                <h1 id='home-div5-head1'>Recent Trips</h1>
                <h3 id='home-div5-head2'>You con discover unique destinations usng Google Maps.</h3>
            </div>


            <div id='home-div6'>

                <div id='home-div6-sub1'>
                    <img src={logo1} id="logo1" alt="logo" />
                    <p id='home-div6-para1'>Trip in Indonesia</p>
                    <p id='home-div6-para2'>Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.
                    </p>
                </div>

                <div id='home-div6-sub2'>
                    <img src={logo2} id="logo2" alt="logo" />
                    <p id='home-div6-para1'>Trip in Malaysia</p>
                    <p id='home-div6-para2'>Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural Influences.
                    </p>
                </div>

                <div id='home-div6-sub3'>
                    <img src={logo3} id="logo3" alt="logo" />
                    <p id='home-div6-para1'>Trip in France</p>
                    <p id='home-div6-para2'>France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches, Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Home