import { useState } from "react";
import styled from "styled-components";

const Publication = ({
	title,
	authors,
	year,
	journal,
	doi,
	abstract,
	code,
}: {
	title: string;
	authors: string;
	year: number;
	journal: string;
	doi?: string;
	abstract?: string;
	code?: string;
}) => {
	const [showAbstract, setShowAbstract] = useState(false);
	const me = ["Nicholas F. Liotta", "Nicholas Liotta"];

	return (
		<Container>
			<Title>{title}</Title>

			<Authors>
				{authors.split(", ").map((author, i, arr) => {
					const isMe = me.some((me) => author.includes(me));
					const isLast = i === arr.length - 1;

					if (isMe) {
						return (
							<span key={i}>
								<span style={{ color: "lightpink", fontWeight: "bold" }}>
									{author}
								</span>
								{!isLast && ", "}
							</span>
						);
					}

					return (
						<span key={i}>
							{author}
							{!isLast && ", "}
						</span>
					);
				})}
			</Authors>

			<Journal>
				<i>{journal}</i> ({year}){" "}
				{doi && (
					<span>
						DOI:{" "}
						<a
							href={`https://doi.org/${doi}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							{doi}
						</a>
					</span>
				)}
			</Journal>

			<LinksRow>
				{abstract && (
					<ClickableText onClick={() => setShowAbstract(!showAbstract)}>
						[Abstract]
					</ClickableText>
				)}
				{code && (
					<ClickableLink
						href={code}
						target="_blank"
						rel="noopener noreferrer"
						color="lightblue"
					>
						[Code]
					</ClickableLink>
				)}
			</LinksRow>

			{<AbstractBox show={showAbstract}>{abstract}</AbstractBox>}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid hsl(var(--primary-800));
	border-radius: 10px;
	padding: 1rem;
	margin-bottom: 1rem;
	background-color: hsl(var(--primary-900));
	width: 100%;
	box-sizing: border-box;
	font-family: "Space Mono", monospace;
    font-size: 0.95em;
`;

const Title = styled.h3`
	margin: 0 0 0.1rem 0;
	color: #fff;
`;

const Authors = styled.p`
	font-family: "Space Mono", monospace;
	white-space: pre-wrap;
	overflow-wrap: anywhere;
	word-break: break-word;
	margin: 0 0 0.1rem 0;
`;

const Journal = styled.p`
	margin: 0 0 0.5rem 0;
	color: #aaa;

	a {
		color: lightblue;
		text-decoration: none !important;
	}

	a:hover {
		opacity: 0.8;
		transition: color 0.3s ease, opacity 0.3s ease;
	}

	a:visited,
	a:hover,
	a:active,
	a:focus {
		text-decoration: none !important;
	}

	i {
		font-style: italic;
	}
`;

const LinksRow = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 0.25rem;
`;

const ClickableText = styled.span<{ color?: string }>`
	color: ${({ color }) => color || "lightgreen"};
	cursor: pointer;
	text-decoration: none;
	transition: color 0.3s ease, opacity 0.3s ease;

	&:hover {
		opacity: 0.8;
	}
`;

const ClickableLink = styled.a<{ color?: string }>`
	color: ${({ color }) => color || "lightgreen"};
	cursor: pointer;
	text-decoration: none !important;
	transition: color 0.3s ease, opacity 0.3s ease;

	&:hover {
		text-decoration: none !important;
		opacity: 0.8;
	}
`;

const AbstractBox = styled.div<{ show: boolean }>`
	opacity: ${({ show }) => (show ? 1 : 0)};
	max-height: ${({ show }) => (show ? "500px" : "0")};
	padding: ${({ show }) => (show ? "0.5rem" : "0 0.5rem")};
	overflow: hidden;
	font-family: "Open Sans", sans-serif;
	background-color: hsl(var(--primary-700));
	border-radius: 5px;
	font-size: 0.90rem;
	transition:
		opacity 1s ease,
		max-height 1s ease,
		padding 1s ease;
`;


export default Publication;
