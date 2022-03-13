import React from 'react';

class NIWLBanner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerID: 0,
            banners: [],
        }
    }

    show(){
        let temp = [...this.state.banners];
        temp.push(
            <div key={this.state.bannerID} className="bg-white grid grid-cols-1 content-center mt-5 px-5 py-4 rounded shadow-xl">
                <b className="text-center">Not in word list</b>
            </div>
        );
        this.setState({
            bannerID: this.state.bannerID + 1,
            banners: temp,
        })

        console.log(this.state.banners);
        setTimeout(() => {
            temp = [...this.state.banners];
            temp.shift();
            this.setState({
                banners: temp,
            });

            console.log(this.state.banners)
        }, 1000)
    }
    
    render() {
        return (
            <div className="absolute grid grid-cols-1 justify-self-center mt-3">
                {this.state.banners}
            </div>
        );
    }

}

export default NIWLBanner;