import './Home.css'
import ImageOne from '../assets/image.png'
import SectorOne from '../assets/sectors/SectorOne.jpg'
import SectorTwo from '../assets/sectors/SectorTwo.jpg'
import SectorThree from '../assets/sectors/SectorThree.jpg'
import WorkOne from '../assets/work/WorkOne.jpg'
import WorkTwo from '../assets/work/WorkTwo.jpg'
import WorkThree from '../assets/work/WorkThree.jpg'

import MainImage from '../assets/main.jpg'
const Home = () => {
    const serviceRows = [
        ['UI/UX Design', 'Mobile Applications Development', 'Paid Social', 'Branding', 'Design Audit'],
        ['Website Design and Development', 'Digital Management', 'Platform Consulting'],
        ['Explainer Videos', 'Mobile App Design', '3D Illustrations', 'Motion Design System'],
        ['Illustrations and Iconography']
    ];

    const stats = [
        { number: "1B+", label: "Lives Touched" },
        { number: "322+", label: "Delivered Projects" },
        { number: "300+", label: "Clients" },
        { number: "30+", label: "Global Awards" },
    ];


    return (
        <div>
            <section>

            </section>
            <section>
                <div className="container-fluid p-0" style={{ marginTop: '60px' }}>
                    <div className="row g-0">
                        {/* Left Section */}
                        <div className="col-md-6 d-flex align-items-center bg-white p-5">
                            <div className="py-5">
                                <h1 className=" text-dark mb-4" style={{ fontSize: '6rem' }}>
                                    FAST, FRESH,<br />
                                    AND FUTURE—<br />
                                    PROOF
                                </h1>
                                <button className="btn btn-danger rounded-pill px-4 py-2">
                                    Take Forward Now
                                </button>
                            </div>
                        </div>

                        {/* Right Section - Image */}
                        <div className="col-md-6">
                            <div className="position-relative" style={{ height: '100vh', maxHeight: '750px' }}>
                                <img
                                    src={MainImage}
                                    alt="Team meeting"
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                        </div>

                        {/* Statistics Section */}
                        <div className="col-12 bg-white">
                            <div className="container py-4">
                                <div className="row justify-content-between px-md-5">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="col-6 col-md-3 text-center mb-3 mb-md-0">
                                            <h2 className="fw-bold mb-0">{stat.number}</h2>
                                            <p className="text-muted mb-0">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='services-section-full'>
                <div className="container service-section py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="main-heading mb-4">
                                At KODEO, we offer expert digital services from platform consulting to digital management, designed to refine and elevate your online presence.
                            </h1>

                            <p className="sub-heading mb-4">
                                Interact with your users on the platforms they prefer. Web and mobile -<br></br> we have you covered.
                            </p>

                            <div className="services-container">
                                {serviceRows.map((row, rowIndex) => (
                                    <div key={rowIndex} className="service-row">
                                        {row.map((service, index) => (
                                            <div
                                                key={`${rowIndex}-${index}`}
                                                className="service-pill"
                                            >
                                                {service}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='case-study-section'>
                <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 15px" }} className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className='case-heading'>CASE STUDIES</h2>
                    <button className="btn btn-danger rounded-pill">See All</button>
                </div>

                <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 15px" }}>
                    {/* Header Section */}

                    {/* First Row */}
                    <div className="row g-4 align-items-center">
                        {/* Left: Two Boxes Side by Side */}
                        <div className="col-md-8">
                            <div className="d-flex gap-4">
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                            </div>
                        </div>
                        {/* Right: Two Headings with Text */}
                        <div className="col-md-4">
                            <div className="mb-4">
                                <h5 className='case-studies-heading'>Modern Vs Unmodern Usability Testing of Designs</h5>

                                <p>
                                    The metaverse is a virtual world where users interact with each
                                    other as avatars in a 3D space.
                                </p>
                            </div>
                            <div>
                                <h5 className='case-studies-heading'>Another Heading for Usability Testing</h5>

                                <p>
                                    Insights gained from usability tests can inform the design of
                                    better systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row g-4 pt-5 align-items-center">
                        {/* Left: Two Headings with Text */}
                        <div className="col-md-4">
                            <div className="mb-4">
                                <h5 className='case-studies-heading'>Exploring UX in the Digital Era</h5>

                                <p>
                                    Digital usability focuses on creating seamless experiences for
                                    users online.
                                </p>
                            </div>
                            <div>
                                <h5 className='case-studies-heading'>Improving Virtual Interfaces</h5>

                                <p>
                                    Better virtual interfaces enhance user engagement and satisfaction.
                                </p>
                            </div>
                        </div>
                        {/* Right: Two Boxes Side by Side */}
                        <div className="col-md-8">
                            <div className="d-flex gap-4">
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="row g-4  pt-5 text-center">
                        {/* Three Boxes */}
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>
                            <h5 className='case-studies-heading'>Future of Virtual Reality</h5>
                            <p>VR technology will redefine how we experience the digital world.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>
                            <h5 className='case-studies-heading'>Designing for the Metaverse</h5>

                            <p>
                                Creating intuitive and engaging interfaces for the metaverse
                                requires innovation.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>

                            <h5 className='case-studies-heading'>Inclusive Digital Spaces</h5>
                            <p>
                                Designing digital spaces that are accessible to everyone fosters
                                inclusivity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='clients-section'>
                <div className='clients-container'>
                    <div>
                        <h1 className='clients-heading'>Our Valuable Clients</h1>
                    </div>
                    <div className="clients-grid">
                        <div className="client-card">
                            Diia City
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card">Ministry of Health
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card">Diia City
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card">Ministry of Health
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card">Diia City
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card">Ministry of Health
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card">Diia City
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                        <div className="client-card">Ministry of Health
                            <p className='client-para'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <img src={ImageOne} alt="fireSpot" loading="lazy" className="responsive-image" />
            </section>

            <section className='industries-color'>
                <div className='d-flex industries-wrapper'>
                    <div className='heading-container' style={{ flex: '1 1 50%', backgroundColor: '#F7F4F2' }}>
                        <h1 className='industries-heading'>REIMAGINING INDUSTRIES <br /> THROUGH DESIGN</h1>
                        <p className='industries-para'>From agriculture, e-commerce, edtech and enterprise <br></br>solutions to fintech, healthcare, hospitality, IOT and HR solutions, <br></br>we have designed it all.</p>
                    </div>
                    <div className='grid-container' style={{ flex: '1 1 50%', backgroundColor: 'white', padding: '4rem' }}>
                        <div className='container'>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Fintech</h5>
                                    <p>Revolutionizing financial services through technology by enabling seamless transactions, improved user experiences, and secure solutions for global financial operations.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Health Tech</h5>
                                    <p>Empowering healthcare with innovative solutions, from patient monitoring wearables to telemedicine, and streamlined electronic health records for better patient outcomes.</p>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Sports</h5>
                                    <p>Enhancing athletic performance and fan experiences with data analytics, wearable technology, and immersive digital solutions for the sports industry.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Enterprise</h5>
                                    <p>Driving enterprise growth with tailored digital solutions, optimizing workflows, and enabling smart business operations for large organizations.</p>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>E-Commerce/Marketplace</h5>
                                    <p>Transforming online shopping experiences through scalable platforms, secure payment systems, and personalized customer engagement strategies.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>IT/Consulting</h5>
                                    <p>Providing expertise in technology integration, infrastructure development, and strategic consulting to help businesses thrive in the digital age.</p>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Media and Entertainment</h5>
                                    <p>Innovating content delivery, enhancing user engagement, and driving new revenue streams in the media and entertainment industry.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Internet of Things</h5>
                                    <p>Connecting devices and systems to create smart environments, improving efficiency, and offering new levels of convenience in everyday life.</p>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Venture Capitalists</h5>
                                    <p>Supporting startups and innovation with strategic investments, fostering growth in diverse industries through financial backing.</p>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>For a Cause</h5>
                                    <p>Leveraging technology to promote social good, empower communities, and address pressing global challenges effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="testimonials-container">
                    <h1 className='testimonials-heading'>Our Testimonials</h1>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "This service is exceptional! The team went above and beyond to meet our expectations."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile1.jpg" loading="lazy" alt="Profile" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">John Doe</h4>
                                    <p className="profile-designation">CEO, Example Co.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "Highly professional and reliable. I would recommend their services to anyone."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile2.jpg" alt="Profile" loading="lazy" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">Jane Smith</h4>
                                    <p className="profile-designation">Marketing Head, ABC Ltd.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "Highly professional and reliable. I would recommend their services to anyone."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile2.jpg" alt="Profile" loading="lazy" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">Jane Smith</h4>
                                    <p className="profile-designation">Marketing Head, ABC Ltd.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "Highly professional and reliable. I would recommend their services to anyone."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile2.jpg" alt="Profile" loading="lazy" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">Jane Smith</h4>
                                    <p className="profile-designation">Marketing Head, ABC Ltd.</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-feedback">
                                "Highly professional and reliable. I would recommend their services to anyone."
                            </p>
                            <div className="testimonial-profile">
                                <img src="profile2.jpg" alt="Profile" loading="lazy" className="profile-pic" />
                                <div className="profile-info">
                                    <h4 className="profile-name">Jane Smith</h4>
                                    <p className="profile-designation">Marketing Head, ABC Ltd.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className='location-section'>
                <div>
                    <div>
                        <h1 className='locations'>We are Culture-Driven UI UX <br></br>
                            & Development Agency </h1>
                        <p className='location-subheading'>We're a group of 180+ creative minds spread <br></br> across 4 countries touching billions of lives <br></br> through design.</p>
                        <div className="countries-container">
                            <div className="countries-grid">
                                <div>India</div>
                                <div>United Kingdom</div>
                                <div>UAE</div>
                                <div>Singapore</div>
                                <div>Russia</div>
                                <div>South Africa</div>
                                <div>Kazakhstan</div>
                            </div>
                        </div>
                        <div className='pt-5 pb-3'>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src={WorkOne} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={WorkTwo} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={WorkThree} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            


<section>
    sa
</section>

            <section className='sectors-section'>
                <div>
                    <div>
                        <h1 className='sectors'>Helping Governments, Industries and Public Sectors</h1>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row sectors-row">
                                <div className="col-sm">
                                    <img src={SectorOne} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Governments</h5>
                                    <p>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <h5 className='learn-more'>Learn More</h5>
                                </div>
                                <div className="col-sm">
                                    <img src={SectorTwo} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Public Sectors</h5>
                                    <p>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <h5 className='learn-more'>Learn More</h5>
                                </div>
                                <div className="col-sm">
                                    <img src={SectorThree} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Industries</h5>
                                    <p>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <h5 className='learn-more'>Learn More</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-section'>
                <div>
                    <div>
                        <h1 className='contact'>Let's make cool products <br></br> together</h1>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home