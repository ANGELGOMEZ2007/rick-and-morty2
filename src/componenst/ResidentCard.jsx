import ApiUrl from "../hooks/ApiUrl"


const ResidentCard = ({url}) => {

    const resident = ApiUrl(url)
    
  return (
    <article>
        <header>
            <img src={resident?.image} alt="" />
            <div className="">
                <div className="circle"></div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <hr />
            <ul>
                <li><span>Specie</span><span>{resident?.species}</span></li>
                <li><span>Origin</span><span></span>{}</li>
                <li><span>Episodes where appear</span><span></span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard