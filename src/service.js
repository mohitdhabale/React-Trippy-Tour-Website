import './service.css'
import logo1 from './img/5.jpg'
import logo2 from './img/8.jpg'
import logo3 from './img/6.jpg'


function Service() {
    return (
        <>
            <div id='service-hero'>
                <h1 id='service-hero-head'>Service</h1>
            </div>

            <div id='service-div1'>
                <h1 id='service-div1-head1'>Recent Trips</h1>
                <h3 id='service-div1-head2'>You con discover unique destinations usng Google Maps.</h3>
            </div>

            <div id='service-div2'>

                <div id='service-div2-sub1'>
                    <img src={logo1} id="logo1" alt="logo" />
                    <p id='service-div2-para1'>Trip in Indonesia</p>
                    <p id='service-div2-para2'>Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.
                    </p>
                </div>

                <div id='service-div2-sub2'>
                    <img src={logo2} id="logo2" alt="logo" />
                    <p id='service-div2-para1'>Trip in Malaysia</p>
                    <p id='service-div2-para2'>Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural Influences.
                    </p>
                </div>

                <div id='service-div2-sub3'>
                    <img src={logo3} id="logo3" alt="logo" />
                    <p id='service-div2-para1'>Trip in France</p>
                    <p id='service-div2-para2'>France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches, Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Service