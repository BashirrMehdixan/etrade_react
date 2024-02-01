const Preferences = () => {
    return (
        <>
            <div className="container">
                <div className="preferences-block">
                    <div className="preference-item">
                        <div className="prf-img">
                            <img src={"../assets/images/icons/service1.png"} alt="" />
                        </div>
                        <div className="prf-info">
                            <p className="prf-title">Fast & Secure Delivery</p>
                            <p className="prf-text">
                                Tell about your service.
                            </p>
                        </div>
                    </div>
                    <div className="preference-item">
                        <div className="prf-img">
                            <img src={"../assets/images/icons/service2.png"} alt="" />
                        </div>
                        <div className="prf-info">
                            <p className="prf-title">Money Back Guarantee</p>
                            <p className="prf-text">
                                Within 10 days.
                            </p>
                        </div>
                    </div>
                    <div className="preference-item">
                        <div className="prf-img">
                            <img src={"../assets/images/icons/service3.png"} alt="" />
                        </div>
                        <div className="prf-info">
                            <p className="prf-title">24 Hour Return Policy</p>
                            <p className="prf-text">
                                No question ask.
                            </p>
                        </div>
                    </div>
                    <div className="preference-item">
                        <div className="prf-img">
                            <img src={"../assets//images/icons/service4.png"} alt="" />
                        </div>
                        <div className="prf-info">
                            <p className="prf-title">Pro Quality Support</p>
                            <p className="prf-text">
                                24/7 Live support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preferences;