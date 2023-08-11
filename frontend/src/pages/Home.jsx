import React from "react";
import useDepartments from "../hooks/useDepartments";
const Home = () => {
  const departments = useDepartments();
  if (!departments) {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }
  return (
    <>
      <div className="container-fluid">
        <div className="mt-3 border rounded shadow p-3">
          <h5>Welcome to Human Resources Feedback Web!</h5>
          <p className="">
            We extend a warm and hearty welcome to all our valued employees and
            stakeholders to our newly launched Human Resources Department
            Feedback Web Portal. At University of Perpetual Help Molino, we
            believe that every voice matters, and this platform has been
            meticulously designed to provide you with a seamless and efficient
            way to share your thoughts, suggestions, and concerns. Our
            commitment to fostering a positive and thriving work environment is
            unwavering, and your feedback plays a pivotal role in helping us
            achieve this goal. This innovative portal empowers you to actively
            participate in shaping the future of our organization by
            contributing your insights. Whether you have ideas to enhance our
            workplace culture, suggestions for process improvements, or concerns
            that require attention, this platform is your direct line of
            communication to our HR team. Navigating the portal is intuitive and
            user-friendly, ensuring that you can easily submit your feedback and
            track its progress. Our dedicated HR professionals are here to
            listen, understand, and act where needed. Your feedback isn't just a
            formality; it's a catalyst for positive change, leading us toward
            continuous growth and improvement. As you embark on this journey of
            collaboration and communication, we encourage you to use this
            platform responsibly and respectfully. Your input will undoubtedly
            contribute to making University of Perpetual Help Molino an even
            better place to work and thrive. Thank you for being an essential
            part of our HR feedback community, and we look forward to engaging
            with your valuable insights.
          </p>
        </div>
        <div className="p-3 mt-3 border rounded shadow">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h5 className="">MOLINO CAMPUS</h5>
              <p>
                The second campus of the University of Perpetual Help System
                DALTA (UPHSD) is located in Molino. The campus was established
                and inaugurated in May 1995. Currently, UPHSD Molino caters to a
                student population of more than 6,000 – a dramatic increase
                based on its initial 700 enrollees. Standing tall in a pristine
                land area of six (6) hectares, the Molino campus is now the most
                notable educational institution in Bacoor, Cavite and its
                neighboring towns.
              </p>
              <p>
                UPH-Molino is committed to become a high-performing school that
                meets relevant quality standards and customer requirements. It
                will continually strive to exceed stakeholders’ expectations in
                all its programs and services.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <img
                src="https://perpetualdalta.edu.ph/wp-content/uploads/2023/03/107755553_611829486112063_5791830694368385005_n.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="p-3 mt-3 border shadow rounded">
          <h5 className="mb-3">Contact Information</h5>
          <div className="" style={{ border: "2px solid #FBCB0B" }}>
            <div className="row">
              <div className="col-12 col-lg-4 px-4 py-5">
                <div className="mb-4">
                  <h6 className="fw-semibold mb-1">Perpetual Molino</h6>
                  <i className="mb-1 fw-light">Molino 3, Bacoor Cavite, 4102</i>
                  <i className="d-block mb-1 fw-light">
                    (046) 477 – 1630 / 1430
                  </i>
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">Information Center</h6>
                  <i className="mb-1 fw-light">
                    admission.molino@perpetualdalta.edu.ph
                  </i>
                  <i className="d-block mb-1 fw-light">
                    (046) 477 – 0602 local 112
                  </i>
                </div>
              </div>
              <div className="col-12 col-lg-4 px-4 py-5">
                <div className="mb-4">
                  <h6 className="fw-semibold mb-1">Registrar</h6>
                  <i className="mb-1 fw-light">
                    registrar.molino@perpetualdalta.edu.ph
                  </i>
                  <i className="d-block mb-1 fw-light">
                    (046) 477-0602 local 115
                  </i>
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">Dr. Reno R. Rayel</h6>
                  <i className="mb-1 fw-light">School Director</i>
                  <i className="d-block mb-1 fw-light">
                    reno.rayel@perpetualdalta.edu.ph
                  </i>
                  <i className="d-block mb-1 fw-light">(046) 477 – 1640</i>
                </div>
              </div>
              <div
                className="col-12 col-lg-4 px-4 py-5"
                style={{ background: "#FBCB0B" }}>
                <h5 className="fw-semibold" style={{ color: "#7F1416" }}>
                  Office of the International Student Affairs
                </h5>
                <p className="fw-light" style={{ color: "#7F1416" }}>
                  University of Perpetual Help Molino Campus Office of the
                  International Student Affairs accepts international students.
                </p>
                <div className="text-center mb-3">
                  <a
                    className="fw-semibold fs-6"
                    style={{ color: "#7F1416" }}
                    href="https://perpetualdalta.edu.ph/office-of-the-international-student-affairs-molino/">
                    LEARN MORE
                  </a>
                </div>
                <div
                  className="px-5 py-3 text-center"
                  style={{ background: "#E2DCDC" }}>
                  <p className="mb-0">norie.tansio@perpetualdalta.edu.ph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-3 border rounded shadow p-3">
          <h5>Departments</h5>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae
            voluptatum culpa aspernatur odit at sint, necessitatibus eveniet
            quisquam suscipit! Iste excepturi minima cum vel mollitia! Possimus
            eius hic ad a? Nam iusto rem neque eos temporibus perspiciatis.
            Magni, fugit.
          </p>
        </div> */}
        {/* <div className="row mt-3 justify-content-center">
          <div className="col-6 border rounded shadow p-3 ">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                {departments.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : "null"}
                    aria-current="true"
                    aria-label={"Slide " + index + 1}></button>
                ))}
              </div>
              <div className="carousel-inner">
                {departments.map((department, index) => (
                  <div
                    key={index}
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }>
                    <img
                      src={"/images/department/" + department.name + ".jpg"}
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{department.name}</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, animi!
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
