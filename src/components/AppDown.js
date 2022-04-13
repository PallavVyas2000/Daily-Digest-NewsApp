import React from 'react'
import Marquee from "react-fast-marquee";
import marqq from '../components/marqq.png';
function AppDown(props) {
    return (
        <div className="carousel">
            <div>
                <Marquee speed={50} gradient={false}>
                    <div>
                        <p id='p1'><mark>App is down, visit later for the latest News              </mark></p>
                    </div>
                    <div>
                        <p id='p1'><mark><mark>ऐप डाउन है, ताजा खबरों के लिए बाद में विजिट करें        </mark></mark></p>
                    </div>
                    <div>
                        <p id='p1'><mark>L'application est en panne, visitez plus tard pour les dernières nouvelles             </mark></p>
                    </div>
                    <div>
                        <p id='p1'><mark>アプリがダウンしています。最新のニュースについては後でアクセスしてください           </mark></p>
                    </div>
                </Marquee>
                <Marquee speed={80} gradient={false}>
                    <div className="marq" >
                        <img src={marqq} alt="" />
                    </div>
                    <div className="marq">
                        <img src={marqq} alt="" />
                    </div>
                    <div className="marq">
                        <img src={marqq} alt="" />
                    </div>
                    <div className="marq">
                        <img src={marqq} alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default AppDown