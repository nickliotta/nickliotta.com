import { useMemo } from "react";
import { Tooltip } from "react-tippy";
import PageWrapper from "./PageWrapper";

const BIRTH = new Date("2004-01-22T10:15:00Z");
const YEAR_MILLIS = 31556952000;

const Home = () => {
    const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

    return (
        <PageWrapper forceReadableWidth>
            <h1>Who I am</h1>

            <p> 
                Nick. {/* @ts-ignore */}
        
                <Tooltip>
                    {age}
                </Tooltip>{" "} y/o undergraduate student studying computer science, mathematics, and psychology, with additional interests in international affairs and journalism.
            </p>

            <p>
                Interested in the intersection of computer science and biology.
            </p>
        </PageWrapper>
    );
};

export default Home;
