import React from "react";
import Host, { HostProps } from "./Host";
import { Container, Row } from "react-bootstrap";

function App() {

  const sites: HostProps[] = [
    {
      title: "개발 블로그",
      hostname: "blog.potados.com",
      protocols: ["http"],
      description: "감자도스 블로그입니다. 기술적인 이야기를 많이 합니다.",
      links: [
        {label: '바로가기', url: 'https://blog.potados.com'}
      ]
    },
    {
      title: "병준이의 군대 여행",
      hostname: "duty.potados.com",
      protocols: ["http"],
      description: "군대로 여행을 떠난 병준이의 이야기가 올라옵니다. 남은 날짜, 다가오는 일정을 볼 수 있어요. 댓글 달아주세요!",
      links: [
        {label: '바로가기', url: 'https://duty.potados.com'}
      ]
    },
    {
      title: "클라우드 저장소",
      hostname: "cloud.potados.com",
      protocols: ["http"],
      description: "자그마한 클라우드입니다. 라즈베리 파이 위에서 구동중입니다. 용량은 작지만 쓸만합니다.",
      links: [
        {label: '바로가기', url: 'https://cloud.potados.com'}
      ]
    },
    {
      title: "텍스트 수집기",
      hostname: "collect.potados.com",
      protocols: ["http"],
      description: "텍스트 업로드와 삭제를 지원하는 간단한 웹 메모장입니다. API 사용하여 간단한 임시 로그 수집기로 사용할 수 있어요.",
      links: [
        {label: '바로가기', url: 'https://collect.potados.com'}
      ]
    },
    {
      title: "툴박스",
      hostname: "tools.potados.com",
      protocols: ["http"],
      description: "유용한 유틸리티들을 모아 두었습니다.",
      links: [
        {label: '바로가기', url: 'https://tools.potados.com'}
      ]
    },
    {
      title: "수강신청 클라이언트",
      hostname: "sugang.potados.com",
      protocols: ["http"],
      description: "수강신청 백엔드의 또다른 클라이언트입니다. 편하고 빠르게 원하는 강의를 잡을 수 있어요.",
      links: [
        {label: '바로가기', url: 'http://sugang.potados.com'}
      ]
    },
    {
      title: "인스턴트 채팅",
      hostname: "chat.potados.com",
      protocols: ["http"],
      description: "접속한 사람들과 대화를 나눌 수 있습니다. 대화는 서버에 저장되지 않아요.",
      links: [
        {label: '바로가기', url: 'https://chat.potados.com'}
      ]
    },
    {
      title: "GitHub 감자도스 봇",
      hostname: "bot.potados.com",
      protocols: ["http"],
      description: "이슈에 인사를 남기고 릴리즈를 만들어 주는 GitHub 감자도스 봇입니다.",
      links: [
        {label: '바로가기', url: 'https://bot.potados.com'}
      ]
    },
    {
      title: "프론트 페이지",
      hostname: "www.potados.com",
      protocols: ["http"],
      description: "potados.com로 이어지는 주소입니다. 이 주소로 접속하면 이 페이지로 연결됩니다.",
      links: [
        {label: '바로가기', url: 'https://www.potados.com'}
      ]
    },

    {
      title: "온라인 쉘",
      hostname: "shell.potados.com",
      protocols: ["http"],
      description: "홈 네트워크의 중심에서 구동되는, 웹 브라우저에서 접근할 수 있는 쉘입니다.",
      links: [
        {label: '바로가기', url: 'https://shell.potados.com'}
      ]
    },
    {
      title: "NoMachine 원격 데스크탑",
      hostname: "desktop.potados.com",
      protocols: ["http"],
      description: "웹으로 제공되는 NoMachine 클라이언트입니다. 홈 네트워크의 개발 머신으로 연결됩니다.",
      links: [
        {label: '바로가기', url: 'https://desktop.potados.com'}
      ]
    },
    {
      title: "원격 브라우저",
      hostname: "browser.potados.com",
      protocols: ["http"],
      description: "원격 환경에서 실행되는 웹 브라우저입니다. AWS 인프라에서 구동중입니다.",
      links: [
        {label: '바로가기', url: 'https://browser.potados.com'}
      ]
    },

    {
      title: "AWS 메인",
      hostname: "aws.potados.com",
      protocols: ["http", "ssh"],
      description: "",
      links: [
        {label: '바로가기', url: 'https://'}
      ]
    },
    {
      title: "홈 네트워크 엔트리",
      hostname: "home.potados.com",
      protocols: ["http", "ssh"],
      description: "집으로 통하는 길입니다. HTTP로 접근하면 Home Assistant 콘솔을 볼 수 있습니다.",
      links: [
        {label: '바로가기', url: 'https://home.potados.com'}
      ]
    },

    {
      title: "파일 공유",
      hostname: "flick.potados.com",
      protocols: ["http"],
      description: "같은 네트워크에 연결된 노드 간의 WebRTC 기반 파일 공유를 지원하는 앱입니다.",
      links: [
        {label: '바로가기', url: 'https://flick.potados.com'}
      ]
    },
    {
      title: "집중 타이머",
      hostname: "focus.potados.com",
      protocols: ["http"],
      description: "집중력과 효율을 향상시켜 주는 타이머 앱입니다.",
      links: [
        {label: '바로가기', url: 'https://focus.potados.com'}
      ]
    },
  ];

  return (
    <Container className={"col-12"}>
      <Row className={"justify-content-center"}>
        {sites.map(s =>
          <Host {...s} key={s.hostname}/>
        )}
      </Row>
    </Container>
  );
}

export default App;
