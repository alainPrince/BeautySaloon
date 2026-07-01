import "../style/about.css"

function About()
{
    const aboutUs = [{
        id: 1, name: "Vision & Mission", description: "To inspire confidence and beauty by providing professional, high-quality salon services in a friendly and relaxing environment." 
    },
    {
        id: 2, name: "Service We Offer", description: "We offer hair styling, makeup, skincare treatments, manicures, pedicures and other beauty services tailored to meet our clients needs."
    },
    {
        id: 3, name: "Contact & Location", description: "Visit our salon for expert beauty care. Contact us by phone, email or social media and find us at our convenient location for all your beauty needs."
    }]

    return(
        <main className="about-container">
            <h5 className="about-heading">About Beauty Saloon</h5>
            <section className="about-block">
                {aboutUs.map((about)=>
                    <article key={about.id} className="about-card">
                        <h5 className="about-title">{about.name}</h5>
                        <p className="about-note">{about.description}</p>
                    </article>
                )}
            </section>
        </main>
    )
}
export default About