import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useEffect, useState } from "react";
import "./css/Breadcrumb.css";

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs();
    const currentPage = breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1] : null;
    const [productName, setProductName] = useState('');

    useEffect(() => {
        if (currentPage) {
            setProductName(currentPage.breadcrumb.props.name || '');
        }
    }, [currentPage]);

    return (
        <div className="breadcrumb-section">
            <div className="container">
                <div className="breadcrumb-block">
                    <div className="breadcrumb-box">
                        <div className="breadcrumb-left">
                            <div className="breadcrumb-nav">
                                {breadcrumbs.map(({ match, breadcrumb }) => (
                                    <Link key={match.pathname} to={match.pathname} className="nav-item">
                                        {breadcrumb}
                                    </Link>
                                ))}
                            </div>
                            <div className="page-title">{productName}</div>
                        </div>
                    </div>
                    <div className="breadcrumb-right">
                        <div className="breadcrumb-img">
                            <img src={"../assets/images/products/product-45.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;