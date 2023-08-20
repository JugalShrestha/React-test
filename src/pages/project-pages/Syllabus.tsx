import GoBackBtn from "../../components/GoBackBtn";
import rootBranch from "../../components/variables/rootBranch";

const Syllabus = () => {
  return (
    <section className="syllabus-page" id="page">
      <GoBackBtn />
      <div className="header">
        <div className="main-header">Syllabus</div>
        <div className="sub-header">Syllabus for 1-8 semesters</div>
      </div>
      <div className="syllabus-body">
        <ul className="semester-options">
          <li className="semester-option">
            <a
              href={rootBranch + "/src/assets/pdf/syllabus/2nd-sem.pdf"}
              target="_blank"
            >
              2
            </a>
          </li>
          <li className="semester-option">
            <a
              href={rootBranch + "/src/assets/pdf/syllabus/3rd-sem.pdf"}
              target="_blank"
            >
              3
            </a>
          </li>
          <li className="semester-option syllabus-1-8">
            <a
              href={rootBranch + "/src/assets/pdf/syllabus/whole-syllabus.pdf"}
              target="_blank"
            >
              BIM-COURSE-STRUCTURE.pdf
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Syllabus;
