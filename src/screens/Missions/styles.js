import styled from 'styled-components/native';

import ImageLogo from './../../../assets/logo.png';

export const Container = styled.View`
   flex: 1;
`;

export const Title = styled.Text`
   font-family: ${({ theme }) => theme.fonts.medium};
   font-size: 24px;
   margin-bottom: 20px;
`;

export const TitleSmall = styled.Text`
   font-family: ${({ theme }) => theme.fonts.medium};
   font-size: 20px;
`;

export const Subtitle = styled.Text`
   font-family: ${({ theme }) => theme.fonts.regular};
   font-size: 16px;
   color: #575757;
`;

export const SubtitleSmall = styled.Text`
   font-family: ${({ theme }) => theme.fonts.regular};
   font-size: 14px;
   color: #575757;
`;

export const Header = styled.View`
   width: 100%;
   background-color: #1C1C1C;
   padding: 50px 20px 20px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const Logo = styled.Image.attrs({
   source: ImageLogo
})`
   width: 56px;
   height: 24px;
`;

export const ProfileImage = styled.Image.attrs({
   source: { uri: 'https://pplware.sapo.pt/wp-content/uploads/2021/10/elon_musk_rico_1.jpg' }
})`
   width: 32px;
   height: 32px;
   border-radius: 32px;
`;

export const Content = styled.View`
   padding: 20px;
`;

export const HeaderWrapper = styled.View`
   flex: 1;
`;

//Missions
export const Mission = styled.TouchableOpacity`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 20px;
`;

export const MissionWrapper = styled.View`
   flex: 1;
`;

export const MissionImage = styled.Image.attrs({
   source: { uri: 'https://ak.picdn.net/shutterstock/videos/1018556059/thumb/5.jpg' }
})`
   width: 70px;
   height: 70px;
   border-radius: 12px;
`;