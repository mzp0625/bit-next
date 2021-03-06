import Head from "next/head";
import React from "react";

import MainView from "../components/home/MainView";
import Tags from "../components/home/Tags";
import styled from 'styled-components';
import Twemoji from 'react-twemoji';

const StyledEmoji = styled(Twemoji)`
  .emoji {
    width: 20px;
    height: 20px;
  }
`

const StyledSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  color: #000000;
`

const StyledTagTitle = styled.div`
  padding-bottom: 1.5em;
`

const Home = () => (
  <>
    <Head>
      <title>HOME | NEXT REALWORLD</title>
      <meta
        name="description"
        content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
      />
    </Head>
    <div className="home-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-3">
            <StyledTagTitle>
              <Twemoji options={{ className: 'twemoji' }}>
                <StyledEmoji>🏷️<StyledSpan> Tags</StyledSpan></StyledEmoji>
              </Twemoji>
            </StyledTagTitle>
            <Tags />
          </div>
          <MainView />
        </div>
      </div>
    </div>
  </>
);

export default Home;
