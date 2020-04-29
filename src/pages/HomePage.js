import React from "react";
import HPNavBar from "../components/HPNavBar.js";
import HomePageIntro from "../components/HomePageIntro.js";
import HPShowOffProduct from  "../components/HPShowOffProduct.js";
import '../styles/index.css';

class HomePage extends React.Component{

    constructor(){
        super();
        this.state={
            scrollY: 0,
            renderNav: false,
            showProductOffSet: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    /**add scroll event listener as soon as index page is loaded. */
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        // window.addEventListener('scroll', this.handleTypeWriter);
        let offSet = document.getElementById('show-off-product-container').offsetTop;
        this.setState({
            showProductOffSet: offSet
        });
    }

     /**Remove the listern when the component is no longer rendered. */
     componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        const scrollY = window.scrollY;
        const { showProductOffSet } = this.state;
        /**If the scroll bar position is equal or greater than the offset of the 
         * show-off-product-container, remove display:none i.e render the nav bar */ 
        const boolean = showProductOffSet <= scrollY ? true : false;

        this.setState({
            scrollY: scrollY,
            renderNav: boolean
        })
    }

    render(){
        return(
            <div>
                <HPNavBar renderNav={this.state.renderNav} />
                <HomePageIntro />
                <HPShowOffProduct/>
            </div>
        );   
    }
}
export default HomePage;