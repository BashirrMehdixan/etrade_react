import Breadcrumb from "layouts/Breadcrumb";

const Blog = () => {
    return (
        <>
            <section>
                <Breadcrumb />
                <div className="container">
                    <div className="blog-box">
                        <div className="left-side"></div>
                        <div className="right-side"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;