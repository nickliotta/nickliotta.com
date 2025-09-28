import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { ExternalLinkIcon } from "./Icons";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";

const calc = (x: number, y: number) => [
	-(y - window.innerHeight / 2) / 200,
	-(x - window.innerWidth / 2) / 200,
	1.05,
];

const trans = (x: number, y: number, s: number): string =>
	`perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Work = ({
	company,
	logo,
	department,
	role,
	principalInvestigator,
	location,
	timeline,
	advisors,
    website
}: {
	company: string;
	logo: string;
	department: string;
	role: string;
	location?: string;
	principalInvestigator?: string;
	timeline?: string;
	advisors?: string;
    website: string;
}) => {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 2, tension: 350, friction: 40 },
	}));

	return (
        <A href={website} target="_blank" rel="noopener">
            <Container
                onMouseMove={({ clientX: x, clientY: y }: { clientX: number; clientY: number }) =>
                    set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                //@ts-ignore
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <Header>
                    <img alt={`${company} Logo`} draggable={false} src={logo} />
                    <div>
                        <sub>{timeline}</sub>
                        <h3>
                            {company} <ExternalLinkIcon />
                        </h3>
                        <span>{department}</span>
                        <Location>
                            {location}
                        </Location>
                    </div>
                </Header>
                <Content>
                    <p>
                        {role}{" "}
                        {principalInvestigator && (
                            <>
                                under{" "}
                                <MentorTooltip title={advisors} arrow>
                                    <Advisor>
                                        {principalInvestigator}
                                    </Advisor>
                                </MentorTooltip>
                            </>
                        )}
                    </p>
                </Content>
            </Container>
        </A>
	);
};

const MentorTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "#1f1f1f",
		color: "#fff",
		minWidth: 150,
		maxWidth: "none",
		width: "auto",
		fontFamily: "inherit",
		fontSize: "0.95rem",
		padding: "8px 20px",
		borderRadius: "8px",
		whiteSpace: "normal",
		lineHeight: 1.25,
		boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
		textAlign: "center",
	},
	[`& .${tooltipClasses.arrow}`]: {
		color: "#1f1f1f",
	},
}));

const A = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none !important;
  }
`;

const Location = styled.a`
	width: 100%;
	display: flex;
	align-items: center;
	font-weight: 500;
	height: 19px;
	font-size: 14px;
	margin-top: 1px;
	margin-bottom: 15px;
	user-select: none;

	color: #a7a7a7f3;

	&:hover {
		text-decoration: none !important;
	}

	svg:first-child {
		height: 18px;
		width: 18px;
		margin-right: 10px;
		color: #ff65b2;
	}
`;

const Container = styled(animated.div)`
	width: 30em;
	border: 1px solid hsl(var(--primary-800));
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.1s ease;
	height: 100%;
	will-change: transform;

	&:hover {
		background-color: hsl(var(--primary-800));
	}
`;

const Advisor = styled.a`
	color: inherit;
	font-weight: 500;
	text-decoration: none;
	transition: color 0.2s;

	&:hover {
		color: #fff;
		text-decoration: none !important;
	}
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem;

	img {
		width: 70px;
		height: 70px;
		border-radius: 25%;
		margin-right: 1rem;
	}

	div {
		sub {
			text-transform: uppercase;
			color: #ff65b2;
			letter-spacing: 2px;
		}

		h3 {
			margin: 0;
		}

		svg {
			width: 15px;
			height: 15px;
			color: #ccc;
		}

		span {
			color: #ccc;
		}
	}
`;

const Content = styled.div`
	padding: 1rem;
	box-sizing: border-box;

	h3 {
		margin: 0.5rem 0;
		font-size: 1rem;
	}

	p {
		margin: 0.25rem 0 0.75rem 0;
		margin-top: -0.8rem;
		margin-bottom: 0.75rem;
	}
`;

export default Work;
