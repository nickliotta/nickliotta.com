import PageWrapper from "./PageWrapper";
import Work from "../components/Work";
import styled from "styled-components";
import Northwell from "../assets/images/northwell.png";
import ColdSpringHarborLaboratory from "../assets/images/cold-spring-harbor-laboratory.png";
import WeillCornell from "../assets/images/weill-cornell.webp";
import CarnegieMellonUniversity from "../assets/images/carnegie-mellon-university.png";
import GladstoneInstitutes from "../assets/images/gladstone-institutes.png";
import { Helmet } from "react-helmet";

const Where = () => {
    return (
        <PageWrapper>
            <Helmet>
                <title>Where</title>
            </Helmet>

            <h1>Where I am</h1>
      
            <h3>Currently</h3>
            <WorkWrapper>
                <Work
                    logo                   = {Northwell}
                    timeline               = "May 2024 - Present"
                    company                = "Northwell Health"
                    department             = "Feinstein Institutes for Medical Research"
                    location               = "Manhasset, New York"
                    principalInvestigator  = {{ name: "Dr. Douglas Nixon", url: "https://feinstein.northwell.edu/institutes-researchers/our-researchers/douglas-f-nixon-md-phd" }}
                    advisors               = "Advised by Helena Reyes-Gopar, Nicholas Dopkins, and Douglas Nixon"
                    role                   = "Consultant Bioinformatician"
                />
                <Work
                    logo                   = {ColdSpringHarborLaboratory}
                    timeline               = "January 2022 - Present"
                    company                = "Cold Spring Harbor Laboratory"
                    department             = "Science education"
                    location               = "Cold Spring Harbor, New York"
                    role                   = "Head College Intern"
                />
            </WorkWrapper>

            <h3>Previously</h3>
            <WorkWrapper>
                <Work
                    logo                   = {CarnegieMellonUniversity}
                    timeline               = "May 2025 - August 2025"
                    company                = "Carnegie Mellon University"
                    department             = "Department of Psychology"
                    location               = "Pittsburgh, Pennsylvania"
                    principalInvestigator  = {{ name: "Dr. Jonathan Tsay", url: "https://www.tsaylab.com/" }}
                    advisors               = "Advised by Jonathan Tsay"
                    role                   = "Undergraduate Research Fellow"
                />
                <Work
                    logo                   = {WeillCornell}
                    timeline               = "February 2022 - April 2024"
                    company                = "Weill Cornell Medicine"
                    department             = "Department of Medicine"
                    location               = "New York, New York"
                    principalInvestigator  = {{ name: "Dr. Douglas Nixon", url: "https://vivo.weill.cornell.edu/display/cwid-dnixon" }}
                    advisors               = "Advised by Bhavya Singh, Jez L. Marston, and Douglas Nixon"
                    role                   = "Undergraduate Research Assistant"
                />
                <Work
                    logo                   = {GladstoneInstitutes}
                    timeline               = "January 2022 - August 2022"
                    company                = "University of California, San Francisco"
                    department             = "Gladstone Institute"
                    location               = "San Francisco, California"
                    principalInvestigator  = {{ name: "Dr. Nevan Krogan", url: "https://kroganlab.ucsf.edu/krogan-lab" }}
                    advisors               = "Advised by Mehdi Bouhaddou"
                    role                   = "High School Student Researcher"
                />
            </WorkWrapper>
        </PageWrapper>
    );
};

const WorkWrapper = styled.div`
    display: grid;
    width: 100%;
    gap: 2rem 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 1800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export default Where;
