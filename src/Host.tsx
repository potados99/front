import React, { useState } from "react";
import { Badge, Card, Container } from "react-bootstrap";
import styled from "styled-components";

export type HostProps = {
  title: string;
  hostname: string;
  protocols: string[];
  description: string;
  links: {
    label: string;
    url: string;
  }[];
};

export default function Host({ title, hostname, protocols, description, links }: HostProps) {
  const [selected, setSelected] = useState(false);

  const summaryBody = (
    <SummaryCardBody selected={selected}>
      <h2 style={{ fontWeight: "bold" }}>{title}</h2>
      <Card.Subtitle>{hostname}</Card.Subtitle>
    </SummaryCardBody>
  );

  const detailBody = (
    <DetailCardBody selected={selected}>
      <Card.Title style={{ fontWeight: "bold" }}>{title}</Card.Title>
      <Card.Subtitle className={"text-muted mb-2"}>{hostname}</Card.Subtitle>
      {protocols.map((p) => (
        <Badge style={{ marginRight: "4px", marginBottom: "8px" }} key={p}>
          {p}
        </Badge>
      ))}
      <Card.Text>{description}</Card.Text>
      {links.map((l) => (
        <Card.Link href={l.url} key={l.url}>
          {l.label}
        </Card.Link>
      ))}
    </DetailCardBody>
  );

  return (
    <AnimatedCard
      selected={selected}
      className={"d-flex flex-column justify-content-center align-items-center"}
      onClick={() => setSelected(!selected)}
    >
      <Container>
        {summaryBody}
        {detailBody}
      </Container>
    </AnimatedCard>
  );
}

const AnimatedCard = styled(Card)<{ selected: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.04) 0 2px 10px 0;
  border-radius: 0.75rem;
  margin-top: 8px;

  transition: all 0.5s ease;
  height: ${({ selected }) => (selected ? "256px" : "8rem")};
  max-height: 400px;
`;

const SummaryCardBody = styled(Card.Body)<{ selected: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 40%;
  left: 0;
  transform: translate(0, -40%);

  padding-left: 32px;
  transition: all 0.5s ease;
  filter: ${({ selected }) => (selected ? "blur(10px)" : "")};
`;

const DetailCardBody = styled(Card.Body)<{ selected: boolean }>`
  padding: 8px;
  transition: all 0.4s ease-out;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transform: ${({ selected }) => (selected ? "none" : "translateY(50%)")};
  visibility: ${({ selected }) => (selected ? "visible" : "hidden")};
  height: ${({ selected }) => (selected ? "auto" : "0")};
`;
//display: ${({ selected }) => (selected ? "block" : "none")};

//   visibility: ${({ selected }) => (selected ? "visible" : "hidden")};
//   opacity: ${({ selected }) => (selected ? 1 : 0)};
