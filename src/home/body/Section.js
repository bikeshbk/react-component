import React from 'react';
import './Section.css';

class Section extends React.Component{
    render(){
        return(
            <div className="Section-background">
                <h2> New MacBook 2019 release date, price, features & specs</h2>
                <p>
                We were hoping for an update to Apple's super-slim 12in MacBook laptop at the 30 October 2018 event but Apple gave all the attention to the MacBook Air, failing to address the 12in model. Will Apple soon be updating the MacBook, last updated in June 2017? We expect to see an update soon, read on to find out what to expect. It is clear that Apple has been investigating solutions to the issue. The company filed a patent detailing one way to avoid the problem in March 2018. The "Ingress Prevention for Keyboards" patent outlines ways to stop spilt fluid, crumbs and dust from blocking key movement and damaging the circuitry, and, detailing how flaps could block the gaps around each key so that dust and liquids can't get in, it seems very similar to the new keyboards found on the 2018 MacBook Pro.
                </p>
            </div>
        );
    }
}
export default Section;