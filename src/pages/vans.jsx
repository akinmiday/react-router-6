import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../api"



export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")


    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)


            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])


    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">

            <Link to={van.id} state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter
            }} >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>

            </Link>
        </div>
    ))


    if (loading) {
        return <h1>Loading.....</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons" >
                {/* <Link to="?type=simple"
                    className="van-type simple"
                >Simple</Link>
                <Link to="?type=luxury"
                    className="van-type luxury"
                >Luxury</Link>
                <Link to="?type=rugged"
                    className="van-type rugged"
                >Rugged</Link>
                <Link to="."
                    className="van-type clear-filters"
                >Clear</Link> */}

                <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "simple" })} >Simple</button>
                <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "luxury" })} >Luxury</button>
                <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "rugged" })} >Rugged</button>
                {typeFilter ? <button className="van-type clear-filters" onClick={() => setSearchParams({})} >Clear</button> : null}
            </div>
            <div className="van-list" >
                {vanElements}
            </div>
        </div>
    )
}