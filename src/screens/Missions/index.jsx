import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
   Container,
   Title,
   Header,
   Logo,
   ProfileImage,
   Content,
   Mission,
   TitleSmall,
   Subtitle,
   SubtitleSmall,
   MissionImage,
   MissionWrapper
} from './styles';

export default function Missions() {
   return (
      <>
         <Container>
            <Header>
               <Logo/>

               <ProfileImage/>
            </Header>

            <Content>
               <Title>
                  Missions
               </Title>

               <Mission>
                  <MissionWrapper>
                     <TitleSmall>
                        Apollo XIV
                     </TitleSmall>
                     <Subtitle>
                        Lorem ipsum dolor sit amet
                     </Subtitle>
                     <SubtitleSmall>
                        Space
                     </SubtitleSmall>
                  </MissionWrapper>

                  <MissionImage/>
               </Mission>

               <Mission>
                  <MissionWrapper>
                     <TitleSmall>
                        EP-247
                     </TitleSmall>
                     <Subtitle>
                        Lorem ipsum dolor sit amet
                     </Subtitle>
                     <SubtitleSmall>
                        Space
                     </SubtitleSmall>
                  </MissionWrapper>

                  <MissionImage/>
               </Mission>

               <Mission>
                  <MissionWrapper>
                     <TitleSmall>
                        Lunar operations
                     </TitleSmall>
                     <Subtitle>
                        Lorem ipsum dolor sit amet
                     </Subtitle>
                     <SubtitleSmall>
                        Space
                     </SubtitleSmall>
                  </MissionWrapper>

                  <MissionImage/>
               </Mission>
            </Content>
         </Container>
         <StatusBar style="light"/>
      </>
   );
}