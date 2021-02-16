import React, {useState} from 'react';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  TypingIndicator,
  MessageSeparator,
  ExpansionPanel
} from "@chatscope/chat-ui-kit-react";
import { NavBar } from './NavBar';
import { Container } from 'react-bootstrap';
import Footer from './footer';
import zoe from '../assets/zoe.svg';
import kai from '../assets/kai.svg';
import emily from '../assets/emily.svg';
import joe from '../assets/joe.svg';
import lilly from '../assets/lilly.svg';


export default function Messages(){

  const [messageInputValue, setMessageInputValue] = useState("");
  return (
    <div>
      <NavBar />
      <div style={{
        height: "600px",
        position: "relative"
        }}>
        <MainContainer responsive>                                   
          <Sidebar position="left" scrollable={false}>
            <Search placeholder="Search..." />
            <ConversationList>        
              <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you" active>
                <Avatar src={zoe} name="Zoe" status="dnd" />
              </Conversation>

              <Conversation name="Lilly" lastSenderName="Lilly" info="Okay. Noted.">
                <Avatar src={lilly} name="Lilly" status="available" />
              </Conversation>
              
              <Conversation name="Joe" lastSenderName="Me" info="No problem.">
                <Avatar src={joe} name="Joe" status="dnd" />
              </Conversation>
              
              <Conversation name="Emily" lastSenderName="Emily" info="Hi, I wonder if you are free for..." unreadCnt={3}>
                <Avatar src={emily} name="Emily" status="available" />
              </Conversation>
              
              <Conversation name="Kai" lastSenderName="Kai" info="Alright then." unreadDot>
                <Avatar src={kai} name="Kai" status="unavailable" />
              </Conversation>
                                                                        
            </ConversationList>
          </Sidebar>
            
          <ChatContainer>
            <ConversationHeader>
              <ConversationHeader.Back />
              <Avatar src={zoe} name="Zoe" />
              <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
              <ConversationHeader.Actions>
                <VoiceCallButton />
                <VideoCallButton />
                <InfoButton />
              </ConversationHeader.Actions>          
            </ConversationHeader>
            <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
              
              <MessageSeparator content="Tuesday, 23 February 2021" />
              
              <Message model={{
                  message: "Hello Andrew!! I need your help",
                  sentTime: "20 mins ago",
                  sender: "Zoe",
                  direction: "incoming",
                  position: "single"
                }}>
                <Avatar src={zoe} name="Zoe" />
              </Message>
                            
              <Message model={{
                  message: "Hi Zoe, What's wrong?",
                  sentTime: "15 mins ago",
                  sender: "Patrik",
                  direction: "outgoing",
                  position: "single"
                }} />
              <Message model={{
                  message: "Are you okay to attend the meeting on this afternoon?",
                  sentTime: "15 mins ago",
                  sender: "Zoe",
                  direction: "incoming",
                  position: "first"
                }} avatarSpacer />
              <Message model={{
                  message: "I haven't receive your reply from the event yet.",
                  sentTime: "15 mins ago",
                  sender: "Zoe",
                  direction: "incoming",
                  position: "normal"
                }} avatarSpacer />
              <Message model={{
                  message: "Is everything okay?",
                  sentTime: "15 mins ago",
                  sender: "Zoe",
                  direction: "incoming",
                  position: "last"
                }}>
                <Avatar src={zoe} name="Zoe" />
              </Message>
                            
              <Message model={{
                  message: "Oops, sorry. I didn't notice that. Okay, no problem, I will attend the meeting.",
                  sentTime: "15 mins ago",
                  sender: "Patrik",
                  direction: "outgoing",
                  position: "single"
                }} />
                            
                <Message model={{
                    message: "Great! Thank you.",
                    sentTime: "15 mins ago",
                    sender: "Zoe",
                    direction: "incoming",
                    position: "single"
                  }}>
                  <Avatar src={zoe} name="Zoe" />
                </Message>
            </MessageList>
            <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} onSend={() => setMessageInputValue("")} />
          </ChatContainer>
          
            <Sidebar position="right">
              <ExpansionPanel open title="INFO">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
              <ExpansionPanel title="LOCALIZATION">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
              <ExpansionPanel title="MEDIA">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
              <ExpansionPanel title="SURVEY">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
              <ExpansionPanel title="OPTIONS">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
            </Sidebar>            
        </MainContainer>
      </div>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}