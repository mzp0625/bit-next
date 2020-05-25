import React from 'react';
import styled from 'styled-components'
import User from '../global/User'
import {Row, Col, Card, Avatar, Button, Space} from 'antd';


const StyledCard = styled(Card)`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 600;
  background: #FFFFFF;
  border: 0.4em solid rgba(210, 210, 210, 0.2);
  border-radius: 0px 0px 0.5em 0.5em;
`
const StyledTag = styled.p`
  font-size: 1em;
  line-height: 1em;
  padding: 1em 1.5em;
  background: #FFE870;
  border-radius: 0.5em;
  color: #000000;
`
const TitleDiv = styled.div`
  font-size: 1.56em;
  line-height: 1.5em;
  color: #000000;
  margin-bottom:0.2em; 
`
const TagsDiv = styled.div`
  font-size: 0.7em;
  line-height: 1em;
  color: #383838;
  margin-bottom:1em; 
`
const AuthDiv = styled.div`
  font-size: 0.7em;
  line-height: 1em;
  color: rgba(56, 56, 56, 0.7);
  margin-bottom:1em;  
`
const StatDiv = styled(Row)`
  font-size: 1em;
  line-height: 0.8em;
  color: #707070;
  margin-top: 1em;
  display: flex;
  justify-content : space-between;
  align-items: center; 
`
/* article state: draft, review, pubished, public, complete*/
const ArticleCard = props => (
  <StyledCard>
    <Row gutter={16} style={{flexWrap:"nowrap"}} >

      {/* left sider: show avatar or tag */}
      <Col >
        {props.article.articleState === 'public' && <Avatar src= {props.article.author.image} size = {40} />}
        {props.article.articleState === 'draft'  && <StyledTag>Draft</StyledTag>}
        {props.article.articleState === 'review' && <StyledTag>Review</StyledTag>}
      </Col>

      <Col style={{flex : "auto"}}>
        {/* middle: show three information lines */}
        <TitleDiv>{props.article.title}</TitleDiv>
        <TagsDiv>
          <Space>{props.article.tagList.map((tag, i) =>(<span key={i}>{"#" + tag}</span>))}</Space>
        </TagsDiv>
        {props.article.articleState === "public" && 
          <AuthDiv><span>{props.article.author.name + "・" + props.article.createdAt}</span></AuthDiv>
        }

        <StatDiv>
          {/* left bottom: show author avatar or icons */}
          <Col style={{marginTop:"1em"}}>
           {props.showAuth && 
              <User 
                name = {props.article.author.name}
                image = {props.article.author.image}
                avatarSize = {"20"}
                emptySubtitle = {true}
              />
            }
            {props.showStat &&
              <Space size={"large"}> 
                <span>{ "❤️ " + props.article.favoritesCount}</span>
                <span>{ "💬 " + props.article.commentsCount}</span>
              </Space>
            }
          </Col>

          {/* rigt bottom: show two buttons */}
          <Col>
            <Button 
              disabled={props.article.articleState === 'public'}
              onClick = {props.onLeftButtonClick}  
              style={{
                border: "none",
                background: "inherit"
              }}
            >
              {
                props.article.articleState === 'public' ? props.article.readtime + ' min read' :
                props.article.articleState === 'published' ? 'Reject' : 'Delete'
              }
            </Button>
            <Button 
              type={"primary"}
              onClick = {props.onRightButtonClick}  
              style={{
                fontWeight: 'bold',
                borderRadius: "0.5em",
                background: props.article.articleState === 'published' ? '#4EC700':'#007BED' ,
                borderColor :  props.article.articleState === 'published' ? '#4EC700':'#007BED' ,
              }}
            > 
              {
                props.article.articleState === 'public' ? 'BookMark' : 
                props.article.articleState === 'published' ? 'Published' : 'Edit'
              }
            </Button>
          </Col>
        </StatDiv>
      </Col>
    </Row>    
  </StyledCard>  

)

export default ArticleCard
