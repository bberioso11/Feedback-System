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
          <h5>E-Feedback Mo!</h5>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            dolorum corrupti, sapiente maxime voluptatibus perferendis illum
            fugit nemo totam obcaecati aliquam qui consectetur nulla tempore eum
            quam, assumenda explicabo, exercitationem rerum odio autem delectus?
            Facilis, quibusdam magni libero omnis nihil, quaerat esse veritatis
            voluptas soluta qui quod. Iusto, ullam ea.
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
