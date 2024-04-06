import "./DescDetail.css"

const DescDetail = ({ data } : { data: any}) => {
    return (
        <div>
            <section className="descdetail">
                <div className="container">
                    <div className="section-heading">
                        <a href="">Description</a>
                        <a href="">Additional Information</a>
                        <a href="">Reviews [5]</a>
                    </div>

                    <div className="section-text">
                        <span>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</span>
                        <span>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</span>
                    </div>

                    <div className="section-img">
                        <div className="img__item">
                            <img src={data?.data?.image[2]} alt="" />
                        </div>
                        <div className="img__item">
                            <img src={data?.data?.image[3]} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DescDetail