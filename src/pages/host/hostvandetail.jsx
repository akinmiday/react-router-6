import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"

const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "161616"
}

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <Link to=".."
                relative="path"
                className="back-button"
            >&larr; Back to all vans
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav" >
                    <NavLink to="." end style={({ isActive }) => isActive ? activeStyle : null} >Details</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="pricing" >Pricing</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="photos" >Photos</NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}