import React from "react"
import { useParams, Link, Outlet, NavLink, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"

export function loader({ params }) {
    return getHostVans(params.id)
}

const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "161616"
}

export default function HostVanDetail() {
    const { id } = useParams()
    const currentVan = useLoaderData()

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
