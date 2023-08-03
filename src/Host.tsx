import React from "react";
import { Badge, Card, Container } from "react-bootstrap";

export type HostProps = {
  title: string;
  hostname: string;
  protocols: string[];
  description: string;
  links: {
    label: string;
    url: string;
  }[]
};

export default function Host({ title, hostname, protocols, description, links }: HostProps) {
  return <Card style={{ width: "18rem", margin: "12px" }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>{hostname}</Card.Subtitle>
      {protocols.map((p) => (<Badge style={{marginRight: '4px', marginBottom: '8px'}} key={p}>{p}</Badge>))}
      <Card.Text>{description}</Card.Text>
      {links.map((l) => (<Card.Link href={l.url} key={l.url}>{l.label}</Card.Link>))}
    </Card.Body>
  </Card>;
}
