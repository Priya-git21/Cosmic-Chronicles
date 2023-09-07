import React, { Component } from "react";
import "./APOD.css";

export default class APOD extends Component {
    constructor() {
        super();
        this.state = {
            apod: [],
            loading: false,
            width: 4,
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        try {
            const response = await fetch(
                "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
            );
            if (!response.ok) {
                throw new Error(`API request failed with status: ${response.status}`);
            }
            const data = await response.json();
            this.setState({ apod: data });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { apod, loading } = this.state;

        return (
            <div className="container my-3">
                <h1 className="font">Astronomy Picture of the Day</h1>
                {loading ? (
                    <div style={{ color: "white", fontSize: "20px" }}>Loading...</div>
                ) : (
                    <div className="apod">
                        <h3 className="font">{apod.title}</h3>
                        <img
                            src={apod.hdurl ? apod.hdurl : apod.url}
                            alt={apod.title}
                            className="potd"
                        />
                        <div>
                            <h4 className="title">Explanation: </h4>
                            {apod.explanation}
                        </div>
                        <hr></hr>
                        <div>
                            <h4 className="title">Dated:</h4> {apod.date}
                        </div>
                        <hr></hr>
                        <div>
                            <h4 className="title">Copyright:</h4> {apod.copyright}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
