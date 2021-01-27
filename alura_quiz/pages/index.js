import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Quiz CSS</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function submeter(e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <input
                type="text"
                name="name"
                onChange={function alterarNome(e) {
                  setName(e.target.value);
                }}
                placeholder="Digite seu nome"
              />

              <Button
                type="submit"
                disabled={name.length === 0}
                texto={`Jogar ${name}`}
              />
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Titulo</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste paragrafo</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/lucasfdcampos/alura-imersao-react-next" />
    </QuizBackground>
  );
}
