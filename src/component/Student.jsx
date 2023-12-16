import axios from "axios";
import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Student = () => {
  const [student, setStudent] = useState([]);

  const getStudent = async () => {
    const Sdata = await axios.get("http://localhost:7070/students");
    setStudent(Sdata.data);
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row py-5">
          <h1 className="text-center pb-5">
            This is API Json server with react js project <hr />
          </h1>
          {student.map((iteam, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img className="w-100" src={iteam.photo} alt="" />
                    <h6 className="pt-3"> Name : {iteam.name}</h6>
                    <p>Skill : {iteam.skill}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Student;
