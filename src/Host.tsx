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
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>{hostname}</Card.Subtitle>
    </SummaryCardBody>
  );

  const detailBody = (
    <DetailCardBody selected={selected}>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>{hostname}</Card.Subtitle>
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
      style={{ height: "20rem" }}
      className={"col-sm-12 col-md-4 col-lg-3 d-flex flex-column justify-content-center align-items-center"}
      onClick={() => setSelected(!selected)}
    >
      <Container>
        {summaryBody}
        {detailBody}
      </Container>
    </AnimatedCard>
  );
}

const AnimatedCard = styled(Card)``;

const SummaryCardBody = styled(Card.Body)<{ selected: boolean }>`
  transition: all 0.5s ease;
  filter: ${({ selected }) => (selected ? "blur(10px)" : "")};
`;

const DetailCardBody = styled(Card.Body)<{ selected: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  transition: all 0.5s ease;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transform: ${({ selected }) => (selected ? "none" : "translateY(5%)")};
`;

//   opacity: ${({ selected }) => (selected ? 1 : 0)};
